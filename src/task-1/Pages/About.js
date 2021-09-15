import { Link } from 'react-router-dom';
const About = () => {
  return (
    <main>
      <h1>About Us</h1>
      <Link to='/'>
        <button>Back</button>
      </Link>
    </main>
  );
};

export default About;
