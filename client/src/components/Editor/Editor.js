import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class DocEditor extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
    }
  }

  onContentStateChange = (contentState) => {
    this.setState({
      contentState,
    });
  };

  render() {


    const { contentState } = this.state;
    return (
      <div>
        <Editor
          wrapperClassName="wrapper-class rounded "
          editorClassName="editor-class border border-light  "
          toolbarClassName="toolbar-class"
          
          onContentStateChange={this.onContentStateChange}
        />
        
      </div>
    );
  }
}

export default DocEditor;