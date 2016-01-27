import React from 'react';
import ArticlePage from '@economist/component-win-articlepage';
import pageTracker from '@economist/react-i13n-omniture/pagetracker';
import Impart from '@economist/component-react-async-container';
import cache from '@economist/component-react-async-container/cache';
import fetch from './fetch';
import loadingHandler from './loading-handler';
import failureHandler from './failure-handler';
import updateMetatags from './meta-data';

function fetchArticle({ id }) {
  return fetch(`/api/article/${id}`).then((response) => (response.json()));
}

function cacheArticle({ id }) {
  return cache(`/api/article/${id}`);
}

class doTheMetaTags extends React.Component {
  componentWillUpdate(nextProps) {
    const { metaTags } = nextProps;
    console.log(metaTagsmetaTags);
  }

  proptypes = {
    metaTags: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  };

  render() {
    return (
      <ArticlePage {...this.props} />
    );
  }
}

const TrackedArticlePage = pageTracker(doTheMetaTags, {
  template: 'article',
  topic(component) {
    return component.props.sectionName;
  },
  publishDate(component) {
    return new Date(Date.parse(component.props.publishDate));
  },
});
export default function ArticlePageWithData(props) {
  return (
    <Impart.RootContainer
      {...props}
      Component={TrackedArticlePage}
      cache={cacheArticle}
      route={fetchArticle}
      renderLoading={loadingHandler}
      renderFailure={failureHandler}
    />
  );
}
