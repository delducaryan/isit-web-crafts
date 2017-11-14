import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');

import ReactHome from '../ReactHome';
import HomeButtons from '../HomeButtons';
import MakeHtml from '../MakeHtml';
import MakeHtmlDropDowns from '../MakeHtmlDropDowns';
import MakeHtmlHomeButton from '../MakeHtmlHomeButton';
import MakeImages from '../MakeImages';
import MakeImagesButtons from '../MakeImagesButtons';
import raf from '../temp-poly-fills';

describe('basic sanity test', function() {

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

    it('renders MakeHtml without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtml />, div);
    });

    it('renders MakeHtmlDropDowns without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtmlDropDowns />, div);
    });

    it('renders MakeHtmlHomeButton without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeHtmlHomeButton />, div);
    });

    it('renders MakeImages without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeImages />, div);
    });

    it('renders MakeImagesButtons without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MakeImagesButtons />, div);
    });
});