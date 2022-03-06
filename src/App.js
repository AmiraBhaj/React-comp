import './App.css';
import Adress from './components/profile/Adress';
import FullName from './components/profile/FullName';
import ProfilePhoto from './components/profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <h1> Welcome to my portfolio !!</h1>
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
