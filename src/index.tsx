// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
// import Home from './components/home/home';
// import Contacts from './components/contacts/contacts';
// import Posts from './components/posts/posts';
// import Post from './components/post/post';

import './style.css';
import { Provider } from 'react-redux';

import store from './store'

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));


// ReactDOM.render((
//     <BrowserRouter>
//         <App>
//             <Switch>
//                 <Route exact path='/' component={Home} />
//                 <Route path='/contacts' component={Contacts} />
//                 <Route exact path='/posts' component={Posts} />
//                 <Route path='/posts/:id' component={Post} />
//             </Switch>
//         </App>
//     </BrowserRouter>
// ), document.getElementById('root'));