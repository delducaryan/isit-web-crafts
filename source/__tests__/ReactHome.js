import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');

import ReactHome from '../ReactHome';
import raf from '../temp-poly-fills';

describe('ReactHome tests', function() {

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders default value of H1 tag', () => {
        const wrapper = shallow(<ReactHome />);
        elfDebugEnzyme.getAll(wrapper, true);
        const nineSign = <h1>An H1 element in a React Component</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});
