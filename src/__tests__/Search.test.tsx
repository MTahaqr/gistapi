import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Search, SearchProps } from '../components/Search';

describe('Search', (): void => {
  let wrapper: ShallowWrapper;
  beforeEach((): void => {
    const props: SearchProps = {
      onChange: jest.fn(),
    };
    wrapper = shallow(<Search {...props} />);
  });

  it('should render properly', (): void => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
