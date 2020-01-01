import {
    GET_LATEST,
    GET_LATEST_FAILURE,
    GET_LATEST_SUCCESS,
    CLEAR_ARTICLE_DATA,
    GET_ARTICLE_DATA,
    GET_ARTICLE_DATA_FAILURE,
    GET_ARTICLE_DATA_SUCCESS,
    GET_OTHER,
    GET_OTHER_FAILURE,
    GET_OTHER_SUCCESS,
    HANDLE_LIKES_ARTICLE,
    HANDLE_LIKES_ARTICLE_FAILURE,
    HANDLE_LIKES_ARTICLE_SUCCESS,
} from "./actions";

const initialState = {
    latest: null,
    isLoadingLatest: true,
    otherNews: null,
    isLoadingOtherNews: true,
    articleData: null,
    isLoadingArticleData: true,
};

export default function (state = initialState, action) {

    const { payload, type } = action;
    
    switch (type) {
        case GET_LATEST: {
            return { 
                ...state,
                isLoadingLatest: true,
                isLoadingLatestError: null,
            };
        }
        case GET_LATEST_SUCCESS: {
            const { data } = payload;
            return { 
                ...state,
                latest: data,
                isLoadingLatest: false,
            };
        } 
        case GET_LATEST_FAILURE: {
            const { error } = payload;
            return { 
                ...state,
                isLoadingLatest: false,
                isLoadingLatestError: error,
            };
        }

        case GET_OTHER: {
            return { 
                ...state,
                isLoadingOtherNews: true,
                isLoadingOtherNewsError: null,
            };
        }
        case GET_OTHER_SUCCESS: {
            const { data } = payload;
            return { 
                ...state,
                otherNews: data,
                isLoadingOtherNews: false,
            };
        }
        case GET_OTHER_FAILURE: {
            const { error } = payload;
            return { 
                ...state,
                isLoadingOtherNews: false,
                isLoadingOtherNewsError: error,
            };
        }
            
        case GET_ARTICLE_DATA: {
            return { 
                ...state,
                isLoadingArticleData: true,
                isLoadingArticleDataError: null,
            };
        }
        case GET_ARTICLE_DATA_SUCCESS: {
            const { data } = payload;
            return { 
                ...state,
                articleData: data,
                isLoadingArticleData: false,
            };
        }
        case GET_ARTICLE_DATA_FAILURE: {
            const { error } = payload;
            return { 
                ...state,
                isLoadingArticleData: false,
                isLoadingArticleDataError: error,
            };
        }
            
        case HANDLE_LIKES_ARTICLE: {
            return { 
                ...state,
                isLoadingLikes: true,
                isLoadingLikesError: null,
            };
        }
        case HANDLE_LIKES_ARTICLE_SUCCESS: {
            const { data } = payload;
            return { 
                ...state,
                articleData: data,
                isLoadingLikes: false,
            };
        }
        case HANDLE_LIKES_ARTICLE_FAILURE: {
            const { error } = payload;
            return { 
                ...state,
                isLoadingLikes: false,
                isLoadingLikesError: error,
            };
        }
            
        case CLEAR_ARTICLE_DATA: {
            return { 
                ...state,
                articleData: null,
            };
        }

        default: {
            return state;
        }
    }
}