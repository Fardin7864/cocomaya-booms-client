import SerctionTitle from "../../../common/SectionTitle/SerctionTitle";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js"
import ChackOut from "./Chackout/ChackOut";


const stripePromise = loadStripe(import.meta.env.VITE_Pyment_key);

const Payment = () => {
    return (
        <div>
            <SerctionTitle subTitle="Pay Please" title="Payment"></SerctionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <ChackOut></ChackOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;