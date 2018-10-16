import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'app/workers';
import { NotesModule } from 'modules/notes';
import './styles.scss'

const elem = document.getElementById('root');
ReactDOM.render(<NotesModule />, elem);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
