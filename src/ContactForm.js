import React, {Component} from 'react';
import axios from 'axios';
const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdSq_cLFs5SOpexgDdm-gFT8BNUzfe3l1u41PLCwJcucgDetg/formResponse';
const GOOGLE_FORM_NAME_ID = 'entry.231727285';
const GOOGLE_FORM_EMAIL_ID = 'entry.663323343';
const GOOGLE_FORM_PHONE_ID = 'entry.188861041';
const GOOGLE_FORM_COMPANY_ID = 'entry.317764043';
const GOOGLE_FORM_PROJECT_ID = 'entry.356058682';

const CORS_PROXY = 'https://cors-escape.herokuapp.com/';

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
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <input
            type="company"
            name="company"
            value={this.state.company}
            onChange={this.handleChange}
          />
          <textarea
            name="project"
            value={this.state.project}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
