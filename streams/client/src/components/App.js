import React from 'react';
import { 
  BrowserRouter,  // address.com/link
  // HashRouter,     // adds a #: address.com/#/link
  // MemoryRouter,   // does not use the url to track (address bar stays at root)
  Route, 
  // Link 
} from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <Link to ="/Other">Check out our other pages!</Link>
//     </div>
//   )
// }
// const Other = () => {
//   return (
//     <div>
//       <h1>Other Page</h1>
//       <Link to ="/">Got to Home</Link>
//     </div>
//   );
// }

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList}/>
        <Route path="/streams/new" exact component={StreamCreate}/>
        <Route path="/streams/edit" exact component={StreamEdit}/>
        <Route path="/streams/delete" exact component={StreamDelete}/>
        <Route path="/streams/show" exact component={StreamShow}/>
      </BrowserRouter>
    </div>
  );
};

export default App;