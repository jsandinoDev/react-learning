import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/useTodos";



export const TodoApp = () => {

	const { todos, todosCount, pendingTodosCount ,handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

	return (
		<>
			<h1>
				TodoApp {todosCount} <small>Pendientes: {pendingTodosCount}</small>
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					{/* todo List */}
					<TodoList
						todos={todos}
						onDeleteTodo={id => handleDeleteTodo(id)}
						onToggleTodo={id => handleToggleTodo(id)} />
					{/* fin todo list */}
				</div>

				<div className="col-5">
					<h4>Agregar ToDo</h4>
					<hr />
					{/* todoadd onNewTodo(todo)*/}
					{/* {id:newDate ..., desc, done} */}
					<TodoAdd onNewTodo={todo => handleNewTodo(todo)} />
					{/* fin todo appx */}
				</div>
			</div>
		</>
	);
};
