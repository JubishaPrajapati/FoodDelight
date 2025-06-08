import CategoryMenu from "../components/categoryMenu";
import FoodItem from "../components/foodItem";
import NavBar from "../components/navBar";
import Cart from "../components/cart";

const Home = () => {
    return (
        <>
            <NavBar />
            <CategoryMenu />

            <FoodItem />
            <Cart />
        </>
    )
}

export default Home;