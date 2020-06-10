import React,{ Component } from "react";
import { Button} from 'react-bootstrap';
import Close from '@material-ui/icons/Close';
import {IconButton, Paper } from '@material-ui/core';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Aux from "../../hoc/_Aux";
import * as Yup from 'yup';
import {QuillEditor} from '../../shared/components';


import {Formik, Form, TextFieldFormik, SelectTextFieldFormik, QuillEditorFormik
} from '../../shared/components';


const initialValues= {
    build: '',
    description: '',
    
};

const validationSchema= Yup.object().shape({
    build: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
});

class Create extends Component{
    constructor(props){
        super(props);
    }

    onSubmit= (values, { setSubmitting}) => {
        const data = {
            build: values.build,
            // description:this.state.description        
        }
        axios.post('/api/build/create',data)
            .then(res => {
                console.log(res);
            });
        
    }
    // editorChangeHandle(value) {
    //     this.setState({ description: value })
    // }

    render(){
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
                        
                        <Formik 
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={this.onSubmit}
                        >
                            {(props) => (
                                <Form>
                                    <div className='mt-5' >
                                        <TextFieldFormik label='Build' name='build' />
                                    </div>

                                    {/* <div className='mt-4'>
                                        <QuillEditorFormik
                                            label="Description"
                                            name='description'
                                        />
                                    </div> */}
                                    
                                    
                                    <div className='w-25'>
                                        <Button className='mt-5 ' variant="dark" type="submit">
                                            Create
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>               
                    </Paper>
                </div>
            </Aux>
        );

    }
} 

export default Create;