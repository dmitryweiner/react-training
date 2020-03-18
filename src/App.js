import React from 'react';
import './App.css';
import MessagesList from "./components/MessagesList";
import MessageForm from "./components/MessageForm";
import axios from "axios";

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
    axios.get(apiUrl).then((response) => this.setState({messages: response.data}));
  }

  sendMessage() {
    axios.post(apiUrl, JSON.stringify({message: this.state.message, nick: this.state.nick}))
        .then((response) => this.setState({messages: response.data}));
    this.setState({message: ""});
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
