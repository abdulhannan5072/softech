import React, {Component} from 'react';
import Aux from '../../hoc/_Aux';
import {FlatCard, Input, Select,
} from '../../shared/components';
import {Row, Col 
} from 'react-bootstrap';
import Close from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import QuillEditor from '../../components/Editor/QuillEditor';
import {Button, Form } from 'react-bootstrap';
import {InputLabel, Paper} from '@material-ui/core';
// import {divScrollable} from './Styles';
import {withStyles} from '@material-ui/core/styles';
// const useStyles = withStyles((theme) => {
//     root: {
//         margin: theme.spacing(2);
//     }
// })

const items =[
    {
        value: 'to do',
        label: 'To Do'
    },
    {
        value: 'progress',
        label: 'In Progress'
    },
    {
        value: 'done',
        label: 'Done'
    },
]

class CreateTask extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            description:''
        }
    }
    editorChangeHandle(value) {
        this.setState({ description: value });
    }

    render(){

    return(
      <Aux>

        <Row>
            <Col>
                <div className="row d-flex align-items-center mb-3">
                    <div className="col-9">
                        <h3>Task</h3>
                    </div>
                </div>   
            </Col>
        </Row>
        <Row>
           
            <Col md={8} >
                <Paper className='p-2'>
                    <div>
                        <FlatCard  title="Task Name" />
                        <FlatCard  title="Task Name" />
                        <FlatCard  title="Task Name" />
                    </div>
                </Paper>
            </Col>
            
            
            <Col md={4} >
                <Paper className='p-2'>
                    <div  >
                        <div className='d-flex flex-row-reverse m-2 '>
                            <Link to='' ><IconButton><Close/></IconButton></Link>
                        </div>
                        <div className='mt-2' >
                            <Input fullWidth id='name' value='Task Name' />
                        </div>
                        <div className='m-2' >
                            
                            <IconButton>
                                <AttachFileIcon  />
                            </IconButton>
                            
                            <IconButton>
                                <InsertLinkIcon  />
                            </IconButton>
                        </div>

                        <div className='m-2'>
                            <Select items={items} />
                        </div>

                        <div className='m-2' >
                            <QuillEditor 
                                label="Description"
                                value={this.state.description}
                                onChange={this.editorChangeHandle}
                            />
                        </div>
                        <div className='m-2' >
                            <label>Attachments</label>
                            <div></div>
                        </div>
                        <div className='m-2'>
                            <label>Web links</label>
                            <div className='d-inline-flex' >
                                <Input id='url' label='URL' className='mr-2' border='true' bgC='true'/>
                                <Input id='label' label='Link text' border='true' bgC='true' />
                            </div>
                            <div  className='d-flex justify-content-end pt-2'  >
                                <Button size='sm' variant="dark" className='mr-2 mt-2'>Link</Button>
                                <Button size='sm' variant="dark" className='mr-0 mt-2'>Cancel</Button>

                            </div>
                        </div>
                        <div className='m-2' >
                            <InputLabel shrink >Assignee</InputLabel>
                            <Input fullWidth  id='name' value='' border='true' />
                            
                        </div>
                        <Divider className='mt-4 mb-3' />
                        <div className='m-2' >
                            <InputLabel shrink >Reporter</InputLabel>
                            <Input fullWidth  id='name' value='' border='true'/>
                            
                        </div>
                        <Divider className='mt-4 mb-3 ' />
                    </div>
                </Paper>
            </Col>
            
        </Row>
      </Aux>
    );
  }

}

export default CreateTask;