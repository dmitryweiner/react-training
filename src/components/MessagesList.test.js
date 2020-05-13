import React from "react";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from "../test-utils";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import MessagesList, {
  MessagesList as SimpleMessagesList
} from "./MessagesList";

test("MessagesList with empty store", () => {
  render(<MessagesList />);
  expect(screen.getByTestId("total-messages")).toHaveTextContent(
    "Total messages: 0"
  );
});

test("MessagesList with some messages", () => {
  const messages = [
    {
      message: "Message 1",
      nick: "Nick 1"
    },
    {
      message: "Message 2",
      nick: "Nick 2"
    },
    {
      message: "Message 3",
      nick: "Nick 3"
    }
  ];

  const props = {
    messages,
    messagesCount: messages.length
  };

  const component = renderer.create(<SimpleMessagesList {...props} />).toJSON();
  expect(component).toMatchInlineSnapshot(`
    <div>
      <li
        className="css-1hrldkh"
      >
        <ul
          className="css-1fvdz17-Message"
          data-testid="message"
        >
          <strong
            className="css-sktysn-Message"
          >
            &npsp;
            Nick 1
            :
          </strong>
           
          Message 1
        </ul>
        <ul
          className="css-1fvdz17-Message"
          data-testid="message"
        >
          <strong
            className="css-sktysn-Message"
          >
            &npsp;
            Nick 2
            :
          </strong>
           
          Message 2
        </ul>
        <ul
          className="css-1fvdz17-Message"
          data-testid="message"
        >
          <strong
            className="css-sktysn-Message"
          >
            &npsp;
            Nick 3
            :
          </strong>
           
          Message 3
        </ul>
      </li>
      <span
        data-testid="total-messages"
      >
        Total messages: 
        3
      </span>
    </div>
  `);
});
