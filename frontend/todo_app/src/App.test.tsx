
import { render , fireEvent } from '@testing-library/react'; 
import { Home } from './pages/Home';


describe('Todo App', () => {

  it('renders todos properly', () => {
    const { getByText } = render(<Home/>);
    expect(getByText('My Todos')).toBeInTheDocument();
  });

  it('renders empty state', () => {
    const { getByText } = render(<Home/>);
    expect(getByText('No todos found.')).toBeInTheDocument();
  });

  it('input field starts empty', () => {
    const { getByPlaceholderText } = render(<Home/>);
    const input = getByPlaceholderText('Enter Title') as HTMLInputElement;
    expect(input.value).toBe('');
  });

  it('handles empty title submission', () => {
    const originalAlert = window.alert;
    window.alert = jest.fn();
    const { getByTestId } = render(<Home/>);
    fireEvent.click(getByTestId('todo-create'));
    expect(window.alert).toHaveBeenCalledWith('Please enter Your title');
    window.alert = originalAlert;
  });

  
  it('adds new todo', () => {
    const { getByPlaceholderText, getByText,getByTestId } = render(<Home/>);

    const input = getByPlaceholderText('Enter Title');
    fireEvent.change(input, { target: { value: 'learn javascript' } });
    const newTodo = getByTestId('todo-create');
    fireEvent.click(newTodo)

    expect(getByText('learn javascript')).toBeInTheDocument();
  });

  it('toggles todo status on edit', () => {
    const { getByPlaceholderText,getByTestId } = render(<Home/>);

    const input = getByPlaceholderText('Enter Title');
    fireEvent.change(input, { target: { value: 'learn javascript' } });
    const newTodo = getByTestId('todo-create');
    fireEvent.click(newTodo)
    
    const component = getByTestId('todo-edit');
    fireEvent.click(component);
    
    const status = getByTestId('todo-status')
    expect(status).toHaveTextContent('Completed');
  });

  it('deletes todo', () => {
    const { getByPlaceholderText, queryByText , queryByTestId , getByTestId} = render(<Home/>);

    const input = getByPlaceholderText('Enter Title');
    fireEvent.change(input, { target: { value: 'learn javascript' } });

    const newTodo = getByTestId('todo-create');
    fireEvent.click(newTodo)
    expect(queryByText('learn javascript')).toBeInTheDocument();

    const deleteBTN = getByTestId('todo-delete') ;
    fireEvent.click(deleteBTN)

    expect(queryByTestId('todo-card')).not.toBeInTheDocument();
  });

});

