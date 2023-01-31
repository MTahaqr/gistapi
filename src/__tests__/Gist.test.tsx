import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import { Gist } from '../components/Gist';
import { GistResult } from '../services/gistService';

describe('Gist', (): void => {
  let wrapper: ShallowWrapper;

  beforeEach((): void => {
    const props: GistResult = {
      url: 'https://api.github.com',
      forks_url: 'https://api.github.com',
      comments_url: 'https://api.github.com',
      commits_url: 'https://api.github.com',
      id: '232',
      files: {},
      owner: {
        login: 'https://api.github.com',
        avatar_url: 'https://api.github.com',
        starred_url: 'https://api.github.com',
      },
      description: 'https://api.github.com',
      created_at: '2023-01-31T08:15:12Z',
      updated_at: '2023-01-31T08:15:12Z',
    };
    wrapper = shallow(<Gist {...props} />);
  });

  it('should render properly', (): void => {
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
