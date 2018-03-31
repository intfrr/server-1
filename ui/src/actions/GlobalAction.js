import * as AppAction from './AppAction';
import * as UserAction from './UserAction';
import * as MessageAction from './MessageAction';
import * as ClientAction from './ClientAction';
import dispatcher from '../stores/dispatcher';

/** Calls all actions to initialize the state. */
export function initialLoad() {
    AppAction.fetchApps();
    UserAction.fetchCurrentUser();
    MessageAction.fetchMessages();
    MessageAction.listenToWebSocket();
    ClientAction.fetchClients();
    UserAction.fetchUsers();
}

export function snack(message) {
    dispatcher.dispatch({type: 'SNACK', payload: message});
}
