import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import MakeImages from '../MakeImages';
import ElfDebugEnzyme from '../ElfDebugEnzyme';
const elfDebugEnzyme = new ElfDebugEnzyme(true, 'make-image');

describe('React Home Tests', () => {
    it('renders default value of H1 tag', () => {
        const wrapper = shallow(<MakeImages />);
        const h1tag = <h1>Pix Picker</h1>;
        elfDebugEnzyme.getLast(wrapper, 'h1', true);
        expect(wrapper.contains(h1tag)).toEqual(true);
    });
});
