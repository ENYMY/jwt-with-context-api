import "./App.css";
import Navbar from "./components/Navbar";
import SignupPage from "./components/Pages/SignupPage";

function App() {
  return (
    <div className='App'>
      <div className='nav'>
        <Navbar />
      </div>

      <div className='pages'>
        <SignupPage />
      </div>
    </div>
  );
}

export default App;
