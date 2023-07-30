import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage">
      <div className="homeTop">
        <h1>Hello Ritika!!!</h1>
        <h2>Welcome to my Confessions page..</h2>
        <h2>This website is entirely made for you by me...</h2>
      </div>
      <div className="confBox">
        <h2>You are the love of my life and hence there are many things I would like to confess to you.</h2>
        <h3>Let us preceed.</h3>
        <h3>Click on the button below :)</h3>
        <Link to={'/confessions'} className='clickMe'>Click Me :)</Link>
      </div>
    </div>
  );
}

export default Home