import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <header>
        <nav>
          <ul>
            <li>
              <Link className='link' to='/contacts'>
                Contacts
              </Link>
            </li>
            <li>
              <Link className='link' to='/messages'>
                Messages
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Home;
