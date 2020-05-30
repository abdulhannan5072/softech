import React from 'react';
import {NavLink} from 'react-router-dom';
import { withSnackbar } from 'notistack';

import '../../assets/scss/style.scss';
import Aux from "../../hoc/_Aux";
import axios from 'axios';

import InputField from "../../components/Forms/InputField";

class SignUp extends React.Component {

    state = {
        SignUpForm: {
            name: {
                
                elementConfig: {
                    type: 'text',
                    required: true,
                    error: false,
                    label: 'Name',
                    
                },
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
                validationMessage: ''
            },
            email: {
                
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
                validationMessage: ''
            },
            username: {
                
                elementConfig: {
                    type: 'text',
                    required: true,
                    error: false,
                    label: 'Username',
                    
                },
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
                validationMessage: ''
            },
            password: {
               
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
                validationMessage: ''
            },
            confirmPasword: {
                
                elementConfig: {
                    type: 'password',
                    required: true,
                    error: false,
                    label: 'Confirm Pasword',
                    
                },
                value: '',
                validation: {
                    required: true,
                    // matchedPassword: true
                },
                touched: false,
                valid: false,
                validationMessage: ''
            }
        },

        formIsValid: false,

    };

    postDataHandler = ()=>{
        if(this.state.formIsValid){
            const data = {
                name: this.state.SignUpForm.name.value,
                email: this.state.SignUpForm.email.value,
                username: this.state.SignUpForm.username.value,
                password: this.state.SignUpForm.password.value,
                
            }
    
            axios.post('/api/signup',data)
                .then(res => {
                    // console.log(res);
                    if(res.data.post){
                        this.props.enqueueSnackbar('Successfully registered', { 
                            variant: 'success',
                        });

                    }else {
                        this.props.enqueueSnackbar('Failed', { 
                            variant: 'error',
                        });

                    }
                    
                });
        } else this.props.enqueueSnackbar('Please fill all fields', { 
            variant: 'error',
        });
        
    }


    isCheckValidity = (value, rules) => {
        let isValid = true;
        let error = [true,''];

        if (rules.required){
            isValid = value.trim() !== '' && isValid;
            const message = `${!isValid ? 'This field is required!':''}`
            error = !isValid ? [isValid,message]:error;
        }
        
        return error;
    }

    inputChangeHandler = (event, elementIdentifier) => {
        // console.log(event.target.value);
        const updateForm = {...this.state.SignUpForm};
        const updatedElement = {...updateForm[elementIdentifier]};
        const updatedElementConfig = {...updatedElement['elementConfig']}
        updatedElement.value= event.target.value;
        const error = this.isCheckValidity(updatedElement.value, updatedElement.validation);
        updatedElement.valid = error[0];
        updatedElement.validationMessage = error[1];
        updatedElement.touched = true;
        if (updatedElement.touched && !updatedElement.valid){
            updatedElementConfig.error = true;
        } else {
            updatedElementConfig.error = false;
        }
        updatedElement['elementConfig'] = updatedElementConfig;
        updateForm[elementIdentifier] = updatedElement;
        this.setState({SignUpForm: updateForm});

        let formIsValid = true;
        for(let e in updateForm ){
            formIsValid = updateForm[e].valid && formIsValid;
        }
        this.setState({formIsValid: formIsValid});
    }

    
    


    render () {



        const showValidation = (elementIdentifier) =>{
            let errorMessage = null;
            const updateForm = {...this.state.SignUpForm};
            const updatedElement = {...updateForm[elementIdentifier]};
            
            console.log(updatedElement.validationMessage);
            if (updatedElement.validation && !updatedElement.valid){
                errorMessage = updatedElement.validationMessage;
                   
            }

            return errorMessage;
        }



        const formElementsArray = [];
        for (let key in this.state.SignUpForm){
            formElementsArray.push({
                id: key,
                config: this.state.SignUpForm[key]
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
                                <h3 className="mb-2">Sign up</h3>

                                    {formElementsArray.map(formElement => (
                                        
                                        <InputField className='mt-4' 
                                            key={formElement.id}
                                            type={formElement.elementType} 
                                            {...formElement.config.elementConfig} 
                                            value={formElement.config.value}
                                            helperText={showValidation(formElement.id)}
                                            onChange={(event) => this.inputChangeHandler(event, formElement.id)}
                                        />
                                        
                                    ))}

                                <button className="btn btn-dark shadow-2 m-4" onClick={this.postDataHandler} >Sign up</button>
                                <p className="mb-0 text-muted">Allready have an account? <NavLink to="/auth/login">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

export default withSnackbar(SignUp);