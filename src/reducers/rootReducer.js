const initState ={
    todos:[
        {id:1, body:"Grocery shopping"},
        {id:2, body:"Do the dishes"},
        {id:3, body:"Driving Practice"}
    ]
}

const rootReducer =(state = initState, action)=>{
    if(action.type==='ADD_TODO'){
        let count= parseInt(state.todos[state.todos.length - 1].id);
        let newItem={id: count+1, body: action.body}
        console.log(state);
        return{
            ...state,
            todos:[...state.todos, newItem]
        }
        
    }
    if(action.type==='DELETE_TODO'){
        let newTodos=state.todos.filter(todo=>{
            return action.id !== todo.id
        });
        return{
            ...state,
            todos: newTodos
        }
        
    }
    return state;
}

export default rootReducer