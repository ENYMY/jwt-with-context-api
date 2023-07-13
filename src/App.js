import "./App.css";
import Navbar from "./components/Navbar";
import LoginPage from "./components/Pages/LoginPage";
import ProfilePage from "./components/Pages/ProfilePage";
import SignupPage from "./components/Pages/SignupPage";

function App() {
  const isLoggedIn = false;
  return (
    <div className='App'>
      <div className='nav'>
        <Navbar />
      </div>

      <div className='pages'>
        {isLoggedIn ? <SignupPage /> : <ProfilePage />}
      </div>
    </div>
  );
}

export default App;
