
function data(state, action){
    console.log(action)
    switch (action.type) {
        case 'SEARCH_VIDEO': {
            let results = []
            if (action.payload.query)
            {
                console.log(action.payload.query)
                const list = state.data.categories[2].playlist
                results = list.filter((item) => {
                    return item.author.includes(action.payload.query)
                })
                console.log(results)
            }
            return {
                ...state,
                search: results
            }
        }
        default: 
        return state
    }
}

export default data