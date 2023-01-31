import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Loader, LoaderProp } from '../components/Loader';

describe('Loader', (): void => {
  let wrapper: ShallowWrapper;

  beforeEach((): void => {
    const props: LoaderProp = {
      color: 'black',
    };
    wrapper = shallow(<Loader {...props} />);
  });

  it('should render properly', (): void => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
