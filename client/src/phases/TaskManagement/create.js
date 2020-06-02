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
                <div>
                    <div className='d-flex flex-row-reverse mb-3 '>
                        <Link to='' ><IconButton><Close/></IconButton></Link>
                    </div>
                    <Input value='Task Name' />
                    <div className='' >
                        
                        <IconButton>
                            <AttachFileIcon  />
                        </IconButton>
                        
                        <IconButton>
                            <InsertLinkIcon  />
                        </IconButton>
                    </div>

                    <div>
                        <Select items={items} />
                    </div>
                </div>
            </Col>
        </Row>
      </Aux>
    );
  }

}

export default CreateTask;