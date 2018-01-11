import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const stories = [{
    id:1,
    stories: `Melissa Mosz def not cool`
  },
  {
    id:2,
    stories: `Joe is sorta cool`
  },
  {
    id:3,
    stories: `Teddi is cool`
  }
];

ReactDOM.render(<App data = {stories} />, document.getElementById('root'));
registerServiceWorker();
