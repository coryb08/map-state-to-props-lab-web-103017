import React, { Component } from "react"
import { addUser } from "../actions/users"
import actions from "../actions/users.js"
import { connect } from "react-redux"

class UserInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      hometown: ""
    }
  }

  handleOnUserNameChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleOnHometownChange(event) {
    this.setState({
      hometown: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault()

    this.props.store.dispatch(addUser(this.state))
  }

  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={event => this.handleOnUserNameChange(event)}
            placeholder="user name"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={event => this.handleOnHometownChange(event)}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default UserInput
