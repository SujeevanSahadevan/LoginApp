import React, { Component } from 'react';

class InputField extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="InputField">
            <input className='input'
              type={this.props.type}
              placeholder={this.props.placeholder}
              value={this.props.value}
              onChange={(e)=>this.props.onChange(e.target.value)}
            ></input>
          </div>
         );
    }
}
 
export default InputField;