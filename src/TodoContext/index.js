import React from "react";

const TodoContext = React.createContext();

function TodoProvider(){
    return(
        <TodoContext.Provider>

        </TodoContext.Provider>
    )
}


<TodoContext.Provider></TodoContext.Provider>
<TodoContext.Consumer></TodoContext.Consumer>


export {TodoContext,TodoProvider};
