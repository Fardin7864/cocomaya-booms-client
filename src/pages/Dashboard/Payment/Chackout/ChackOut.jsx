import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios/useAxios";
import useCart from "../../../../hooks/useCart/useCart";
import useAuth from "../../../../hooks/useAuth/useAuth";

const ChackOut = () => {
    const [carError, setCarError] = useState();
    const [clientSecret, setclientSecret] = useState();
    const [transectionId, settransectionId] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxios();
    const {cart} = useCart();
    const {user} = useAuth();
    const totalPrice = cart?.data.reduce((total, item) =>total +item.price,0)

    useEffect(() => { 
        axiosSecure.post('/create-payment-intent',{price: totalPrice})
        .then(res => {
            console.log(res?.data)
            setclientSecret(res?.data?.clientSecret)
        })
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
            settransectionId(paymentIntent.id)
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
