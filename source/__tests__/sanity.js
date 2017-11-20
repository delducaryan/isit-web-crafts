import React from 'react';
import ReactDOM from 'react-dom';
import ReactHome from '../ReactHome';
import HomeButtons from '../HomeButtons';
import MakeHtml from '../MakeHtml';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import MakeImages from '../MakeImages';
<<<<<<< HEAD
=======
import MakeImagesButtons from '../MakeImagesButtons';
import raf from '../temp-poly-fills';
>>>>>>> a46fb58b3e29564bd64aaf94c84436404d11f2dd

describe('WebCrafts Sanity Test', function() {
    'use strict';

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders ReactHome without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ReactHome />, div);
    });

    it('renders HomeButtons without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HomeButtons />, div);
    });

<<<<<<< HEAD
    it('tests if we can load MakeHtml', () => {
=======
    it('renders MakeHtml without crashing', () => {
>>>>>>> a46fb58b3e29564bd64aaf94c84436404d11f2dd
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtml />, div);
    });

<<<<<<< HEAD
    it('tests if we can load MakeHtml DropDowns', () => {
=======
    it('renders MakeHtmlDropDowns without crashing', () => {
>>>>>>> a46fb58b3e29564bd64aaf94c84436404d11f2dd
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtmlDropDowns />, div);
    });

<<<<<<< HEAD
    it('tests if we can load MakeHtml DropDowns', () => {
=======
    it('renders MakeHtmlHomeButton without crashing', () => {
>>>>>>> a46fb58b3e29564bd64aaf94c84436404d11f2dd
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtmlHomeButton />, div);
    });

<<<<<<< HEAD
    it('tests if we can load MakeImages', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeImages />, div);
    });
});
=======
    it('renders MakeImages without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeImages />, div);
    });

    it('renders MakeImagesButtons without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeImagesButtons />, div);
    });
});
>>>>>>> a46fb58b3e29564bd64aaf94c84436404d11f2dd
