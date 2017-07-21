import React from 'react';
import MessageStreamWindowContainer from './message_stream_window_container';

export default class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };

    this.updateMessage = this.updateMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  updateMessage(e) {
    this.setState({ message: e.target.value });
  }

  sendMessage(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message).then(() => (
      this.setState({ message: '' })
    ));
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.sendMessage(this.state.message).then(() => (
        this.setState({ message: '' })
      ));
    }
  }

  render() {
    return (
      <div className='chat-window'>
        <header className='title-bar'>
          {this.props.windowName} - Instant Message
        </header>

        <hr/>

        <div className='chat-window-content'>
          <MessageStreamWindowContainer channelId={this.props.channelId}/>
          <hr/>
          <textarea
            value={this.state.message}
            onChange={this.updateMessage}
            onKeyPress={this.handleEnter}
            rows='2'
          />

          <footer>
            <button
              type='submit'
              onClick={this.sendMessage}
              >Send
            </button>
          </footer>
        </div>
      </div>
    );
  }
}