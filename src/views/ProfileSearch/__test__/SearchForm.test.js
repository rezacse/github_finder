import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor
} from '@testing-library/react';
import SearchForm from '../SearchForm';

describe('test Search Form render', () => {
  const keyword = 'github';
  const searchType = 1;

  beforeEach(() => {
    cleanup();
  });

  const renderComponent = (props) =>
    render(
      <SearchForm
        keyword={keyword}
        searchType={searchType}
        submitHandler={() => {}}
        {...props}
      />
    );

  it('render radio buttons', async () => {
    renderComponent();

    const radioElm = await screen.findAllByRole('radio');
    expect(radioElm).toHaveLength(2);
  });

  it('render text box with value', async () => {
    const { getByRole } = renderComponent();

    const searchBoxElm = await screen.findAllByRole('textbox', /keyword/i);

    expect(searchBoxElm).toHaveLength(1);

    expect(getByRole('textbox', /keyword/i).value).toEqual(keyword);
  });

  it('render submit button ', async () => {
    const { getByRole } = renderComponent();

    const textBoxElm = getByRole('textbox', /keyword/i);
    fireEvent.change(textBoxElm, { target: { value: 'facebook' } });

    const submitBtnElm = await screen.findByRole('button', { name: /search/i });

    expect(submitBtnElm).not.toBeDisabled();
  });

  it('submit button click', async () => {
    const handleSubmit = jest.fn((values) => {});

    const { getByRole } = renderComponent({ submitHandler: handleSubmit });

    const textBoxElm = getByRole('textbox', /keyword/i);
    fireEvent.change(textBoxElm, { target: { value: 'facebook' } });
    fireEvent.click(await screen.findByRole('button', { name: /search/i }));

    await waitFor(() => {
      expect(handleSubmit.mock.calls.length).toBe(1);
      expect(handleSubmit.mock.calls[0][0].keyword).toBe('facebook');
      expect(handleSubmit.mock.calls[0][0].searchType).toBe(1);
    });
  });
});
