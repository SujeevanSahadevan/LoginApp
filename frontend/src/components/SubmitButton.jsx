import React, { Component } from 'react';

class SubmitButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="SubmitButton">
            <button className='btn'
            disabled={this.props.disabled}
            onClick={()=>this.props.onClick()}
            >
                {this.props.text}

            </button>
          </div>
         );
    }
}
 
export default SubmitButton;