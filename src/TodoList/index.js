import react from "react";
import './TodoList.css'

function TodoList({
    children,
    todos,
    error,
    onError,
    loading,
    onLoading,
    searchedTodos,
    onSearchedTodos,
    render,
}){
    return(
        <section>
            <ul>
                {error && onError()}
                {loading && onLoading()}
                {(!loading && !searchedTodos.length  && !todos.length) && onSearchedTodos()}

                {searchedTodos.map(render)}

                {children}
            </ul>
        </section>
    );
}
export { TodoList};