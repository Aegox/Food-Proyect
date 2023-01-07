import styleRecipe from "../styles/Recipe.module.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as actions from "../redux/actions.js";

const Recipe = (props) =>  {
    return (
        <div>
            <div className={styleRecipe.container} >
                <h2>{props.name}
                <br/></h2>
                <img src={props.image} alt=""/>
                <div className={styleRecipe.infoContainer}>
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
