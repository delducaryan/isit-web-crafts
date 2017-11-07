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

    it('publishes clientMakeHtml event after button click', () => {
        const wrapper = shallow(<HomeButtons />);
        elfDebugEnzyme.getAll(wrapper, true);
        let subscriptionCalled = false;
        $.subscribe('clientMakeHtml', (event, target) => {
            console.log(JSON.stringify(event, null, 4));
            console.log(target);
            expect(event.type).toBe('clientMakeHtml');
            expect(target.message).toBe('The user wants to makeHtml.');
            subscriptionCalled = true;
        });
        wrapper.find('#makeHtml').simulate('click');
        expect(subscriptionCalled).toBeTruthy();
    });

    it('publishes clientMakeImage event after button click', () => {
        const wrapper = shallow(<HomeButtons />);
        elfDebugEnzyme.getAll(wrapper, true);
        let subscriptionCalled = false;
        $.subscribe('clientMakeImage', (event, target) => {
            console.log(JSON.stringify(event, null, 4));
            console.log(target);
            expect(event.type).toBe('clientMakeImage');
            expect(target.message).toBe('The user wants to makeImage.');
            subscriptionCalled = true;
        });
        wrapper.find('#makeImage').simulate('click');
        expect(subscriptionCalled).toBeTruthy();
    });
});
