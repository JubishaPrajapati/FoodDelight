import { CgClose } from "react-icons/cg";
import CartItem from "./cartItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const [activeCart, setActiveCart] = useState();
    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.cart);
    const totalQty = cartItems.reduce((totalQtyAcc, item) => totalQtyAcc + item.qty, 0);
    const totalPrice = cartItems.reduce((totalPriceAcc, item) => totalPriceAcc + item.qty * item.price, 0)

    return (
        <>
            <div className={`bg-white border fixed top-0 right-0 w-full h-full lg:w-[25vw] ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500`} >
                <div className="flex justify-between m-5">
                    <span className="font-bold text-xl text-gray-800">My Orders</span>
                    <CgClose onClick={() => setActiveCart(!activeCart)} className="hover:bg-red-500 hover:border-red-500 hover:text-white cursor-pointer border-2 border-gray-500 text-2xl rounded-lg text-gray-600 " />
                </div>

                {cartItems.length > 0 ? cartItems.map((food) => {
                    return (
                        < CartItem
                            key={food.id}
                            id={food.id}
                            name={food.name}
                            price={food.price}
                            img={food.img}
                            qty={food.qty}
                        />
                    )

                }) : <h1 className="text-xl font-semibold text-center mt-10 text-gray-500">Your cart is empty</h1>}



                <div className="absolute bottom-0 ">
                    <h3 className="font-semibold text-gray-800 text-lg ml-4">Items : {totalQty}</h3>
                    <h3 className="font-semibold text-gray-800 text-lg ml-4">Total Amount : {totalPrice}</h3>
                    <hr className="w-full lg:w-[25vw] my-3 "></hr>
                    <button className="bg-green-500 rounded-lg p-2 m-2 font-bold text-white w-[100vw] lg:w-[24vw] mb-5"
                        onClick={() => navigate('/success')}>
                        Checkout
                    </button>
                </div>
            </div>

            {!activeCart && (
                <FaShoppingCart
                    onClick={() => setActiveCart(true)}
                    className={` cursor-pointer bg-blue-100 rounded-full text-gray-700 text-5xl p-3 shadow-md fixed bottom-5 right-4 z-50
                        ${totalQty > 0 && "animate-bounce delay-500 transition-all"} 
                        `}
                />
            )}
        </>
    )
}

export default Cart;