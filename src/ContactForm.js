import React, {Component} from 'react';
import axios from 'axios';
import './ContactForm.css';
const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdSq_cLFs5SOpexgDdm-gFT8BNUzfe3l1u41PLCwJcucgDetg/formResponse';
const GOOGLE_FORM_NAME_ID = 'entry.231727285';
const GOOGLE_FORM_EMAIL_ID = 'entry.663323343';
const GOOGLE_FORM_PHONE_ID = 'entry.188861041';
const GOOGLE_FORM_COMPANY_ID = 'entry.317764043';
const GOOGLE_FORM_PROJECT_ID = 'entry.356058682';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      company: '',
      project: '',
      messageSent: null,
      messageError: null,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.sendAnswers();
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  sendAnswers = () => {
    const formData = new FormData();
    formData.append(GOOGLE_FORM_NAME_ID, this.state.name);
    formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email);
    formData.append(GOOGLE_FORM_PHONE_ID, this.state.phone);
    formData.append(GOOGLE_FORM_COMPANY_ID, this.state.company);
    formData.append(GOOGLE_FORM_PROJECT_ID, this.state.project);

    axios
      .post(GOOGLE_FORM_ACTION_URL, formData)
      .then(() => {
        this.setState({
          messageSent: true,
          sendingMessage: false,
          message: '',
          email: '',
        });
      })
      .catch(() => {
        this.setState({
          messageError: true,
          sendingMessage: false,
        });
      });
  };

  render() {
    return (
      <div className="contact-form-container">
        <div className="form-header">CONTACT US</div>
        <div className="form-copy-container">
          <div className="form-copy-header">Let's Innovate Together.</div>
          <div className="form-copy">
            Need help getting your project from an idea to something tangible?
            Please fill out the form below for a free consultation. All fields
            required.
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Full Name*"
            className="form-short-answer"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email*"
            className="form-short-answer"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            placeholder="Phone Number*"
            className="form-short-answer"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="company"
            value={this.state.company}
            placeholder="Company Name*"
            className="form-short-answer"
            onChange={this.handleChange}
          />
          <textarea
            name="project"
            value={this.state.project}
            placeholder="Tell us about your project*"
            className="form-long-answer"
            onChange={this.handleChange}
          />
          <button type="submit" className="form-submit">
            SUBMIT
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
