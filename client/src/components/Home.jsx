import HomeNav from "./HomeNav.jsx";
import HomeStyle from "../styles/Home.module.css";
import Recipes  from "./Recipes.jsx";

const Home = () => {
    return  (
        <div>
            <HomeNav/>
            <Recipes/>
        </div>
    )
};

export default Home;
