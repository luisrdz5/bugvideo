import  React, { Component } from 'react'
import HomeLayout from '../components/home-layout.js'
import Categories from '../../categories/components/categories.js'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handleError'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'
// import { listenerCount } from 'cluster';
import { List as list } from 'immutable'

class Home extends Component {
    state = {
        modalVisible: false
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }
    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories 
                        categories={this.props.categories}
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPlayer 
                                    autoplay
                                    src={this.state.media.src}
                                    title={this.state.media.title}                    
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
} 

function mapStateToProps(state, props){
    const categories = state.get('data').get('categories').map((categoryId) => {
        return state.get('data').get('entities').get('categories').get(categoryId)
    })
    let searchResults = list()
    const search =  state.get('data').get('search')
    if(search){
        const mediaList = state.get('data').get('entities').get('media')
        searchResults = mediaList.filter((item) => (
            item.get('author').toLowerCase().includes(search.toLowerCase())
        )).toList()
    }
    return {
        categories: categories,
        search: searchResults
    }
}
export default connect(mapStateToProps)(Home)