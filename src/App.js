import React from 'react';
import { connect } from "react-redux";
import './App.css';
import MessagesList from "./components/MessagesList";
import MessageForm from "./components/MessageForm";
import {fetchMessages} from "./store";

class App extends React.Component {

  componentDidMount() {
    setInterval(() => this.props.dispatch(fetchMessages()), 1000);
  }

  render() {
      return (
        <div className="App">
          <MessagesList/>
          <MessageForm/>
        </div>
        );
    }
}

export default connect()(App);
