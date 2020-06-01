import React,{ Component } from "react";
import Aux from "../../hoc/_Aux";
import {Form, Button} from 'react-bootstrap';
import Input from '../../components/Forms/InputField';
import Close from '@material-ui/icons/Close';
import {IconButton, Paper } from '@material-ui/core';
import axios from 'axios';
import {Link} from 'react-router-dom';
import QuillEditor from '../../components/Editor/QuillEditor';

class Create extends Component{
    constructor(props) {
        super(props)
        
        this.editorChangeHandle = this.editorChangeHandle.bind(this)
      }
    state = {
        createBuildForm: {
            build: {
                elementType: 'textfield',
                elementConfig: {
                    required: true,
                    error: false,
                    label: 'Build',
                    placeholder: 'Enter build'
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
        description: ''
    };
    postDataHandler = ()=>{
        if(this.state.formIsValid){
            const data = {
                build: this.state.createBuildForm.build.value,
                description:this.state.description        
            }
    
            axios.post('/api/build/create',data)
                .then(res => {
                    console.log(res);
                });
        } else console.log("Fill fields");
        
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
        const updateForm = {...this.state.createBuildForm};
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
        this.setState({createBuildForm: updateForm});

        let formIsValid = true;
        for(let e in updateForm ){
            formIsValid = updateForm[e].valid && formIsValid;
        }
        this.setState({formIsValid: formIsValid});
    }

    editorChangeHandle(value) {
        this.setState({ description: value })
        console.log(this.state.description);
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.createBuildForm){
            formElementsArray.push({
                id: key,
                config: this.state.createBuildForm[key]
            });
        }
        const styles = {
            color:"red"
        }
        const showValidation = (elementIdentifier) =>{
            let errorMessage = null;
            const updateForm = {...this.state.createBuildForm};
            const updatedElement = {...updateForm[elementIdentifier]};
            
            console.log(updatedElement.validationMessage);
            if (updatedElement.validation && !updatedElement.valid){
                errorMessage = updatedElement.validationMessage;
            }

            return errorMessage;
        }

        return(
            <Aux>
                <div className='page'>
                <div className='d-flex flex-row-reverse mb-3 '>
                    <Link to='/project/build' ><IconButton><Close/></IconButton></Link>
                </div>
                <Paper className='p-5  '>
                    
                    <div className="mb-2">
                        <h3 >Create Build</h3>
                    </div>
                    
                    <Form onSubmit={this.postDataHandler}>
                        {formElementsArray.map(formElement => (
                            
                            <Input className='mt-4' 
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
                                value={this.state.description}
                                onChange={this.editorChangeHandle}
                            />
                        </div>
                        
                        
                        <div className='w-25'>
                        <Button className='mt-5 ' variant="dark" type="submit">
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

export default Create;