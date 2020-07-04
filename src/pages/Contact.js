import React, { Component } from 'react'

class Contact extends Component {
    state = {
        fullName: "",
        email: "",
        message: ""
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(!this.state.fullName || this.state.email) {
            alert("Please enter your name and email address.")
        }
    }
    



    render() {
        return (
            <form className="form">
                <section className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" name="fullName" type="text"/>
                     </div>
                </section>

                <section className="field">
                <lable className="label">Email</lable>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="email" name="email" placeholder="someone@example.com"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                </section>

                <section className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" name="message" placeholder="Type your message here"></textarea>
                    </div>
                </section>
                
                <section class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </section>

            </form>
        )
    }

}


export default Contact