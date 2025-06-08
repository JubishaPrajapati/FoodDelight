import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {loading ? <PropagateLoader color="#22C55E" /> :
                <div>
                    <h1 className='font-bold text-3xl text-center text-green-600'>
                        Order Successfull !
                    </h1>
                    <p className='font-semibold text-xl'>Your order has been placed successfully.</p>
                </div>
            }

        </div>
    )
}

export default Success;