import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');

import ReactHome from '../ReactHome';
import HomeButtons from '../HomeButtons';
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

});