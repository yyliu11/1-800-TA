import { render, screen, cleanup } from '@testing-library/react';
import PostList from '../postList';

afterEach(() => {
  cleanup();
});

test('should render correct post title', () => {
  const obj = {title: 'test one', body: 'content of test one'};
  render(<PostList post={obj}/>);
  const listElement = screen.getByTestId('post-title');
  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveTextContent('test one');
})

test('should render correct post body', () => {
  const obj = {title: 'test two', body: 'content of test two'};
  render(<PostList post={obj}/>);
  const listElement = screen.getByTestId('post-body');
  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveTextContent('content of test two');
})