import { TodoListItem } from "./TodoListItem"


export const TodoList = ({ todos = [], onDeleteTodo , onToggleTodo}) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                // todo item
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={id => onDeleteTodo(id)}
                    onToggleTodo = {id => onToggleTodo(id)}
                />
            ))}
        </ul>
    )
}
