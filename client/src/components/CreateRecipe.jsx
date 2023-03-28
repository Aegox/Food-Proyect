import {Link} from "react-router-dom";
import styleCreateRecipe from "../styles/CreateRecipe.module.css";
import {useEffect , useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import * as actions from "../redux/actions.js";
import {useNavigate} from "react-router-dom";
import swal from 'sweetalert';

const CreateRecipe = () => {
    const diets = useSelector((store) => store.diets);
    const dispatch = useDispatch();    
    const submit = "Your recipe has been created"
    const regexs = {
        text: /^[a-z\s+A-ZÁ-Źá-ź]{15,255}$/,
        };
    let errors = {};
    const navigate = useNavigate()
    

    const [steps, setSteps] = useState({
        step1: "",
        step2:"",
        step3:"",
        step4:"",
        step5:""
    })
    
    const [newRecipe , setNewRecipe] = useState({
        title: "",
        healthScore: 0,
        image:"",
        summary: "",
        allsteps: [],
        diets: []
    })
    
    const validate = () => {
        if(newRecipe.title.length  && !regexs.text.test(newRecipe.title)) {
            errors.title = "the title must contain only letters minumun 15"
        }

        if(newRecipe.healthScore > 100 || newRecipe.healthScore < 0) {
            errors.healthScore = "maximun 100 and minimun 0 value"
        }
        
        if(newRecipe.image.toLowerCase().slice(0,9) !== "https://" && newRecipe.image.toLowerCase().slice(-4, newRecipe.image.length) !== ".jpg" && newRecipe.image.length) {
            errors.image = "please enter te correct url image"
        }
        if(newRecipe.summary.length && !regexs.text.test(newRecipe.summary)) {
            errors.summary = "write summary, minimun 15 characters and must contain only letters"
        }

        if(newRecipe.allsteps.length) {
            let count = 0
            newRecipe.allsteps.forEach((step) => {
                if (step.length && regexs.text.test(step)) {count++}
            })
            if (count < 2) {
                errors.allsteps = "write minimun two steps and minimun 15 letters for step"
                
            }
        }
        if (!newRecipe.title || !newRecipe.healthScore || !newRecipe.image || !newRecipe.summary || !newRecipe.allsteps) {
            errors.submit = "All entries must be filled out except diets"
        }
       

       
    }

    const handleInput = (e) => {
       
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value
        })
       
    }

    const handleSteps = (e) => {
        setNewRecipe({
            ...newRecipe,
            allsteps: Object.values(steps)
        })
        
        setSteps({
            ...steps,
            [e.target.name]: e.target.value
        })
    }

    const handleChecks = (e) => {
        if (e.target.checked){
            setNewRecipe({
                ...newRecipe,
                diets: [...newRecipe.diets, e.target.value]
            })
        }
        
        else {setNewRecipe({
            ...newRecipe,
            diets: newRecipe.diets.filter((diet) => diet !== e.target.value)
            })
        }
    }

    const handleSubmit = () => { 
   
        dispatch(actions.createRecipe(newRecipe))
        setNewRecipe({
            title: "",
            healthScore: 0,
            image:" ",
            summary: "",
            allsteps: [],
            diets: []
        })
        swal({
            title: "Good job!",
            text: "Your recipe has been created!",
            icon: "success",
            button: "Ok!",
        });
        navigate("/home")
    }
    
    useEffect(() => {
        dispatch(actions.getDiets())
    }, [])
    
    validate() 
    
    
    return (
        <div className={styleCreateRecipe.container}>
            <div className={styleCreateRecipe.nav}>
                <Link to="/home">
                    <h2>{"<"}</h2><h4>Back to Home</h4>
                </Link>
            </div>
            <div className= {styleCreateRecipe.secondContainer}>
                <div className= {styleCreateRecipe.createContainer}>
                    <div className={styleCreateRecipe.header}><h1>New Recpe</h1></div>
                    <div className= {styleCreateRecipe.form}>
                        <form>
                            <div className={errors.title ? styleCreateRecipe.Error : styleCreateRecipe.formInput}>
                                <label>Title</label>
                                <input name="title" onChange={(e) => handleInput(e)} placeholder="Write the title your recipe." type="text"/>
                                <label>{errors.title}</label>
                            </div>
                            <div className={errors.healthScore  ? styleCreateRecipe.Error : styleCreateRecipe.formInput}>
                                <label>Health Score</label>
                                <input name="healthScore" onChange={(e) => handleInput(e)} placeholder="0 - 100" min="0" max="100" type="number"/>
                                <label>{errors.healthScore}</label>
                            </div>
                            <div className={errors.image ? styleCreateRecipe.Error : styleCreateRecipe.formInput}>
                                <label>Image</label>
                                <input name="image" onChange={(e) => handleInput(e)} placeholder="Write image url the your recipe."  type="text"/>
                                 <label>{errors.image}</label>
                            </div>
                            <div className={errors.summary ? styleCreateRecipe.ErrorTextarea : styleCreateRecipe.formTextarea}>
                                <label>Summary</label>
                                <label>{errors.summary}</label>
                                <textarea name="summary" onChange={(e) => handleInput(e)} placeholder="Write Summary the your recipe." maxlength="770" name="summary" rows="10" cols="70"></textarea>
                                
                            </div>
                            
                            <div className={errors.allsteps ? styleCreateRecipe.ErrorTextarea : styleCreateRecipe.formTextarea}>   
                                <label>Creation Steps</label>
                                <label>{errors.allsteps}</label>
                                <textarea onChange={(e) => handleSteps(e)} name="step1" placeholder="Step one..." cols="60" rows="3"/>
                                <textarea onChange={(e) => handleSteps(e)} name="step2" placeholder="Step two..." cols="60" rows="3"/>
                                <textarea onChange={(e) => handleSteps(e)} name="step3" placeholder="Step three..." cols="60" rows="3"/>
                                <textarea onChange={(e) => handleSteps(e)} name="step4" placeholder="Step four..." cols="60" rows="3"/>
                                <textarea onChange={(e) => handleSteps(e)} name="step5" placeholder="Step five..." cols="60" rows="3"/>
                            </div>
                            <div className={styleCreateRecipe.formCheckbox}>
                                <label>Diets</label>
                                <div className={styleCreateRecipe.Checkboxes}>
                                    {diets.map((diet) => (
                                        <div className = {styleCreateRecipe.checkbox}> 
                                            <input onChange={(e) => handleChecks(e)}type="checkbox" value={diet.Name}/>
                                            <label>{diet.Name}</label>
                                        </div>    
                            )
                                    )}</div>
                            </div>
                            <div  className={errors.submit ? styleCreateRecipe.Error : styleCreateRecipe.formInputSubmit}>
                                {errors.submit ? <label>{errors.submit}</label> :
                                <input onClick={() => handleSubmit()} type="button" value="Create Recipe"/>}                 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRecipe;
