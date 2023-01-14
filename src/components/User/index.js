import React from 'react';
import { useLocation } from 'react-router';
import './User.css';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const location = useLocation();
  const userData = location?.state;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contacts/user/new-message', { state: { userData } });
  };
  return (
    <div className='user-card'>
      {/* <p className='contact-name'>{userData.name}</p> */}
      {/* <p className='contact-phone'>{userData.phone}</p> */}
      <button className='send-message-btn' onClick={handleClick}>
        Send Message
      </button>
    </div>
  );
};

export default User;
