export const setItemDetail = payload => ({
    type: 'SET_ITEM_DETAIL',
    payload,
})

export const setShopping = payload => ({
    type: 'SET_SHOPPING',
    payload,
})

export const deleteShopping = payload => ({
        type:'DELETE_SHOPPING',
        payload,
})

export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
})

export const logoutRequest = payload => ({
    type: 'LOGOUT_REQUEST',
    payload,
})

export const registerRequest = payload => ({
    type: 'REGISTER_REQUEST',
    payload,
})

export const getItemDetail = payload => ({
    type: 'GET_ITEM_DETAIL',
    payload,
})

export const searchRequest = payload => ({
    type:'SEARCH_REQUEST',
    payload,
})

export const cleanSearch = payload => ({
    type: 'CLEAN_SEARCH',
    payload,
})
