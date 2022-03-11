import './App.css';
import SimpleComponent from './components/SimpleComponent';
import SimpleComponentParent from './components/SimpleComponentParent';
import PropsComponent from './components/PropsComponent';
import MainPage from './practice/MainPage';
import HomePage from './practice/HomePage';
import WelcomeAdminUser from './practice/WelcomeAdminUser';
import WelcomeUser from './practice/WelcomeUser';
import ArrayComponent from './components/ArrayComponent';
import Image from './practice/Image';
import ObjComponent from './components/ObjComponent';
import ImageWithChild from './components/ImageWithChild';
import PropsDestructuring from './components/PropsDestrucutring';
import Books from './practice/Books';
import ImageIcon from './practice/ImageIcon';
import Label from './practice/Label';

function App() {

  const admin = true;
  const welcomeComponent = admin ? <WelcomeAdminUser username="Tibi" /> : <WelcomeUser username="Tibi" />;

  const obj = {
    image1: <Image src="https://placekitten.com/200/200" label="Hello bello" />,
    image2: <Image src="https://placekitten.com/200/200" label={<h2>Es igy is </h2>} />,
  }

  const bookList = [
    {
      title: 'Konyv cim 1',
      sale: true,
    },
    {
      title: 'Konyv cim 2',
      sale: false,
    },
    {
      title: 'Konyv cim 3',
      sale: true,
    }, 
  ]

  return (
    <div className="App">
      {/*    <SimpleComponentParent />
      <hr />
      <PropsComponent helloComponent={ <h2>Hello</h2> } />  
      <PropsComponent helloComponent={ <SimpleComponent /> } />  
      <hr /> */}

      {/*       <MainPage welcomeComponent={ <WelcomeUser username="Tibi" /> } />
      <HomePage welcomeComponent={ welcomeComponent } /> */}

          <ArrayComponent />
 

      {/*   <Image src="https://placekitten.com/200/200" label={ "Leiras" } />
      <Image src="https://placekitten.com/200/200" label={ <h2>Leiras</h2> } />
      <Image src="https://placekitten.com/200/200" label={ <button>Profil szerkesztese</button> } />
        */}

      {/*       <ObjComponent imageObj={ obj } /> */}

      {/*   <ImageWithChild src="https://placekitten.com/200/200">
        Itt van a child
      </ImageWithChild>

      <ImageWithChild src="https://placekitten.com/200/200">
        <h2>Itt van a child</h2>
      </ImageWithChild>


      <ImageWithChild src="https://placekitten.com/200/200">
        <img src="https://placekitten.com/20/20" />
        <h2>Tobb soros</h2>
      </ImageWithChild> */}

      {/*       <PropsDestructuring src="https://placekitten.com/200/200" label="hello" /> */}

      <Books bookList={bookList} />

      <Books bookList={bookList} decorationComponent={<ImageIcon src="https://placekitten.com/20/20" alt="Hello" />} />

      <Books
        bookList={bookList}
        decorationComponent={<Label label="->" />}
        saleImage={ <ImageIcon src="https://placekitten.com/20/20" alt="Akcios" /> }
      />

    </div>
  );
}

export default App;
