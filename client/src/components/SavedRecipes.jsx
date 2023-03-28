import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
import Recipes  from "./Recipes.jsx";
import * as actions from '../redux/actions.js';
import styleRecipeDetail from "../styles/RecipeDetail.module.css";
import {Link} from 'react-router-dom'

const SavedRecipes = () => {
    const recipes = useSelector((store) => store.savedRecipes);    
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    console.log(recipes)

    useEffect(() => {
        dispatch(actions.getSavedRecipes(token))
    },[])

    return (
        <div>
            <div className={styleRecipeDetail.nav}>
                <Link to="/home">
                    <h2>{"<"}</h2><h4>Back to Home</h4>
                </Link>
                <h1>SAVED RECIPES</h1>
            </div>
            <Recipes recipes={recipes}/>
        </div>
    )
};

export default SavedRecipes;
