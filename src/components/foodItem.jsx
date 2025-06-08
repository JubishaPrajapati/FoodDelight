import FoodCard from './foodCard'
import FoodData from '../data/foodData'
import toast, { Toaster } from 'react-hot-toast';

const handleToast = (name) => toast.success(`Added ${name} to cart.`)

const FoodItem = () => {
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex flex-wrap justify-center gap-14 mt-10 mb-10'>
                {FoodData.map((food) => {
                    return (
                        <FoodCard
                            key={food.id}
                            id={food.id}
                            name={food.name}
                            price={food.price}
                            desc={food.desc}
                            rating={food.rating}
                            img={food.img}
                            handleToast={handleToast}
                        />
                    )
                })
                }
            </div>
        </>
    )
}

export default FoodItem