import React, { Component } from "react";
import "./ContactCard.css";

class ContactCard extends Component {
  render(){
    return (
      <div className="ContactCard">
        <img src={this.props.pic} alt="contact avatar pic"/>
        <h3 className="ContactCard_name">{this.props.contact.name || "no name"}</h3>
        <p className="ContactCard_email">{this.props.contact.email || "no email"}</p>
        <button className="deleteContact contact-btn" onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

export default ContactCard;