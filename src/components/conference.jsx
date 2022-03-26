import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

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
    email: Joi.string().email().required().max(96),
    organisation: Joi.string().max(256),
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });

    if (!result.error) return null;
    const errors = {};
    if (result.error) {
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    let account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="firstName"
            type="text"
            label="Име "
            value={this.state.account.firstName}
            onChange={this.handleChange}
            errors={this.state.errors}
          />
          <Input
            name="lastName"
            type="text"
            label="Фамилия "
            value={this.state.account.lastName}
            onChange={this.handleChange}
            errors={this.state.errors}
          />
          <Input
            name="email"
            type="text"
            label="Е-mail "
            value={this.state.account.email}
            onChange={this.handleChange}
            errors={this.state.errors}
          />
          <Input
            name="organisation"
            type="text"
            label="Организация "
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
