import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Header, HeaderProps } from '../components/Header';

describe('Header', (): void => {
  let wrapper: ShallowWrapper;
  beforeEach((): void => {
    const props: HeaderProps = {
      onChange: jest.fn(),
    };
    wrapper = shallow(<Header {...props} />);
  });

  it('should render properly', (): void => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
