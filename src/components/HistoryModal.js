import React, { Component } from 'react';
import './HistoryModal.css';
import Axios from 'axios';

export default class HistoryModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historyMessages: []
    };
  }

  
  componentDidMount() {
    Axios.get('/api/messages/history').then((response) => {
      this.setState({historyMessages:response.data})
    })
  }
  

  render() {
    let historyMessages = this.state.historyMessages.map((messageObj, i) => {
      return (
        <div className="message" key={i}>
          <span>{messageObj.username}</span>
          <span>{messageObj.message}</span>
        </div>
      );
    });

    return (
      <section className="modal-wrapper">
        <div className="modal-content">{historyMessages}</div>
        <div className="close" onClick={this.props.closeHistoryModal}>
          x
        </div>
      </section>
    );
  }
}
