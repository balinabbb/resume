import React from 'react';
import ReactDOM from 'react-dom';
import App from './scripts/components/App';
// import ReactPDF from 'react-pdf';

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);

// ReactPDF.render(<App/>, `${__dirname}../../example.pdf`)
