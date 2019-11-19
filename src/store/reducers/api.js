import { YOUTUBE_LIBRARY_LOADED } from '../actions/api';

const initialState = {
    libraryLoaded: false,
};

export default function (state = initialState, action){
    switch(action.type){
        case YOUTUBE_LIBRARY_LOADED:
            return {
                libraryLoaded: true,
            };
        //undefined action type fail safe
        default:
            return state;
    }
}

//redux selector
export const getYoutubeLibraryLoaded = (state) => state.api.libraryLoaded;