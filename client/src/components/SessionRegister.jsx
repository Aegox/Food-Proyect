import {useState, useEffect} from 'react';
import styleSession from '../styles/Session.module.css';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as actions from '../redux/actions.js';
import swal from 'sweetalert';
import {useNavigate} from 'react-router-dom';

const SessionRegister = () => {
    const [user, setUser] = useState({email: '', password: ''});
    const [repeatPassword, setRepeatPassword] = useState('')
    const [errors, setErrors] = useState({
        validEmail: false,
        validPassword: false
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ 
    

    const handleSetInputs = (e) => {
        if (e.target.name == 'repeatPassword') {
            setRepeatPassword(e.target.value)
            return false
        }
         setUser({
            ...user,
            [e.target.name]: e.target.value 
        })
       
    }

const validateEmail = () => {
    if (user.email !== '' && emailRegex.test(user.email)) {
        setErrors({
            ...errors,
            validEmail: false
        })
        return false;
    } 
    setErrors({
        ...errors,
        validEmail: true
    })
    return true;
}

    const validatePassword = () => {
        if (!(user.password == repeatPassword) || repeatPassword == '') {
            setErrors({
                ...errors,
                validPassword: true
            })
            return true
        }
        setErrors({
            ...errors,
            validPassword: false
        })
        return false
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        if (!validateEmail() && !validatePassword()) {
        dispatch(actions.createUser(user));
        setUser({
            email: '',
            password: ''
        });
        swal({
            title: 'Good job!',
            text: 'Your user has been created!',
            icon: 'success',
            button: 'Ok!'
        });
        navigate('/session');
    }
  };

    console.log(errors, user, repeatPassword)
    

    return (
        <div className={styleSession.container}>
            <form>
                <img src='./images/makerecipes.png'/>
                <h1>Register Acccount</h1>
                <label>Email</label>
                <input name='email' type='text' onChange={(e) => handleSetInputs(e)} placeholder='write your email'/>
                {errors.validEmail ? <label>the email must be a valid email</label> : false}

                <label>Password</label>
                <input name='password' type='password' onChange={(e) => handleSetInputs(e)} placeholder='write your password'/>
                <label>Repeat Password</label>
                <input name='repeatPassword' type='password' onChange={(e) => handleSetInputs(e)} placeholder='write your password'/>
                {errors.validPassword ? <label>must be equal to password</label>: false}
                <button onClick={(e) => handleCreateUser(e)}>Register</button>
                <Link to='/register'>you have an account? - Login now</Link>
            </form>
        </div>
    )
};

export default SessionRegister;
