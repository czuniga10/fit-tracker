import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';


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
        const {id, index, name, details, nameValue, detailsValue, handleInputChange, handleSaveChange, reduxUpdate} = this.props;
        return(
        <div className='proj-item-wrap'>
            <Link to={`/workout/${id}`} onClick={() => reduxUpdate(index)} className='proj-holder-link'>

                    <div>
                        <div className="name">
                            {name}
                        </div>
                        <div className="details">
                            {details}
                        </div>
                    </div>
            </Link>
            <div className='proj-btns'>
                <button onClick={this.openModal} className='proj-edit-btn'>Edit</button>
                <button className='delete-proj'>Delete</button>
            </div>
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
                <input className='update-project' placeholder="Name" value={nameValue} type="text" name={`name${index}`} onChange={ e => {handleInputChange(e) }}/>
                <input className='update-project' placeholder="Description" value={detailsValue} type="text" name={`details${index}`} onChange={ e => {handleInputChange(e) }}/>
                <button onClick={() => handleSaveChange(index)}>save Project</button>
            </form>
            </Modal>
        </div>

        )
    }
}
export default ProjectItem;