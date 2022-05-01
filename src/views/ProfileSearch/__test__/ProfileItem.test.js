import { render, screen, cleanup } from '@testing-library/react';
import ProfileItem from '../ProfileItem';

describe('test Profile Item render', () => {
  const profileInfo = {
    name: 'github',
    avatarUrl: 'https://avatars.githubusercontent.com/u/9919?v=4',
    pageUrl: 'https://github.com/github'
  };

  beforeEach(() => {
    cleanup();
  });

  it('render single li element', async () => {
    render(<ProfileItem profileInfo={profileInfo} />);
    const liElm = await screen.findAllByRole('listitem');
    expect(liElm).toHaveLength(1);
  });

  it('render avatar img with img src', async () => {
    const { getByRole } = render(<ProfileItem profileInfo={profileInfo} />);
    const imgElm = await screen.findAllByRole('img');
    expect(imgElm).toHaveLength(1);

    expect(getByRole('img').src).toEqual(profileInfo.avatarUrl);
  });

  it('render profile link with href', async () => {
    const { getByText } = render(<ProfileItem profileInfo={profileInfo} />);
    const aElm = await screen.findAllByRole('link');

    expect(aElm).toHaveLength(1);
    expect(getByText(profileInfo.name)).toBeInTheDocument();
    expect(getByText(profileInfo.name).href).toEqual(profileInfo.pageUrl);
  });
});
