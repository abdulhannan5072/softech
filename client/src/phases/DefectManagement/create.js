import React, {Component} from 'react';
import Aux from '../../hoc/_Aux';
import {FlatCard, Input, Select,
} from '../../shared/components';
import {Row, Col 
} from 'react-bootstrap';
import QuillEditor from '../../components/Editor/QuillEditor';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import {Button, Form } from 'react-bootstrap';
import {InputLabel, Paper} from '@material-ui/core';
const types =[
    {
        value: 'select',
        label: 'Select'
    },
    {
        value: 'functional',
        label: 'Functional'
    },
    {
        value: 'ui/ux',
        label: 'UI/Ux'
    },
    {
        value: 'content',
        label: 'Content'
    },
    {
        value: 'field validation',
        label: 'Field Validation'
    },
    {
        value: 'security',
        label: 'Security'
    },
    {
        value: 'performance',
        label: 'Performance'
    },
]
const select=[

    {
        value: 'select ',
        label: 'Select '
    },
]
const priority=[
    {
        value: 'low ',
        label: 'Low'
    },
    {
        value: 'medium',
        label: 'Medium '
    },
    {
        value: 'high ',
        label: 'High '
    },
]

const severity=[
    {
        value: 'select ',
        label: 'Select '
    },
    {
        value: 'blocker ',
        label: 'Blocker '
    },
    {
        value: 'minor',
        label: 'Minor'
    },
    {
        value: 'major',
        label: 'Major'
    },
]


class CreateDefect extends Component
{

    constructor (props) {
        super(props)
        this.state = this.state
        this.editorChangeHandle = this.editorChangeHandle.bind(this)
        this.editorChangeHandleD = this.editorChangeHandleD.bind(this)
      }
      state={
        description:'',
        comments:''

      }
          
    editorChangeHandle(value) {
        this.setState({ description: value });
    }
    editorChangeHandleD(value) {
        this.setState({ comments: value });
    }




render()
{
    return(
        <Aux>
        <Paper className='p-3'> 
        <Row>
            <Col>
                <div className="row d-flex align-items-center mb-3">
                    <div className="col-9">
                        <h3>Defect</h3>
                    </div>
                </div>   
            </Col>
        </Row>
        <Row>
 
        <Col md={4} >
         
             <div className='w-50'>
                 <label>Build</label>
                 <Select items={select}/>
             </div>
         
     </Col>
     <Col md={4} >
        
             <div className='m-2'>
             <label>Module</label>
                 <Select className='w-50' items={select}/>
             </div>
        
     </Col>
     <Col md={4} >
         
             <div className='m-2'>
             <label>Device</label>
                 <Select items={select}/>
             </div>
        
     </Col>

    </Row>
    <Row>
 
 <Col md={4} >
 
      <div className='m-2'>
      <label>Defect Type</label>
          <Select items={types}/>
      </div>
 
</Col>
<Col md={4} >
 
                    <div className='m-2'>
                    <label>Severity</label>
                        <Select items={severity}/>
                    </div>
                
</Col>


</Row>
<Row>
    <Col>
                        <div className='m-2' >
                            <QuillEditor 
                                label="Description"
                                value={this.state.description}
                                onChange={this.editorChangeHandle}
                            />
                        </div>
    </Col>
</Row>
<Row>
    <Col >
                        <div className='m-2' >
                            <QuillEditor 
                                label="Comments"
                                value={this.state.comments}
                                onChange={this.editorChangeHandleD}
                            />
                        </div>
    </Col>
</Row>
<Row>
    <Col md={4}>
       <div className='m-2' >
            <label>Assign To</label>
                           
           <Input fullWidth  id='name' value='' border='true' />
                            
         </div>
    </Col>
    <Col md={4}>
        <div className='m-2'>
            <label>Priority</label>
            <Select items={priority}/>
        </div>
    </Col>
    <Col md={4}>
       <div className='m-2' >
            <label>Defect Viewers</label>
                           
           <Input fullWidth  id='name' value='' border='true' />
                            
         </div>
    </Col>
</Row>
<Row>
    <Col md={8}>
<div  className='d-flex justify-content-end pt-2'  >
          <Button size='sm' variant="dark" className='mr-2 mt-2'>Save</Button>
          <Button size='sm' variant="dark" className='mr-0 mt-2'>Cancel</Button>

             </div>
             </Col>
             </Row>
</Paper>   
     </Aux>
    );
}
}
export default CreateDefect;