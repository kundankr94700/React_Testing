import {render,screen,cleanup} from '@testing-library/react'
import Todo from '../todo';
test('should render todo component',()=>{
    render(<Todo/>);
    const todoElement=screen.getAllByAltText('todo-1');
    expect(todoElement).toBeInTheDocument();
    //expect(todoElement).toHaveTextContext('hello world')

})