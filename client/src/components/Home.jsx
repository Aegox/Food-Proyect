import HomeNav from "./HomeNav.jsx";
import HomeStyle from "../styles/Home.module.css";
import Recipes  from "./Recipes.jsx";
import {useSelector} from 'react-redux';

const Home = () => {
    const recipes = useSelector((store) => store.allRecipes);
    return  (
        <div>
            <HomeNav/>
            <Recipes recipes={recipes}/>
        </div>
    )
};

export default Home;
