import * as React from 'react'
import * as Modal from 'react-modal'
import styled from 'styled-components'

Modal.setAppElement("#app")


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

interface Props {
    children: React.ReactNode
} 
interface State {
    modalIsOpen: boolean
}

class Component extends React.Component<Props,State> {
    constructor(props:Props) {
      super(props);
      this.state = {
        modalIsOpen: true
      };
  
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
  
    openModal() {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
      
    }
   
    closeModal() {
      this.setState({modalIsOpen: false});
    }
  
    render() {
      return (
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
        >
        {this.props.children}
        </Modal>
      );
    }
  }

  export default Component