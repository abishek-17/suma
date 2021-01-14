import {
    createAction
} from '@reduxjs/toolkit';

const save = createAction("savedata");
const savep = (data) => {
    return {
        type: save.type,
        payload: {
            ...data
        }
    }
}


export {
    save,
    savep
};