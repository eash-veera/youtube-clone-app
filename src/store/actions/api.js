import { createAction } from './index.js';

export const YOUTUBE_LIBRARY_LOADED = 'YOUTUBE_LIBRARY_LOADED';

//Here I'm using Javascript's binding functionality 
//which will return a new function and pre-assign the parameters.
export const youtubeLibraryLoaded = createAction.bind(null, YOUTUBE_LIBRARY_LOADED);