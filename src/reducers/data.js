import schemas from '../schemas/index'
import { fromJS } from 'immutable'
import { SEARCH_ENTITIES } from '../action-types/index'

const initialState = fromJS({
    entities: schemas.entities,
    categories: schemas.result.categories,
    search: ''
})
function data(state = initialState, action){
    switch (action.type) {
        case SEARCH_ENTITIES: {
            console.log(action.payload.query)
            return state.set('search', action.payload.query)
        }
        default: 
        return state
    }
}

export default data