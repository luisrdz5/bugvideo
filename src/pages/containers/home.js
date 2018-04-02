import  React, { Component } from 'react'
import HomeLayout from '../components/home-layout.js'
import Categories from '../../categories/components/categories.js'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handleError'
import VideoPlayer from '../../player/containers/video-player'

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
                        categories={this.props.data.categories}
                        handleOpenModal={this.handleOpenModal}
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

export default Home