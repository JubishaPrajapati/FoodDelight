import { useEffect, useState } from "react"
import FoodData from "../data/foodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slice/categorySlice";

const CategoryMenu = () => {
    const [categories, setCategories] = useState([])
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.category)

    const listCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((food) => food.category))]            //new set stores only unique values
        setCategories(uniqueCategories);
        console.log(uniqueCategories)
    }

    useEffect(() => {
        listCategories();
    }, [])

    return (
        <div className="flex flex-col items-center bg-blue-100 p-5">
            <h1 className="font-bold sm:text-4xl text-3xl text-gray-700 ">Find the best food in town</h1>
            <div className="flex gap-4 mt-8">
                <button
                    onClick={() => dispatch(setCategory("All"))}
                    className={`rounded-lg px-3 py-1 text-sm text-white font-semibold hover:bg-gray-300 hover:text-black bg-green-500 
                    ${selectedCategory === "All" && "bg-gray-300 text-black"}`}>
                    All
                </button>
                {categories.map((categoryName, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => dispatch(setCategory(categoryName))}
                            className={`rounded-lg px-3 py-1 text-sm text-white font-semibold hover:bg-gray-300 hover:text-black bg-green-500 
                            ${selectedCategory === categoryName && "bg-gray-300 text-black"}`}>
                            {categoryName}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryMenu