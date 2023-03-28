import styleRecipe from "../styles/Recipe.module.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as actions from "../redux/actions.js";

const Recipe = (props) =>  {
    const dispatch = useDispatch();

    const handleAddSaved = async () => {
       await dispatch(actions.addSavedRecipe(localStorage.getItem('token'), props)) 
    }

    console.log(window.location.pathname)

    return (
        <div>
            <div className={styleRecipe.container}>
                
                <h2>{props.name}
                <br/></h2>
                <img src={props.image} alt=""/>
                <div className={styleRecipe.infoContainer}>
                    {window.location.pathname === '/saved' ? false: <i onClick={() => handleAddSaved()} class="fa-sharp fa-solid fa-bookmark"></i>}
                    {props.Diets.length ?  
                        <div className={styleRecipe.info}>   
                            <h1>Diets</h1>
                            <ul>
                                {props.Diets.map(diet => <li>{diet}</li>)}
                            </ul>
                            <Link to={`/recipeDetail/${props.id}`}>
                                 <button>View Recipe Detail</button>
                            </Link>  
                        </div>
                        : 
                        <div className={styleRecipe.info}>
                            <h1>The Recipe don't <br/>contains diets</h1>
                            <Link to={`/recipeDetail/${props.id}`}>
                                <button>View Recipe Detail</button>
                            </Link>  
                        </div>}
                </div>
            </div>
            
        </div>
    )
};


export default Recipe;
