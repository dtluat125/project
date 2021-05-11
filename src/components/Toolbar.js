import React from 'react'

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div class="toolbar">
                <i class="name" className = {this.props.type}>{this.props.name}</i>
                <i class="status" onClick={this.props.onClick} className = {this.props.status+' btn'}></i>
            </div>
          );
    }
}
 
export default Toolbar;