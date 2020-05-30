import React from 'react';
import {NavLink} from 'react-router-dom';
import { withSnackbar } from 'notistack';

import '../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import axios from 'axios';

import InputField from "../../components/Forms/InputField";

class Login extends React.Component {

    state = {
        SignInForm: {
            
            email: {
                id: 'email',
                elementConfig: {
                    type: 'email',
                    label: 'Email',
                    required: true,
                    
                },
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
            },
            
            password: {
                id: 'password',
                elementConfig: {
                    type: 'password',
                    required: true,
                    error: false,
                    label: 'Password',
                   
                },
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
            }
        },
        
        formIsValid: false,

    };


    postDataHandler = ()=>{
        const data = {
            email: this.state.SignInForm.email.value,
            password: this.state.SignInForm.password.value
        }

        axios.post('/api/login',data)
            .then(res => {
                // console.log(res);
                if(res.data.isAuth){
                    this.props.enqueueSnackbar( res.data.message, { 
                        variant: 'success',
                    });

                }else {
                    this.props.enqueueSnackbar( res.data.message, { 
                        variant: 'error',
                    });
                }
                
            });
    }




    isCheckValidity = (value, rules) => {
        let isValid = true;
        
        if (rules.required){
            isValid = value.trim() !== '' && isValid;

        }

        return isValid;
    }

    inputChangeHandler = (event, elementIdentifier) => {
        // console.log(event.target.value);
        const updateForm = {...this.state.SignInForm};
        const updatedElement = {...updateForm[elementIdentifier]};
        const updatedElementConfig = {...updatedElement['elementConfig']}
        updatedElement.value= event.target.value;
        updatedElement.valid= this.isCheckValidity(updatedElement.value, updatedElement.validation);
        updatedElement.touched= true;
        if (updatedElement.touched && !updatedElement.valid){
            updatedElementConfig.error= true;
        } else {
            updatedElementConfig.error = false;
        }
        updatedElement['elementConfig'] = updatedElementConfig;
        updateForm[elementIdentifier] = updatedElement;
        this.setState({SignInForm: updateForm});

        let formIsValid = true;
        for(let e in updateForm ){
            formIsValid = updateForm[e].valid && formIsValid;
        }
        this.setState({formIsValid: formIsValid});
    }


    render () {

        const formElementsArray = [];
        for (let key in this.state.SignInForm){
            formElementsArray.push({
                id: key,
                config: this.state.SignInForm[key]
            });
        }


        return(
            <Aux>
                
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="feather icon-user-plus auth-icon"/>
                                </div>
                                <h3 className="mb-2">Login</h3>

                                    {formElementsArray.map(formElement => (
                                        <InputField className='mt-4' 
                                            key={formElement.id}
                                            type={formElement.elementType} 
                                            {...formElement.config.elementConfig} 
                                            value={formElement.config.value}
                                            onChange={(event) => this.inputChangeHandler(event, formElement.id)}
                                        />
                                    ))}

                                <button onClick={this.postDataHandler} className="btn btn-dark shadow-2 m-4">Login</button>
                                <p className="mb-0 text-muted">Don't have an account <NavLink to="/auth/signup">Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default withSnackbar(Login);