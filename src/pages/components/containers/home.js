import  React, { Component } from 'react'
import HomeLayout from '../home-layout.js'
import Categories from '../../../categories/components/categories.js'

class Home extends Component {
    render() {
        return (
            <HomeLayout>
                <Categories categories={this.props.data.categories} />
            </HomeLayout>
        )
    }
} 

export default Home