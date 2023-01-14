import React from 'react';
import './Contacts.css';
import { useNavigate } from 'react-router-dom';

const Contacts = () => {
  const navigate = useNavigate();
  const contacts = [
    {
      id: 1,
      name: 'Liam Smith',
      phone: '+917006215131',
    },
    {
      id: 2,
      name: 'John Doe',
      phone: '+919810153260',
    },
    {
      id: 3,
      name: 'Emma Johnson',
      phone: '+919810153260',
    },
    {
      id: 4,
      name: 'Noah Brown',
      phone: '+919810153260',
    },
    {
      id: 5,
      name: 'Ava Jones',
      phone: '+919810153260',
    },
    {
      id: 6,
      name: 'Oliver Garcia',
      phone: '+919810153260',
    },
  ];

  const handleUserClick = (user) => {
    navigate('/contacts/user', { state: user });
  };

  return (
    <div className='contacts-list'>
      <div className='buttons-container'>
        {contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => handleUserClick(contact)}
            className='user-button'
          >
            <p className='user-name'>{contact.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
