import React, { Component } from 'react';
import axios from 'axios';

const API_PATH = 'http://localhost:3001/index.php';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email:'',
            message:'',
            mailSent: false,
            error: null
        }
    }

    handleFormSubmit (e) {
        e.preventDefault();
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: {'content-type': 'application/json' },
            data: this.state
        })
            .then(result => {
                this.setState({
                    mailSent: result.data.sent
                })
            })
            .catch(error => this.setState({ error: error.message }));
    };

    render() {
        return(

            <div>
                <form action="#">
                <input 
                    type="text" 
                    id="fname" 
                    name="firstname" 
                    placeholder="first name"
                    value={this.state.fname}
                    onChange={e => this.setState({ fname: e.target.value})}/>
                <input 
                    type="text" 
                    id="lname" 
                    name="lastname" 
                    placeholder="last name"
                    value={this.state.lname}
                    onChange={e => this.setState({lname: e.target.value })}/>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="email"
                    value= {this.state.email}
                    onChange={ e => this.setState({email: e.target.value})}/>

                <textarea 
                    id="message" 
                    name="message" 
                    placeholder="message"
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}></textarea>
                <input 
                    type="submit"
                    onClick = {e => this.handleFormSubmit(e)} 
                    value="submit"/>

                </form>

            </div>
        )
    }
}

export default ContactForm;