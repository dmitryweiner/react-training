import React from 'react';
import './App.css';
import MessagesList from "./components/MessagesList";
import MessageForm from "./components/MessageForm";

const apiUrl = "http://localhost:3001";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      message: "",
      nick: ""
    };

    this.receiveMessages = this.receiveMessages.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    setInterval(this.receiveMessages, 1000);
  }

  receiveMessages() {
    const http = new XMLHttpRequest();
    http.open("GET", apiUrl, true);
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        this.updateMessages(http.responseText);
      }
    };
    http.send();
  }

  sendMessage() {
    const http = new XMLHttpRequest();
    http.open("POST", apiUrl, true);
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        this.updateMessages(http.responseText);
      }
    };
    http.send(JSON.stringify({
      message: this.state.message,
      nick: this.state.nick
    }));
    this.setState({message: ""});
  }

  updateMessages(messagesAsText) {
    const messages = JSON.parse(messagesAsText);
    this.setState({ messages });
  }

  render() {
      const {messages, message, nick} = this.state;

      return (
        <div className="App">
          <MessagesList messages={messages}/>
          <MessageForm
              nick={nick}
              message={message}
              onMessageChange={(event) => this.setState({message: event.target.value})}
              onNickChange={(event) => this.setState({nick: event.target.value})}
              sendMessage={this.sendMessage}
          />
        </div>
        );
    }
}

export default App;
