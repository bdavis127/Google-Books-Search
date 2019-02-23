import React, { Component } from 'react'

// class NameForm extends React.Component {
//   state = {
//     firstname: "",
//     lastname: "",
//     username: "",
//     email: "",
//     password: "",
//   }

//   render() {
//     return (
//       <form>
//         <input 
//         placeholder="First name" 
//         value={this.state.firstname} 
//         onChange={e => this.setState({ firstname: e.target.value})} />
//       </form>
//     );
//   }
// }

export default class NameForm extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}


// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }








