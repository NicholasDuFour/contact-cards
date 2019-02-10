import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "grant.png",
      name: "",
      email: ""
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

    render() {
        // Each input has its value controlled by the component state. And when
        // a user changes the value we update the state to match. It ends up
        // being a tight two-way sync.
        return (
            <form className="ContactForm" onSubmit={this.handleFormSubmit}>
                <h2>Add A Contact</h2>
                <p className="name-label">
                    <label>Name</label>
                    <input value = {this.state.name} onChange={this.handleChangeName}/>
                </p>
                <p className="email-label">
                    <label>Email</label>
                    <input type="email" value = {this.state.email} onChange={this.handleChangeEmail}/>
                </p>
                <p className="ContactForm__button-bar button-bar">
                    <button className= "addContact contact-btn" type="submit">Add</button>
                </p>
            </form>  
        );
    }

    handleChangeName(e){
      this.setState({
        name: e.target.value
      })
    }

    handleChangeImage(e){
      this.setState({
        image: e.target.value
      })
    }

    handleChangeEmail(e){
      this.setState({
        email: e.target.value
      })
    }

    handleFormSubmit(e){
      e.preventDefault();
      const formData = {
        name: this.state.name,
        email: this.state.email,
        image: this.state.image
      };
      //this then clears the form onSubmit
      this.setState({
        name: "",
        email: ""
      })
      this.props.onFormSubmit(formData)
    }

}

export default ContactForm;