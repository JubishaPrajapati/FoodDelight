import FoodCard from './foodCard'
import FoodData from '../data/foodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const handleToast = (name) => toast.success(`Added ${name} to cart.`);

const FoodItem = () => {
    const selectedCategory = useSelector((state) => state.category.category);
    const selectedSearch = useSelector((state) => state.search.search)
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex flex-wrap justify-center gap-14 mt-10 mb-10'>
                {FoodData.filter((food) => {
                    if (selectedCategory === "All") {
                        return food.name.toLowerCase().includes(selectedSearch.toLowerCase());
                    } else {
                        return selectedCategory === food.category && food.name.toLowerCase().includes(selectedSearch.toLowerCase());;
                    }
                }).map((food) => (
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
                ))}
            </div>
        </>
    )
}

export default FoodItem