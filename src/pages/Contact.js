import React from "react";

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
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-8 is-variable">
                <article className="column is-two-thirds has-text-left">
                  <h1 className="title is-1">Contact Me</h1>
                  <p className="is-size-4">Want to reach out to me? Fill in your information and I'll respond as soon as possible!</p>
                </article>
                <div className="column is-one-third has-text-left">
                  <form
                    className="form"
                    onSubmit={this.submitForm}
                    action="https://formspree.io/xqkyyqqv"
                    method="POST"
                  >
                    <section className="field">
                      <label className="label">Email:</label>
                      <input className="input" type="email" name="email" />
                    </section>

                    <section className="field">
                      <label className="label">Message:</label>
                      <textarea className="textarea" type="text" name="message" />
                    </section>


                    {status === "SUCCESS" ? <p>Thanks! I'll be in touch with you soon.</p> : <button className="button is-link">Send</button>}
                    {status === "ERROR" && <p>Ooops! There was an error.</p>}
                  </form>
                </div>


              </div>

            </div>

          </div>

        </section>


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