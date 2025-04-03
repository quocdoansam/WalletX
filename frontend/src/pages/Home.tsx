import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="p-4">
            <h1>Welcome to the Home Page!</h1>
            <Link to="/login" className="text-blue-500">Go to Login Page</Link>
        </div>
    );
};

export default Home;
