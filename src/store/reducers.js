import { BBOX_CHANGED, DATA_LOADED, ITEM_SELECTED } from './action-types';

const initialState = {
    bbox: [],
    selectedId: '',
    hotels: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case BBOX_CHANGED:
            return {
                ...state,
                bbox: action.bbox
            };
        case DATA_LOADED:
            return {
                ...state,
                hotels: action.payload
            };
        case ITEM_SELECTED:
            return {
                ...state,
                selectedId: action.itemId
            };
        default:
            return state;
    }
};

export default rootReducer;