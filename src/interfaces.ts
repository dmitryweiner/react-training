export interface IMessage {
    message: string;
    nick: string;
}

export interface IMessagesList extends Array<IMessage> {}

export interface IStoreState {
    messages: IMessagesList;
}