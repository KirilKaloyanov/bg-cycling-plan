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

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    if (!result.error) return null;
    const errors = {};
    if (result.error) {
      for (let item of result.error.details) {
        const i = item.path[0];
        if (i === "email") errors[i] = "Моля, въведете валиден e-mail.";
        else if (i === "organisation")
          errors[i] =
            "Моля, въведете организация или интересите, които Ви мотивират да участвате.";
        else errors[i] = "Полето не може да бъде празно.";
      }
    }
    console.log(errors);
    return errors;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    await registerParticipant(this.state.account);
  };

  handleChange = ({ currentTarget: input }) => {
    let account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    return (
      <div className="form_container">
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
          <button type="submit" className="btn_arrow">
            Регистрирай се
          </button>
        </form>
      </div>
    );
  }
}

export default Conference;
