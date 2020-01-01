function getState(state) {
    return state.articles;
}

export function getLatest(state) {
    return getState(state).latest;
}

export function getOtherNews(state) {
    return getState(state).otherNews;
}

export function getArticleData(state) {
    return getState(state).articleData;
}

export function isLoadingLatest(state) {
    return getState(state).isLoadingLatest;
}

export function isLoadingLatestError(state) {
    return getState(state).isLoadingLatestError;
}

export function isLoadingOtherNews(state) {
    return getState(state).isLoadingOtherNews;
}

export function isLoadingOtherNewsError(state) {
    return getState(state).isLoadingOtherNewsError;
}

export function isLoadingArticleData(state) {
    return getState(state).isLoadingArticleData;
}

export function isLoadingArticleDataError(state) {
    return getState(state).isLoadingArticleDataError;
}

export function isLoadingLikes(state) {
    return getState(state).isLoadingLikes;
}

export function isLoadingLikesError(state) {
    return getState(state).isLoadingLikesError;
}
