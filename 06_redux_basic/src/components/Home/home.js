import React, { Component } from 'react';
//sections
import LatestNews from './latestNews';
import OtherNews from './otherNews';

export default class Home extends Component {

  componentDidMount() {
    const {getLatestNews, getOtherNews} = this.props;
    getLatestNews();
    getOtherNews();
  }

  render() {
    const {
        latest, 
        otherNews, 
        isLoadingLatest,
        isLoadingLatestError,
        isLoadingOtherNews,
        isLoadingOtherNewsError,
    } = this.props;

    if(isLoadingLatest || isLoadingOtherNews){
        return <div>Loding</div>;
    }
    
    return (
      <>
        <LatestNews latest={latest} error={isLoadingLatestError} />
        <OtherNews otherNews={otherNews} error={isLoadingOtherNewsError} />
      </>
    )
  }
}