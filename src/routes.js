import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Messages from './components/Messages/index';
import User from './components/User';
import NotFound from './components/NotFound';
import NewMessage from './components/NewMessage';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/contacts' element={<Contacts />} />
      <Route exact path='/contacts/user' element={<User />} />
      <Route exact path='/contacts/user/new-message' element={<NewMessage />} />
      <Route exact path='/messages' element={<Messages />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
