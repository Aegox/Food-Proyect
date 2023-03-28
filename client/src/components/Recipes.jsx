import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import * as actions from "../redux/actions.js";
import Recipe from "./Recipe.jsx";
import styleRecipes from "../styles/Recipes.module.css";
import Paginated from "./Paginated.jsx";
import ReactLoading from 'react-loading';

const Recipes = ({recipes}) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const [actualPage, setActualPage] = useState(1);
    const [recipesPage, setRecipesPage] = useState(9);
    const lastIndex = actualPage * recipesPage;
    const firstIndex = lastIndex - recipesPage;
    const recipesPerPage = recipes.slice(firstIndex, lastIndex)

    const setPages = (numberPage) => {
        setActualPage(numberPage)
    }

    useEffect(() => {
        dispatch(actions.getRecipes()).then(() => setLoading(false))
    }, [dispatch])

  
     
    return (
        <div className={styleRecipes.container}>
            <Paginated recipes = {recipes.length} recipesPage = {recipesPage} setPages = {setPages}/>
            {loading ? <ReactLoading className={styleRecipes.loading} type={'spokes'} color={'#1d8845'} width={'3%'} height={'3%'}/> : recipesPerPage.map((recipe) => {
                return (
                    <div>
                        <Recipe
                            id = {recipe.id}
                            name = {recipe.name ? recipe.name : recipe.title}
                            image = {recipe.image}
                            Diets = {recipe.createinDb ? recipe.Diets.map((diet) => diet.Name) : recipe.Diets }
                            healthScore = {recipe.healthScore}
                        />
                    </div>
                )
            })}
            
        </div>
    )
};

export default Recipes;

