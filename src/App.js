import React from 'react';
import Toolbar from './components/Toolbar'
import './App.css';
let marked = require("marked");
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      editorMaximize: false,
      previewerMaximize: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleEditorMaximize = this.handleEditorMaximize.bind(this);
    this.handlePreviewMaximize = this.handlePreviewMaximize.bind(this);
  }

  handleEditorMaximize(){
    this.setState({
      editorMaximize: !this.state.editorMaximize
    });
  }

  handlePreviewMaximize(){
    this.setState({
      previewerMaximize: !this.state.previewerMaximize
    })
  }

  handleChange(e){
    this.setState({markdown: e.target.value})
  }

  render() { 

    
    



    const classes = this.state.editorMaximize
      ? ['editorWrap maximized', 'previewWrap hide', 'fa fa-compress']
      : this.state.previewerMaximize
        ? ['editorWrap hide', 'previewWrap maximized', 'fa fa-compress']
        : ['editorWrap', 'previewWrap', 'fa fa-arrows-alt'];

    return ( 
      <div id="App">
        <h1 style={{textAlign: 'center'}}>
          Markdown Previewer
        </h1>
        <div className={classes[0]} id="editor-container">
          <Toolbar
          name = 'Editor' 
          type = 'far fa-edit'
          status = {classes[2]}
          onClick = {this.handleEditorMaximize}
          />
          <textarea value={this.state.markdown} onChange={this.handleChange} id="editor"/>
        </div>

        <div className={classes[1]} id="previewer-container">
          <Toolbar
          name = 'Previewer' 
          type = 'far fa-eye'
          status = {classes[2]}
          onClick = {this.handlePreviewMaximize}
          />
          <div id="previewer"
          dangerouslySetInnerHTML={{
            __html: marked(this.state.markdown)
            }}>
        </div>
        </div>
      </div>
     );
  }
}
 
export default App;
