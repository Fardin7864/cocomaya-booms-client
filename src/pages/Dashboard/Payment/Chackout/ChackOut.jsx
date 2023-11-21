import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios/useAxios";
import useCart from "../../../../hooks/useCart/useCart";
import useAuth from "../../../../hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";

const ChackOut = () => {
    const [carError, setCarError] = useState();
    const [clientSecret, setclientSecret] = useState();
    const [transectionId, settransectionId] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxios();
    const {cart,refetch} = useCart();
    const navigate = useNavigate();
    const {user, successToast} = useAuth();
    const totalPrice = cart?.data.reduce((total, item) =>total +item.price,0)

    useEffect(() => { 
      if (totalPrice) {
        axiosSecure.post('/create-payment-intent',{price: totalPrice})
        .then(res => {
            console.log(res?.data)
            setclientSecret(res?.data?.clientSecret)
        })
      }
     },[axiosSecure,totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
        return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
        return;
    }


    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    });

    if (error) {
        console.log('[error]',error)
        setCarError(error?.message)
    }else {
        console.log('PaymentMethod:', paymentMethod)
        setCarError('');
    }

    //confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || "Anonymas",
                name: user?.displayName || "Anonymas"
            }
        }
    })

    if (confirmError) {
        console.log("confirmerror:", confirmError)
    }else{
        console.log('payment intent', paymentIntent)
        if (paymentIntent.status === 'succeeded') {
            console.log('transection id', paymentIntent.id)
            settransectionId(paymentIntent.id);

            const payment = {
              email: user?.email,
              name: user?.displayName,
              transectionId: paymentIntent.id,
              price: totalPrice,
              date: new Date(), // uts date , use moment js
              cartId: cart?.data?.map(item => item._id),
              menuItemId: cart?.data?.map(item => item.cartId),
              status: 'pending',
            }

          const res = await  axiosSecure.post('/payments', payment);
          console.log('payment saved:', res.data?.deleteResult?.deletedCount)
          if(res.data?.deleteResult?.deletedCount > 0){
            refetch();
            successToast("Successfully completed payment!")
            navigate('/dashboard/paymentHistory')
          }
        }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button className=" btn btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className=" text-red-600">{carError}</p>
      {transectionId && <p className=" text-green-500">Your Transection id: {transectionId}</p>}
    </form>
  );
};

export default ChackOut;
