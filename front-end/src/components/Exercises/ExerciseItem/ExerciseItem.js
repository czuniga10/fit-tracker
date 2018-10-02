import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

import {getOneExercise} from '../../../services/exercise.services';

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

// import './ProjectItem.css';


class ExerciseItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newExercise: '',
            modalIsOpen: false
        }
    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }
//   componentDidMount(){
//     let exercise_id = this.props.id;
//     getOneExercise(exercise_id)
//     .then( res => {
//         if (res.status !== 200){
//             console.log(res);
//         }
//         else{
//             this.setState({ newExercise: res.data });
//         }
//     })
//   }
    // openModal() {
    //     this.setState({modalIsOpen: true});
    // }

    // afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     this.subtitle.style.color = '#f00';
    // }

    // closeModal() {
    //     this.setState({modalIsOpen: false});
    // }

    render() {
        const {index, id, exercise, handleSaveChange, handleInputChange} = this.props;
        console.log(exercise);
        return(
        <div>
        <Link to={`/set/${id}`} className='proj-holder-link'>
            
                <div className="proj-holder">
                    <div className="exercise">
                        {exercise}
                    
                    </div>
                </div>
        </Link>
            <div>
                <input className='update-exercise' value={exercise} type="text" name="exercise" onChange={ e => {handleInputChange(e) }} onBlur={e => {handleSaveChange(e, index)}}/>
                <button onChange={e => {handleSaveChange(e, index)}}>save exercise</button>
            </div>
                        
                        {/* <div>
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
                                <input className='update-exercise' value={this.newExercise} type="text" name="exercise" onChange={ e => {handleInputChange(e) }} onBlur={e => {handleSaveChange(e, index)}}/>
                                <button>delete exercise</button>
                            </form>
                            </Modal>
                        </div> */}
        </div>
        )
    }
}
export default ExerciseItem;