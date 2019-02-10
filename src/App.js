import React, { Component } from 'react';
import './ContactCard.css';
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import faker from "faker";
//faker brings in profile pictures that randomly generate on refresh...

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state is always an object
      contacts: [
        {
        name: "Val",
        email: "val@email.com"
      },

       {
        name: "Robin",
        email: "robin@email.com"
      },

      {
        name: "Tracy",
        email: "tracy@email.com"
       }
     ]
    };

    this.deleteContact = this.deleteContact.bind(this);
    this.addContact = this.addContact.bind(this);

  }

  render() {
    const { contacts } = this.state;
    //One option is to create the array of components first
      const contactCards = contacts.map((contact, index) =>
          <ContactCard 
          key = { index } 
          contact = {contact} 
          onDelete={()=>{this.deleteContact(index)}} 
          pic={faker.image.avatar()} />
        );
         //Another option is to create the array inline 
    return (
      <div className="App">
        <h1 className="heading">Contacts</h1>
        <ContactForm onFormSubmit={this.addContact}/>
        <div className="cc-container">
        <h2>All Contacts:</h2>
        {contactCards} 
        </div>   
      </div>

    );
  }

  addContact(contact) {
    this.setState(prevState => {
      const newArray  = prevState.contacts.slice(0);
      newArray.push(contact);
      return { contacts: newArray };
    })
  }

  deleteContact(index) {
    this.setState(prevState => {
      const newArray = prevState.contacts.slice(0);
      newArray.splice(index, 1);
      return {
        contacts: newArray
      }
    })
  }
}

export default App;
