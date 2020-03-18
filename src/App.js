import React from 'react';
import './App.css';
import MessagesList from "./components/MessagesList";

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
    //http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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
          <form>
            <input
                value={nick}
                type="text"
                onChange={(event) => this.setState({nick: event.target.value})}/>
            <br/>
            <textarea
                value={message}
                onChange={(event) => this.setState({message: event.target.value})}>
            </textarea>
            <br/>
            <input type="button" value="Send" onClick={this.sendMessage}/>
          </form>
        </div>
        );
    }
}

export default App;
