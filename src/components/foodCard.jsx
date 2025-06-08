import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";

const FoodCard = ({ id, name, price, desc, rating, img, handleToast }) => {

    const dispatch = useDispatch();

    return (
        <div className='w-[300px] p-5 shadow-lg bg-white flex flex-col rounded-lg gap-2'>
            <img src={img}
                alt='pizza' className='w-auto h-[150px] hover:scale-110 cursor-grab transition-all duration-300 ease-in-out' />
            <div className='flex justify-between font-bold mt-4'>
                <h3>{name}</h3>
                <span className='text-green-500'>रु {price}</span>
            </div>
            <p className='text-sm font-normal'>
                {desc.slice(0, 100)}...
            </p>
            <div className='flex justify-between'>
                <span className='flex items-center gap-1'><FaStar className='text-yellow-400 ' />{rating}</span>
                <button
                    onClick={() => {
                        dispatch(addToCart({ id, name, price, rating, img, qty: 1 }))
                        handleToast(name);
                    }}
                    className='bg-green-500 p-1 text-white text-sm font-semibold rounded-lg hover:bg-green-600'>Add to cart</button>
            </div>
        </div >

    )
}

export default FoodCard