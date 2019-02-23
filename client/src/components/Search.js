import React, { Component } from 'react'
import AppTitle from "./AppTitle"
import NameForm from "./NameForm"

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
