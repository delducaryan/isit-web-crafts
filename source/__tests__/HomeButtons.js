import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'sanity');

import HomeButtons from '../HomeButtons';
import '../../public/javascripts/tools/tiny-pub-sub';
import raf from '../temp-poly-fills';

describe('HomeButtons tests', function() {

    it('expects true to be true', function() {
        expect(true).toBe(true);
    });

    it('renders state of XXX after button click', () => {
        const wrapper = shallow(<HomeButtons />);
        elfDebugEnzyme.getAll(wrapper, true);

    });
});
