import './App.css';
import SimpleComponent from './components/SimpleComponent';
import SimpleComponentParent from './components/SimpleComponentParent';
import PropsComponent from './components/PropsComponent';
import MainPage from './practice/MainPage';
import HomePage from './practice/HomePage';
import WelcomeAdminUser from './practice/WelcomeAdminUser';
import WelcomeUser from './practice/WelcomeUser';
import ArrayComponent from './components/ArrayComponent';


function App() {

  const admin = true;

  const welcomeComponent = admin ?  <WelcomeAdminUser username="Tibi" />:<WelcomeUser username="Tibi" />; 

  return (
    <div className="App">
 {/*      <SimpleComponentParent />
      <hr />
      <PropsComponent helloComponent={ <SimpleComponent /> } /> */}


{/*       <MainPage welcomeComponent={ <WelcomeUser username="Tibi" /> } />
      <HomePage welcomeComponent={ welcomeComponent } /> */}

      <ArrayComponent />
    </div>
  );
}

export default App;
