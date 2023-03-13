import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import styleRecipeDetail from "../styles/RecipeDetail.module.css";
import * as actions from "../redux/actions.js";
import ReactLoading from 'react-loading'

const RecipeDetail = () => {
    const recipeDetail = useSelector((store) => store.recipeDetail);
    const [loading, setLoading] = useState(true)
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getRecipeDetail(id)).then(() => setLoading(false))
    }, [dispatch])

    const handleCleanDetail = () => {
        dispatch(actions.cleanDetail())
        setLoading(true)
    }
    
    return (
        <div className={styleRecipeDetail.container}>
            <div className={styleRecipeDetail.nav}>
                <Link to="/home">
                    <h2>{"<"}</h2><h4 onClick={() => handleCleanDetail()}>Back to Home</h4>
                </Link>
            </div>
            
                <div className={styleRecipeDetail.secondContainer}>

                    {loading ? <ReactLoading className={styleRecipeDetail.loading} type={'spokes'} color={'#1d8845'} height={'3%'} width={'3%'}/> : 
                 <div className={styleRecipeDetail.recipeContainer}>

                    <div>
                        <img src={recipeDetail.image} alt=""/>
                    </div>
                    <div className={styleRecipeDetail.detailContainer}>
                        <h1>{recipeDetail.title}</h1>
                        <div>
                            <h2>Health Score:</h2>
                             <h3>{recipeDetail.healthScore}%</h3>
                        </div>
                        <div>
                            <h2>Summary:</h2>
                            {recipeDetail.createinDb ? <h3>{recipeDetail.summary}</h3> : <div dangerouslySetInnerHTML={{__html: recipeDetail.summary}}></div>}
                        </div>
                        <div>
                            <h2>Steps:</h2>
                            {recipeDetail.createinDb ? 
                                    <ul>{recipeDetail.allsteps?.map((step) => {
                                        if (step.length > 1) {return <li>{step}</li>}})}
                                    </ul> 
                            : recipeDetail.allsteps ? <div dangerouslySetInnerHTML={{__html: recipeDetail.allsteps}}></div>
                            : <h3>the recipe dont contains steps</h3>
                            }
                        </div>
                        <div>
                            <h2>Diets:</h2>
                            <ul>{recipeDetail.Diets ? recipeDetail.Diets.map((diet) => {
                                if (diet.hasOwnProperty('Name')) {return (<li>{diet.Name}</li>)}
                                return (<li>{diet}</li>)}
                            )
                                : <h3>the recipe dont contains diets</h3>                
                            }</ul>
                        </div>
                         
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default RecipeDetail;
