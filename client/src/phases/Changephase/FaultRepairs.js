import React,{ Component } from "react";
import Aux from "../../hoc/_Aux";
import {Form, Button, Card} from 'react-bootstrap';
import InputField from '../../components/Forms/InputField';
import Close from '@material-ui/icons/Close';
import {IconButton, Paper} from '@material-ui/core';
import {Link} from 'react-router-dom';
import QuillEditor from '../../components/Editor/QuillEditor';



class FaultReq extends Component{
    constructor (props) {
        super(props)
        this.state = this.state
        this.editorChangeHandle = this.editorChangeHandle.bind(this)
      }
    state = {
        correctiveMaintenanceForm: {
            selectBuild: {
                elementType: 'dropdown',
                elementConfig: {
                    error: false,
                    label: 'Select Build',
                    data:[
                        {
                            value: 'none',
                            label: 'Select none',
                        },
                    ]
                },
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
                validationMessage: ''
            },
            faultType: {
                elementType: 'dropdown',
                elementConfig: {
                    error: false,
                    label: 'Type of defect/fault',
                    data:[
                        {
                            value: 'Codding Error',
                            label: 'Codding Error',
                        },
                        {
                            value: 'Requirments Error',
                            label: 'Requirments Error',
                        },
                        {
                            value: 'Design Error',
                            label: 'Design Error',
                        }
                    ]
                },
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
                validationMessage: ''
            },
            fault: {
                
                elementType: 'textfield',
                elementConfig: {
                    required: true,
                    error: false,
                    label: 'Name of defect/fault',
                    placeholder: 'Enter name'
                },
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
                validationMessage: ''
            },
            module: {
                
                elementType: 'textfield',
                elementConfig: {
                    required: true,
                    error: false,
                    label: 'Module name',
                    placeholder: 'Enter name'
                },
                value: '',
                validation: {
                    required: true,
                },
                touched: false,
                valid: false,
                validationMessage: ''
            },
            
        },

        formIsValid: false,
        editorText: '<p>afasf</p>'
    };


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
        const updateForm = {...this.state.correctiveMaintenanceForm};
        const updatedElement = {...updateForm[elementIdentifier]};
        const updatedElementConfig = {...updatedElement['elementConfig']}
        updatedElement.value= event.target.value;
        const error = this.isCheckValidity(updatedElement.value, updatedElement.validation);
        updatedElement.valid = error[0];
        updatedElement.validationMessage = error[1];
        updatedElement.touched= true;
        if (updatedElement.touched && !updatedElement.valid){
            updatedElementConfig.error= true;
        } else {
            updatedElementConfig.error = false;
        }
        updatedElement['elementConfig'] = updatedElementConfig;
        updateForm[elementIdentifier] = updatedElement;
        this.setState({correctiveMaintenanceForm: updateForm});

        let formIsValid = true;
        for(let e in updateForm ){
            formIsValid = updateForm[e].valid && formIsValid;
        }
        this.setState({formIsValid: formIsValid});
    }


    editorChangeHandle(value) {
        this.setState({ editorText: value })
        console.log(this.state.editorText);
    }


    render(){

        const showValidation = (elementIdentifier) =>{
            let errorMessage = null;
            const updateForm = {...this.state.correctiveMaintenanceForm};
            const updatedElement = {...updateForm[elementIdentifier]};
            
            console.log(updatedElement.value);
            if (updatedElement.validation && !updatedElement.valid){
                errorMessage = updatedElement.validationMessage;
            }

            return errorMessage;
        }

        const formElementsArray = [];
        for (let key in this.state.correctiveMaintenanceForm){
            formElementsArray.push({
                id: key,
                config: this.state.correctiveMaintenanceForm[key]
            });
        }

        


        return(
            <Aux>
                <div className='page'>
                    <div className='d-flex flex-row-reverse mb-3 '>
                        <Link to='/project/changePhase' ><IconButton><Close/></IconButton></Link>
                    </div>
                
                    <Paper className="p-5" >
                        <div className="mb-2">
                            <h3 >Corrective maintenance</h3>
                        </div>
                        <Form >
                        {formElementsArray.map(formElement => (
                            <InputField className='mt-4' 
                                key={formElement.id} 
                                type={formElement.config.elementType} 
                                {...formElement.config.elementConfig} 
                                value={formElement.config.value}
                                helperText={showValidation(formElement.id)}
                                onChange={(event) => this.inputChangeHandler(event, formElement.id)}
                            />
                        ))}
                        <div className='mt-4'>
                            <QuillEditor
                                label="Description"
                                value={this.state.editorText}
                                onChange={this.editorChangeHandle}
                            />
                        </div>
                        <div className='w-25'>
                            <Button disabled={!this.state.formIsValid} className='mt-5 ml-3' variant="dark" type="submit">
                                Create
                            </Button>
                        </div>
                        </Form>
                    </Paper>
                </div>
            </Aux>
        );
    }
}

export default FaultReq;