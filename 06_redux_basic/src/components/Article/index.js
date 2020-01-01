import { connect } from 'react-redux';
import Article from './article.js';
import { getArticleData, handleArticleLikes, clearArticleData} from '../../store/modules/articles/actions';
import { getArticleData as getArticleDataState , 
         isLoadingArticleData, isLoadingArticleDataError,
         isLoadingLikes, isLoadingLikesError } from '../../store/modules/articles/selectors';

function mapStateToProps(state){
    return {
        articleData: getArticleDataState(state), 
        isLoadingArticleData: isLoadingArticleData(state),
        isLoadingArticleDataError: isLoadingArticleDataError(state),
        isLoadingLikes: isLoadingLikes(state),
        isLoadingLikesError: isLoadingLikesError(state),
    }
};

const mapDispatchToProps = (dispatch) => ({
    getArticleData(id){
        dispatch(getArticleData(id));
    },
    handleArticleLikes(newLikes,id){
        dispatch(handleArticleLikes(newLikes,id));
    },
    clearArticleData(){
        dispatch(clearArticleData());
    },
});



export default connect(mapStateToProps, mapDispatchToProps)(Article);