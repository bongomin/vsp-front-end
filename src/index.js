import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let Root = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>, Root
  );
}

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render)
  })
}
render();

serviceWorker.unregister();
