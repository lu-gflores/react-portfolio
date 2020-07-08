import React from "react";
import NavBar from '../components/NavBar'
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <>
      <form
        className="form"
        onSubmit={this.submitForm}
        action="https://formspree.io/xqkyyqqv"
        method="POST"
      >
        <section  className="field">
        <label className="label">Email:</label>
        <input className="input" type="email" name="email" />
        </section>
      
        <section className="field">
        <label className="label">Message:</label>
        <textarea className="textarea" type="text" name="message" />
        </section>
      

        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="button is-link">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </>
    );
 
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}