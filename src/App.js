/*
	Author : Hilmi
	Date-Time : 06.11.2018 - 14:48
	Description : First app at React.js
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  render() {
    var baslik = React.createElement('h1', null, 'Bu bir başlık');
    var alt = React.createElement('h2', {}, 'Bu bir alt başlık');
    var text = React.createElement('p', {}, "Aha bu da paragraf..... :)");
    var body = React.createElement('div', {}, [baslik, alt, text]);
    return (
      body
    );
  }

	
}

export default App;
