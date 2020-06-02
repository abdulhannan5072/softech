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
import {Button } from 'react-bootstrap';
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
                <div>
                    <FlatCard  title="Task Name" />
                </div>
            </Col>
            
            <Col md={4} >
                <div  >
                    <div className='d-flex flex-row-reverse m-2 '>
                        <Link to='' ><IconButton><Close/></IconButton></Link>
                    </div>
                    <div className='m-2' >
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
                            <Input id='url' label='URL' className='mr-2'  />
                            <Input id='label' label='Label' />
                        </div>
                        <div  className='d-flex justify-content-end pt-2'  >
                            <Button size='sm' variant="dark" className='mr-2 mt-2'>Link</Button>
                            <Button size='sm' variant="dark" className='mr-0 mt-2'>Cancel</Button>

                        </div>
                    </div>
                    <div className='m-2' >
                        <label>Assignee</label>
                        {/* <AsyncInput /> */}
                    </div>
                </div>
            </Col>
        </Row>
      </Aux>
    );
  }

}

export default CreateTask;