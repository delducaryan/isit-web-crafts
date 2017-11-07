import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from './ReactHome.js';
import MakeHtml from './MakeHtml';
import MakeImages from './MakeImages';

let homeDiv = null;

function reactMakeHtml(event, customMessage) {
    ReactDOM.render(<MakeHtml />, homeDiv);
}

function reactMakeImages(event, customMessage) {
    ReactDOM.render(<MakeImages />, homeDiv);
}

function reactHome() {
    document.getElementById('pageLoad').innerHTML = '';
    home();
}

function home() {
    ReactDOM.render(<ReactHome />, homeDiv);
}

$(document).ready(function() {
    homeDiv = document.getElementById('homeDiv');
    $.subscribe('clientMakeHtml', reactMakeHtml);
    $.subscribe('clientMakeImage', reactMakeImages);
    $.subscribe('home', reactHome);
    home();
});
