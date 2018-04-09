import schemas from '../schemas/index'
import { fromJS } from 'immutable'

const initialState = fromJS({
    entities: schemas.entities,
    categories: schemas.result.categories,
    search: ''
})
function data(state = initialState, action){
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            console.log(action.payload.query)
            return state.set('search', action.payload.query)
        }
        default: 
        return state
    }
}

export default data