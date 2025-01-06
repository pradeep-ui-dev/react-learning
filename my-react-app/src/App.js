import React from 'react';

// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Card from './components/Card';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='wrapper'>
        <div className='aside'>
          <ProfileCard name="Pradeep" age={37} location="Navi Mumbai" />
          <ProfileCard name="Pradeep" age={37} location="Navi Mumbai" />

          <Card>
            <h2>Card Name</h2>
            <p>This is some content inside the card.</p>
          </Card>

          <Counter/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
