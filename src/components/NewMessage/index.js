import React, { useState, useContext } from 'react';
import { Vonage } from '@vonage/server-sdk';
import { MessageContext } from '../../MessageContext';
import { useLocation } from 'react-router';

const NewMessage = () => {
  const location = useLocation();
  const userData = location?.state;
  const { message, setMessage } = useContext(MessageContext);

  const [messageValue, setMessageValue] = useState('');

  const vonage = new Vonage({
    apiKey: 'c2219170',
    apiSecret: 'sK7vDkWeYq1Tfn03',
  });

  const handleSendMessage = async () => {
    const receiver = 'Receiver';
    const sender = 'Sender';
    await vonage.sms
      .send({ receiver, sender, messageValue })
      .then((resp) => {
        console.log('Message sent successfully');
        console.log(resp);
      })
      .catch((err) => {
        console.log('There was an error sending the messages.');
        console.error(err);
      });
  };

  return (
    <div>
      <h3>To: {userData.name}</h3>
      <input
        type='text'
        value={messageValue}
        onChange={() => setMessageValue(messageValue)}
      />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default NewMessage;
