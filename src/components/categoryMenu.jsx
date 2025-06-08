

const CategoryMenu = () => {
    return (
        <div className="flex flex-col items-center bg-blue-100 p-5">
            <h1 className="font-bold sm:text-4xl text-3xl text-gray-700 ">Find the best food in town</h1>
            <div className="flex gap-4 mt-8">
                <button className="category-btns">All</button>
                <button className="category-btns">Breakfast</button>
                <button className="category-btns">Lunch</button>
                <button className="category-btns">Dinner</button>
                <button className="category-btns">Snacks</button>
            </div>
        </div>
    )
}

export default CategoryMenu