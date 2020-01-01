const NAMESPACE = 'articles/';

export const GET_LATEST = `${NAMESPACE}get_latest`;
export const GET_LATEST_SUCCESS = `${NAMESPACE}get_latest_success`;
export const GET_LATEST_FAILURE = `${NAMESPACE}get_latest_failure`;

export function latestNews() {
    return {
        type: GET_LATEST,
    };
}
export function getLatestSuccess(data) {
    return {
        type: GET_LATEST_SUCCESS,
        payload: {
            data
        },
    };
}
export function getLatestFailure(error) {
    return {
        type: GET_LATEST_FAILURE,
        payload: {
            error,
        },
    };
}


export const GET_OTHER = `${NAMESPACE}get_other`;
export const GET_OTHER_SUCCESS = `${NAMESPACE}get_other_success`;
export const GET_OTHER_FAILURE = `${NAMESPACE}get_other_failure`;

export function otherNews() {
    return {
        type: GET_OTHER,
    };

}
export function getOtherSuccess(data) {
    return {
        type: GET_OTHER_SUCCESS,
        payload: {
            data
        },
    };
}
export function getOtherFailure(error) {
    return {
        type: GET_OTHER_FAILURE,
        payload: {
            error,
        },
    };
}

export const GET_ARTICLE_DATA = `${NAMESPACE}get_article_data`;
export const GET_ARTICLE_DATA_SUCCESS = `${NAMESPACE}get_article_data_success`;
export const GET_ARTICLE_DATA_FAILURE = `${NAMESPACE}get_article_data_failure`;

export function getArticleData(id) {
    return {
        type: GET_ARTICLE_DATA,
        payload: {
            id
        },
    };

}
export function getArticleDataSuccess(data) {
    return {
        type: GET_ARTICLE_DATA_SUCCESS,
        payload: {
            data
        },
    };
}
export function getArticleDataFailure(error) {
    return {
        type: GET_ARTICLE_DATA_FAILURE,
        payload: {
            error,
        },
    };
}

export const HANDLE_LIKES_ARTICLE = `${NAMESPACE}handle_likes_article`;
export const HANDLE_LIKES_ARTICLE_SUCCESS = `${NAMESPACE}handle_likes_article_success`;
export const HANDLE_LIKES_ARTICLE_FAILURE = `${NAMESPACE}handle_likes_article_failure`;

export function handleArticleLikes(newLikes, id) {
    return {
        type: HANDLE_LIKES_ARTICLE,
        payload: {
            newLikes,
            id,
        },
    };
}
export function handleArticleLikesSuccess(data) {
    return {
        type: HANDLE_LIKES_ARTICLE_SUCCESS,
        payload: {
            data
        },
    };
}
export function handleArticleLikesFailure(error) {
    return {
        type: HANDLE_LIKES_ARTICLE_FAILURE,
        payload: {
            error,
        },
    };
}

export const CLEAR_ARTICLE_DATA = `${NAMESPACE}clear_Article_data`;

export function clearArticleData() {
    return {
        type: CLEAR_ARTICLE_DATA,
    };
}