//importing components
import {ADD_BOOK} from '../types/actionTypes'
import {DELETE_BOOK} from '../types/actionTypes';
import {DELETE_ALL} from '../types/actionTypes';
import {ADD_MEMBER} from '../types/actionTypes';
import {DELETE_MEMBER} from '../types/actionTypes';

//addbook action
export const addBook = (book) => {
    return{
        type: ADD_BOOK,
        payload: book
    }
}
//
export const deleteBook = (book_id) => {
    return{
        type: DELETE_BOOK,
        payload: book_id
    }
}

export const deleteBooks = () => {
    return{
        type: DELETE_ALL,
        
    }
}

export const addMember= (text) => {
    return{
        type: ADD_MEMBER,
        payload: text
        
    }
}

export const deleteMember = (text) => {
    return{
        type: DELETE_MEMBER,
        payload: text
    }
}