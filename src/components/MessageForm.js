import React from "react";

export default function MessageForm(props) {
    return <form>
        <input
            value={props.nick}
            type="text"
            onChange={props.onNickChange}/>
        <br/>
        <textarea
            value={props.message}
            onChange={props.onMessageChange}>
            </textarea>
        <br/>
        <input type="button" value="Send" onClick={props.sendMessage}/>
    </form>;
}