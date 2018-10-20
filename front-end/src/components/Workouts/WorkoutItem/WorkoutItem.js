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
        const {id, index, name, date, time, nameValue, dateValue, timeValue, handleSaveChange, handleInputChange} = this.props;
        return(
        <div className="worout-item-wrapper">
            <Link to={`/exercise/${id}`} className='proj-holder-link'>
                <div className="workout-item-holder">
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
                    <div>edit exercise here</div>
                    <form>
                        <input className='update-workout' value={nameValue} type="text" name={`name${index}`} onChange={ e => {handleInputChange(e) }}/>
                        <input className='update-workout' value={dateValue} type="text" name={`date${index}`} onChange={ e => {handleInputChange(e) }}/>
                        <input className='update-workout' value={timeValue} type="text" name={`time${index}`} onChange={ e => {handleInputChange(e) }}/>
                        <button onClick={() => handleSaveChange(index)}>save exercise</button>
                    </form>
                    </Modal>
            </div>
        </div>
        )
    }
}
export default WorkoutItem;