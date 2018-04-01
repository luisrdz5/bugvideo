import React from 'react'
import { format } from 'util';
import './search.css'

const Search = (props) => (
        <form 
            className="Search" 
            onSubmit={props.handleSubmit}
        > 
            <input 
                ref={props.setRef}
                type="text" 
                className="Search-input"
                placeholder="Busca Tu video Favorito .."
                name="search"
                onChange={props.handleChange}
                value={props.value}
            />
        </form>
)
export default Search