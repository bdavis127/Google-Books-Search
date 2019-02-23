import React, { Component } from 'react'
import AppTitle from "./AppTitle"
import NameForm from "./NameForm"

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

export default class Search extends Component {
    searchBooks = () => {
        // Call Google API connected to search button.  Get value and save to set states
    }
    render() {
        return (
            <React.Fragment>
                <AppTitle >
                    <h1>(React) Google Books Search</h1>
                    <h3>Search for and Save Books of Interest</h3> 
                </AppTitle > 
            
                <NameForm >
                    <h1>This is a form</h1>
                </NameForm >
            </React.Fragment>
        )
    }
}
