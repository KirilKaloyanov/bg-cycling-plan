import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import { registerParticipant } from "../services/participantService";

class Conference extends Component {
  state = {
    account: {
      firstName: "",
      lastName: "",
      email: "",
      organisation: "",
    },
    errors: {},
  };

  schema = {
    firstName: Joi.string().required().max(30),
    lastName: Joi.string().required().max(30),
    email: Joi.string().email().max(96),
    organisation: Joi.string().max(256),
  };

  translateErrorMessage = (errors, i) => {
    if (i === "email") errors[i] = "Моля, въведете валиден e-mail.";
    else if (i === "organisation")
      errors[i] =
        "Моля, въведете организация или интересите, които Ви мотивират да участвате.";
    else errors[i] = "Полето не може да бъде празно.";
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    return result.error ? result.error.details[0].path[0] : null;
  };

  handleChange = ({ currentTarget: input }) => {
    let errors = { ...this.state.errors };
    //const errorKey = this.validateProperty(input);
    //if (errorKey) errors = this.translateErrorMessage(errors, errorKey);
    //else delete errors[input.name];

    let account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    let errors = {};
    if (result.error) {
      for (let item of result.error.details) {
        const i = item.path[0];
        errors = this.translateErrorMessage(errors, i);
      }
    }
    return errors;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    const { data } = await registerParticipant(this.state.account);
    if (data.errors) {
      for (let item in data.errors) {
        const i = item;
        errors = this.translateErrorMessage(errors, i);
      }
    }
    this.setState({ errors: errors || {} });
  };

  renderSubmitButtonClasses = () => {
    return this.validate() ? "btn_arrow btn_disabled" : "btn_arrow";
  };

  render() {
    return (
      <div className="form_container">
        <h2 className="align_center">Национална велосипедна конференция</h2>
        <h3 className="align_center">форма за регистрация</h3>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="firstName"
            type="text"
            label="Име"
            value={this.state.account.firstName}
            onChange={this.handleChange}
            errors={this.state.errors}
          />
          <Input
            name="lastName"
            type="text"
            label="Фамилия"
            value={this.state.account.lastName}
            onChange={this.handleChange}
            errors={this.state.errors}
          />
          <Input
            name="email"
            type="text"
            label="Е-mail"
            value={this.state.account.email}
            onChange={this.handleChange}
            errors={this.state.errors}
          />
          <Input
            name="organisation"
            type="text"
            label="Организация"
            value={this.state.account.organisation}
            onChange={this.handleChange}
            errors={this.state.errors}
          />
          <button
            type="submit"
            //disabled={this.validate()}
            className={this.renderSubmitButtonClasses()}
          >
            Регистрирай се
          </button>
        </form>
      </div>
    );
  }
}

export default Conference;
