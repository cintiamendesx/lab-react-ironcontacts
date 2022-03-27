import './App.css';
import contacts from "./contacts.json";
import { useState } from "react";


function App() {
  
  const [contactsList, setContactList] = useState(contacts.splice(0, 5));

  function random() {
    const clone = [...contacts];
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];   
    clone.push(randomContact);
    setContactList(clone);
  }

  function sortByName() {
    const clone = [...contacts];
    clone.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContactList(clone);
  }

  function popularitySort() {
    const clone = [...contacts];
    contacts.sort((a, b) => b.popularity - a.popularity)
    setContactList(clone);
}

  function deleteFunction() {
    const clone = [...contacts];
    contacts.filter("click", () => clone.remove())
    setContactList(clone);
  }


 return (

  <div id='IronContacts'>
  <h1>IronContacts</h1>

  <button id='addRandomContact' onClick={random}>Add Random</button> 
  <br />
  <button id='sortByNameContact' onClick={sortByName}>Sort By Name</button>
  <br />
  <button id='sortByNameContact' onClick={popularitySort}>Sort By Popularity</button>

      <table id='table'>
    
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won <br />Oscar</th>
            <th>Won <br />Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        {contactsList.map((currentContact, index) => (
        <tbody>
            <tr>
              <td>
                <img
                  style={{ width: "6vw" }}
                  src={currentContact.pictureUrl}
                  alt="thePicture"
                />
              </td>
              <td> {currentContact.name} </td>
              <td> {currentContact.popularity.toFixed(2)} </td>
              <td> {currentContact.wonOscar ? "🏆" : ""} </td>
              <td> {currentContact.wonEmmy ? "🏆" : ""} </td>

              <td> <button id='delete' onClick={deleteFunction}>delete</button></td>
            </tr>
            </tbody>
          ))}
      </table>
    </div>
 );
}

export default App;


