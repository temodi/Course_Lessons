const  { initializeApp } = require("firebase/app");
const  { getDatabase, ref, set, push } = require('firebase/database');
 
const firebaseConfig = {
  apiKey: "AIzaSyD36jvvOoQM2rTWNmAl8aJnKHWeXTsoHMM",
  authDomain: "crud-51c7e.firebaseapp.com",
  databaseURL: "https://crud-51c7e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crud-51c7e",
  storageBucket: "crud-51c7e.appspot.com",
  messagingSenderId: "844467403182",
  appId: "1:844467403182:web:31789e8365f2e656e5303f"
};
 
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  
 

const mainEndpoint = 'mxn';
const knowledgeEndpoint = 'knowledge';
const referencesEndpoint = 'references';
const blogPostEndpoint = 'blog/posts';

function createData(endpoint, data) {
  const refEp = ref(database, `${mainEndpoint}/${endpoint}`);
  const newRefEp = push(refEp);  
  return set(newRefEp, data)
}


createData(knowledgeEndpoint, {
  type: 'JavaScript',
  description: 'JS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}).then(() => console.log('Knowledge created'))

createData(knowledgeEndpoint, {
  type: 'HTML',
  description: 'Lorem ipsum HTML - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}).then(() => console.log('Knowledge created'))

createData(knowledgeEndpoint, {
  type: 'React',
  description: 'Lorem ipsum React - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}).then(() => console.log('Knowledge created'))



createData(referencesEndpoint, {
  name: 'PMA - WebShop',
  img: 'https://placekitten.com/200/200',
  description: 'PMA - WebShop - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}).then(() => console.log('References created'))

createData(referencesEndpoint, {
  name: 'PMA - Chat',
  img: 'https://placekitten.com/200/200',
  description: 'PMA - Chat- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}).then(() => console.log('References created'))

createData(referencesEndpoint, {
  name: 'PMA - Wuestion',
  img: 'https://placekitten.com/200/200',
  description: 'question - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}).then(() => console.log('References created'))
 

createData(blogPostEndpoint, {
  title: 'Building a loading bar component',
  img: 'https://placekitten.com/200/200',
  lead: 'A foundational overview of how to build a color adaptive and accessible loading bar with the <progress> element.',
  description: 'In this post I want to share thinking on how to build a color adaptive and accessible loading bar with the <progress> element. Try the demo and view the source!'
}).then(() => console.log('Blog post created'))
 


createData(blogPostEndpoint, {
  title: 'Building an adaptive favicon',
  img: 'https://placekitten.com/200/200',
  lead: 'In this post I want to share thinking on how to build an adaptive favicon with SVG. Try the demo.',
  description: 'A custom favicon is a great way to polish a web project. It displays on desktop browser tabs, and also inside "save for later" readers, other blog posts linking to your site, and more. Traditionally this has been done with the .ico file type, but recently browsers have allowed use of SVG, a vector format. Using progressive enhancement you can serve well supported .ico favicons, and upgrade to an .svg if available.'
}).then(() => console.log('Blog post created'))


createData(blogPostEndpoint, {
  title: 'WebAssembly feature detection',
  img: 'https://placekitten.com/200/200',
  lead: 'Learn how to use the newest WebAssembly features while supporting users across all browsers.',
  description: 'WebAssembly 1.0 was released four years ago, but development didn t stop there. New features are added through the proposal standardization process. As is generally the case with new features on the web, their implementation order and timelines can differ significantly between different engines. If you want to use those new features, you need to ensure that none of your users are left out. In this article you ll learn an approach for achieving this.'
}).then(() => console.log('Blog post created'))