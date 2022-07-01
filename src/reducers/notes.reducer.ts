// Flux ´Redux
// Una función pura (no depende ni mdifica nada externo)
// Recibe un estado y una acción, retorna un nuevo estado

import { iNote } from '../models/note';
import { iAction } from './notes.action.creators';
import { actionTypes } from './notes.action.types';

type actionNotes = Array<iNote> | iNote;

export function notesReducer(
    previousState: Array<iNote>,
    action: iAction<actionNotes>
) {
    let state: Array<iNote>;
    switch (action.type) {
        case actionTypes['notes@load']:
            state = action.payload as Array<iNote>;
            break;
        case actionTypes['notes@add']:
            state = [...previousState, action.payload as iNote];
            break;
        case actionTypes['notes@delete']:
            state = previousState.filter(
                (item) => item.id !== (action.payload as iNote).id
            );
            break;
        case actionTypes['notes@update']:
            state = previousState.map((item) =>
                item.id === (action.payload as iNote).id
                    ? (action.payload as iNote)
                    : item
            );
            break;
        default:
            state = previousState;
    }

    return state;
}
