import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Welcome to the Login Page</h1>
      <Link to="/login" className="text-blue-500">Go to Home Page</Link>
    </div>
  );
};

export default Login;
