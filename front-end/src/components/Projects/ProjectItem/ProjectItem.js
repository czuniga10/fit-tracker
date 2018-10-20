import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

import './ProjectItem.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


class ProjectItem extends Component {
    constructor(props) {
        super(props)
        this.state = {

            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        const {id, index, name, details, nameValue, detailsValue, handleInputChange, handleSaveChange} = this.props;
        return(
        <div>
        <Link to={`/workout/${id}`} className='proj-holder-link'>
            
                <div className="proj-holder">
                    <div className="name">
                        {name}
                    </div>
                    <div className="details">
                        {details}
                    </div>
                </div> 
        </Link>

            <div>
                <button onClick={this.openModal}>Edit</button>
                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >

                <h2 ref={subtitle => this.subtitle = subtitle}>Edit Exercise</h2>
                <button onClick={this.closeModal}>X</button>
                <div>edit project here</div>
                <form>
                    <input className='update-project' value={nameValue} type="text" name={`name${index}`} onChange={ e => {handleInputChange(e) }}/>
                    <input className='update-project' value={detailsValue} type="text" name={`details${index}`} onChange={ e => {handleInputChange(e) }}/>
                    <button onClick={() => handleSaveChange(index)}>save Project</button>
                </form>
                </Modal>
            </div>
        </div>
    
        )
    }
}
export default ProjectItem;