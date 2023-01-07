import {useEffect , useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch , useSelector} from "react-redux";
import HomeNavStyle from "../styles/HomeNav.module.css";
import * as actions from "../redux/actions.js";

const HomeNav = () => {
    const diets = useSelector(store => store.diets);
    const dispatch = useDispatch();
    const [nameRecipe, setNameRecipe] = useState()
 
    useEffect(() => {
        dispatch(actions.getDiets())
    }, [dispatch])

    const handleSearchRecipe = (event) => {
        setNameRecipe(event.target.value)
    }
       
    const handleFilterRecipes = (event) => {
        dispatch(actions.filterRecipes(event.target.value))
    }
    

    return (
        <div className={HomeNavStyle.container}>
             <Link to="/">
                <img href="/" src="./images/makerecipes.png"/>
            </Link>
            <Link to="/CreateRecipe">
                <button>Create Recipe</button>
            </Link>
            <div className={HomeNavStyle.search}>
                <input type="text" value= {nameRecipe} onChange= {handleSearchRecipe}/>
                <button onClick = {() => dispatch(actions.getRecipes(nameRecipe))}>Search</button>
            </div>
            <div className={HomeNavStyle.orderContainer}>
                <div className={HomeNavStyle.order}>
                    <label>Order By</label>
                </div>
                <div className={HomeNavStyle.filters}>
                    <div className={HomeNavStyle.filter}>
                        <label>Alphabet</label>
                        <select onChange={(e) =>  handleFilterRecipes(e)}>
                                <option value="all">All</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                            </select>
                    </div>
                    <div className={HomeNavStyle.filter}>
                        <label>Diet</label>
                        <select onChange={(e) => handleFilterRecipes(e)}>
                                <option value="all">All</option>
                                {diets.map((diet) => <option value={diet.Name}>{diet.Name}</option>)}
                            </select>
                    </div>
                    <div className={HomeNavStyle.filter}>
                        <label>Health Score</label>
                        <select onChange={(e) => handleFilterRecipes(e)}>
                            <option value="all">All</option>
                            <option value="ascendent">Ascendent</option>
                            <option value="descendent">Descendent</option>
                        </select>
                    </div>
                    <div className={HomeNavStyle.filter}>
                        <label>Created</label>
                        <select onChange={(e) => handleFilterRecipes(e)}>
                            <option value="all" >All</option>
                            <option value="on" >On</option>
                            <option value="off" >Off</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default HomeNav;


