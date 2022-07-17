import React from 'react';
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"
import './App.css';

function App() {

  const contacts=[
    {
      id:"1",
      name:"Amitesh",
      email:"amitesh0303@gmail.com"
    },
    {
      id:"2",
      name:"Bonney",
      email:"boney@inboxkitten.com"
    }
  ];

  return (<div className='ui container'>
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
