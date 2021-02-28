const reducer = (state, action) => {
    
    switch (action.type) {
        case 'SET_ITEM_DETAIL':
            return {
                ...state,
                itemDetail: [...state, action.payload]
            }
        case 'SET_SHOPPING':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_SHOPPING':
            return {
                ...state,
                myList: []
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload,
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_ITEM_DETAIL':
            return {
                ...state,
                itemDetail: state.trends.find(item => item.id === Number(action.payload)) 
                    || state.originals.find(item => item.id === Number(action.payload))
                    || []
            }
        case 'SEARCH_REQUEST':
            return {
                ...state,
                search: [...state.search, action.payload]
            }
        case 'CLEAN_SEARCH':
            return {
                ...state,
                search:[]
            }
        default:
            return state
    }
    
}

export default reducer