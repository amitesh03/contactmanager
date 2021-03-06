import React from 'react'

function AddContact() {
  return (
    <>
    <div className="ui main">
      <h1>Add Contact</h1>
      <form className='ui form' >
        <div className='field'>
          <label>
            Name:
          </label>
          <input type="text" name="name" placeholder='Name' />
        </div>
        <div className='field'>
          <label>
            Email:
          </label>
          <input type="text" name="email" placeholder='Email' />
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>
    </>
  )
}

export default AddContact;