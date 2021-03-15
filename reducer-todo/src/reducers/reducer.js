export const initialState = {
    toDoList: [{
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
    }]
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "UPDATE_ITEM":
            return {
                ...state, toDoList: [...state.toDoList, {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            }
        case "UPDATE_COMPLETED":
            return {
                ...state, toDoList: state.toDoList.map(currentItem => {
                    if(currentItem.id === action.payload.id) {
                        return {...currentItem, completed: !currentItem.completed}
                    } else {
                        return currentItem
                    }
                })
            }
        case "CLEAR_COMPLETED":
            return {
                ...state, toDoList: state.toDoList.filter(currentItem => currentItem.completed === false)
            }
        default: return state
    }
}