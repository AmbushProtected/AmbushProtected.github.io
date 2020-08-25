import React, {Component} from 'react';
import axios from 'axios';
import './ContactForm.css';
import Snackbar from '@material-ui/core/Snackbar';
import {SnackbarContent} from '@material-ui/core';
const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdSq_cLFs5SOpexgDdm-gFT8BNUzfe3l1u41PLCwJcucgDetg/formResponse';
const GOOGLE_FORM_NAME_ID = 'entry.231727285';
const GOOGLE_FORM_EMAIL_ID = 'entry.663323343';
const GOOGLE_FORM_PHONE_ID = 'entry.188861041';
const GOOGLE_FORM_COMPANY_ID = 'entry.317764043';
const GOOGLE_FORM_PROJECT_ID = 'entry.356058682';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  project: '',
  nameError: '',
  phoneError: '',
  emailError: '',
  companyError: '',
  projectError: '',
  messageSent: null,
  messageError: null,
};

class ContactForm extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  validate = () => {
    let nameError = '';
    let emailError = '';
    let phoneError = '';
    let companyError = '';
    let projectError = '';

    if (!this.state.name) {
      nameError = 'Please provide your name.';
    }
    if (!this.state.email) {
      emailError = 'Please provide your email.';
    }
    if (!this.state.phone) {
      phoneError = 'Please provide your phone number.';
    }
    if (!this.state.company) {
      companyError = 'Please provide your company name.';
    }
    if (!this.state.project) {
      projectError = 'Please provide your project description.';
    }

    if (nameError || emailError || phoneError || companyError || projectError) {
      this.setState({
        nameError,
        emailError,
        phoneError,
        companyError,
        projectError,
      });
      return false;
    }
    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.validate()) {
      this.sendAnswers();
      //snackbar pop up prompt
      this.setState({messageSent: true});
    } else {
      this.setState({submitError: true});
    }
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
        //clear form
        this.setState(initialState);
      })
      .catch(() => {
        console.log('error with form submission');
      });
    this.setState(initialState);
  };

  render() {
    return (
      <div className="contact-form-container">
        <div className="section-header">CONTACT US</div>
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
          <div className="form-error">{this.state.nameError}</div>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email*"
            className="form-short-answer"
            onChange={this.handleChange}
          />
          <div className="form-error">{this.state.emailError}</div>
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            placeholder="Phone Number*"
            className="form-short-answer"
            onChange={this.handleChange}
          />
          <div className="form-error">{this.state.phoneError}</div>
          <input
            type="text"
            name="company"
            value={this.state.company}
            placeholder="Company Name*"
            className="form-short-answer"
            onChange={this.handleChange}
          />
          <div className="form-error">{this.state.companyError}</div>
          <textarea
            name="project"
            value={this.state.project}
            placeholder="Tell us about your project*"
            className="form-long-answer"
            onChange={this.handleChange}
          />
          <div className="form-error">{this.state.projectError}</div>
          <button type="submit" className="form-submit">
            SUBMIT
          </button>
        </form>
        <Snackbar
          open={this.state.messageSent}
          autoHideDuration={6000}
          onClose={() => {
            this.setState({messageSent: false});
          }}
        >
          <SnackbarContent message="Successfully Submitted!" />
        </Snackbar>
        <Snackbar
          open={this.state.submitError}
          autoHideDuration={6000}
          onClose={() => {
            this.setState({submitError: false});
          }}
        >
          <SnackbarContent message="Please see errors above" />
        </Snackbar>
      </div>
    );
  }
}

export default ContactForm;
