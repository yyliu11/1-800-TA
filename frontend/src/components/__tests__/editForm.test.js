import { render, screen, cleanup } from '@testing-library/react';
import EditForm from '../editForm';

afterEach(() => {
  cleanup();
});

test('should render correct post title', () => {
  const title ='test one';
  const postBody= 'content of test one';
  render(<EditForm title={title} postBody={postBody}/>);
  const formElement = screen.getByTestId('edit-post-title');
  expect(formElement).toBeInTheDocument();
  expect(formElement).toHaveTextContent('test one');
})

test('should render correct post body', () => {
  const title ='test two';
  const postBody= 'content of test two';
  render(<EditForm title={title} postBody={postBody}/>);
  const formElement = screen.getByTestId('edit-post-body');
  expect(formElement).toBeInTheDocument();
  expect(formElement).toHaveTextContent('content of test two');
})