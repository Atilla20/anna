import React, { Component } from 'react';

class ContactForm extends Component {

    render() {
        return(

            <div>
                <form action="/action_page.php">
                
                <label> First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Bob"/>
                <label>Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Ross"/>

                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="bobross@gmail.com"/>

                <label>Message</label>
                <textarea id="message" name="message" placeholder="No mistakes, only happy accidents..."></textarea>
                <input type="submit" value="Submit"/>

                </form>

            </div>
        )
    }
}

export default ContactForm;