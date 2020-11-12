import React, { Component } from 'react'

class Footer extends Component{
    constructor(){
        super(

            )
            this.state= {date: new Date()}
    }

    render(){

        return (
            <footer>
                <p class="text-center">Copyrights &copy; Gomycode {this.state.date.getFullYear()}</p>
            </footer>
        )
    }
}

export default Footer