/** @jsx jsx */
import React from 'react';
import { connect } from "react-redux";
import './App.css';
import MessagesList from "./components/MessagesList";
import MessageForm from "./components/MessageForm";
import {fetchMessages} from "./store";
import { jsx, css } from '@emotion/core'

class App extends React.Component {

  componentDidMount() {
    setInterval(() => this.props.dispatch(fetchMessages()), 1000);
  }

  render() {
      return (
        <div css={css`
            display: flex;
            flex-flow: column;
            height: 100%;
            width: 600px;
            margin: 0 auto;
        `}>
          <MessagesList/>
          <MessageForm/>
        </div>
        );
    }
}

export default connect()(App);
