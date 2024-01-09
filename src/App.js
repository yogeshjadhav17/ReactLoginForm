import './App.css';
import LoginForm from './components/loginForm/LoginForm.js';
import './components/loginForm/validators.js';
import { confirmPasswordValidator, emailvalidator, passwordValidator } from './components/loginForm/validators.js';


function App() {
  return (
    <div className="App">
     <h1>Login Form</h1>
    <div>
      <LoginForm/>
      </div>
      </div>
  );
}

export default App;
