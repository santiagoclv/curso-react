import React, { Component } from 'react';

// components
import LikesCounter from './likes';

export default class Article extends Component {

    componentDidMount(){
        const id = this.props?.match?.params?.id ?? null;
        const { getArticleData } = this.props;
        getArticleData(id);
    }

    componentWillUnmount(){
        const { clearArticleData } = this.props;
        clearArticleData();
    }

    addLike = (action) => {
        const id = this.props?.match?.params?.id ?? null;
        const {articleData} = this.props;
        const { handleArticleLikes } = this.props;

        const likes = articleData.likes[0];
        const dislikes = articleData.likes[1];

        const newLikes = action === 'ADD' ? [likes+1,dislikes] : [likes,dislikes+1];
         
        /// go to dispatch
        handleArticleLikes(newLikes,id);
    }

    render() {
        const {articleData, isLoadingArticleData } = this.props;
        if(isLoadingArticleData || !articleData ){
            return <></>;
        }
        return (
            <div className="news_container">
                <div className="tags">
                    <span>
                        <i className="fa fa-eye"></i>
                        {articleData.views}
                    </span>
                    <span>
                        <i className="fa fa-thumbs-up"></i>
                        {articleData.likes[0]}
                    </span>
                    <span>
                        <i className="fa fa-thumbs-down"></i>
                        {articleData.likes[1]}
                    </span>
                </div>
                <div className="top">
                    <h2>{articleData.title}</h2>
                    <span>Article by: <strong>{articleData.author}</strong></span>
                </div>
                <img 
                    alt={articleData.title} 
                    src={`/images/articles/${articleData.img}`}
                />
                <div className="body_news">
                    {articleData.body}
                </div>
                <div>
                    <LikesCounter
                        addLike={ args => this.addLike(args)}
                        likes={articleData.likes[0]}
                        dislikes={articleData.likes[1]}
                    />
                </div>
            </div>
        )
    }
}