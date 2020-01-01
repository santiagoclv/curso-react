

import { connect } from 'react-redux';
import Home from './home.js';
import { latestNews, otherNews } from '../../store/modules/articles/actions';
import { getLatest,
         isLoadingLatest, 
         isLoadingLatestError,
         getOtherNews,
         isLoadingOtherNews,
         isLoadingOtherNewsError } from '../../store/modules/articles/selectors';

function mapStateToProps(state) {
  return {
    latest: getLatest(state),
    otherNews: getOtherNews(state),
    isLoadingLatest: isLoadingLatest(state),
    isLoadingLatestError: isLoadingLatestError(state),
    isLoadingOtherNews: isLoadingOtherNews(state),
    isLoadingOtherNewsError: isLoadingOtherNewsError(state),
  }
}

const mapDispatchToProps = (dispatch) => ({
  getOtherNews(id){
      dispatch(otherNews(id));
  },
  getLatestNews(){
      dispatch(latestNews());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);