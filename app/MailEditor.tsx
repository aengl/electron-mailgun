import * as React from 'react';
const { Editor, createEditorState } = require('medium-draft');

import 'medium-draft/lib/index.css';
import './MailEditor.css';

interface Props {}

interface State {
  editorState?: any;
}

export class MailEditor extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      editorState: createEditorState()
    };
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        onChange={this.onChange} />
    );
  }

  onChange(editorState) {
    this.setState({editorState});
  }
}
