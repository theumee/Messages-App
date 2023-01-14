import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from './routes';
import { MessageContext } from './MessageContext';
import React, { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState([]);
  return (
    <div className='App'>
      <BrowserRouter>
        <MessageContext.Provider value={{ messages, setMessages }}>
          <CustomRoutes />
        </MessageContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
