import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './UseTodos';

function App() {
  const {
    addTodo,
    todos,
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,

  } = useTodos();
  

  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        />
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <div className='loading'>
                      <span className='dot-1'></span>
                      <span className='dot-2'></span>
                      <span className='dot-3'></span>
                    </div>}
        {(!loading && !searchedTodos.length  && !todos.length) && <p className="NewTodo-Text" onClick={setOpenModal}>¡Crea tu primer TODO!</p>}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
};

export default App;