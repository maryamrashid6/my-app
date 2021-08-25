export const deleteTodo =(id)=>{
    return{
        type:'DELETE_TODO',
        id
    }
}

export const addTodo =(body)=>{
    return{
        type:'ADD_TODO',
        body
    }
}