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
    searchValue,
    onEmptySearchValue,
}){
    return(
        <section>
            <ul>
                {error && onError()}
                {loading && onLoading()}
                {(!loading && !todos.length) && onSearchedTodos()}

                {(!!todos.length && !searchedTodos.length) && onEmptySearchValue(searchValue)}


                {searchedTodos.map(children || render())}

                
            </ul>
        </section>
    );
}
export { TodoList};