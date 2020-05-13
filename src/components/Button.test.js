import React from 'react';
import { render } from "../test-utils";
import Button from './Button';

let props;
beforeEach(() => {
  props = {
    isPrimary: false,
    isDanger: false,
    isSuccess: false,
  };
});
describe('test Button component', () => {
  it.each`
    propName       | className
    ${'isPrimary'} | ${'is-primary'}
    ${'isDanger'}  | ${'is-danger'}
    ${'isSuccess'} | ${'is-success'}
  `('should have class $className when prop $propName is equal to $propValue', ({propName, className}) => {
    props = { ...props, [propName]: true };
    const wrapper = render(<Button {...props} />);
    expect(wrapper.container.firstChild).toHaveClass(className);
  });
});
