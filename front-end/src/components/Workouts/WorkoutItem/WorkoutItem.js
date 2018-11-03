import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

// import './ProjectItem.css';

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

class WorkoutItem extends Component {
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
        const {id, index, name, date, time, nameValue, dateValue, timeValue, handleSaveChange, handleInputChange, reduxUpdate} = this.props;
        return(
        <div className="workout-item-wrapper">
            <Link to={`/exercise/${id}`} onClick={() => reduxUpdate(index)} className='workout-holder-link'>
                <div>
                    <div className="name">
                        {name}
                    </div>
                    <div className="date">
                        {date}
                    </div>
                    <div className="time">
                        {time}
                    </div>
                </div> 
            </Link>
            <div className="workout-btns">
                <button onClick={this.openModal} className="workout-edit-btn">Edit</button>
                <button className='delete-workout'>Delete</button>
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
                <div>edit exercise here</div>
                <form>
                    <input className='update-workout' placeholder="Name" value={nameValue} type="text" name={`name${index}`} onChange={ e => {handleInputChange(e) }}/>
                    <input className='update-workout' placeholder="Date" value={dateValue} type="text" name={`date${index}`} onChange={ e => {handleInputChange(e) }}/>
                    <input className='update-workout' placeholder="Time" value={timeValue} type="text" name={`time${index}`} onChange={ e => {handleInputChange(e) }}/>
                    <button onClick={() => handleSaveChange(index)}>save exercise</button>
                </form>
            </Modal>
        </div>
        )
    }
}
export default WorkoutItem;