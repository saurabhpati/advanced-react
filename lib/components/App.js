import React from 'react';
import axios from 'axios';
import DataApi from '../DataApi';
import ArticleList from './ArticleList';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            articles: {},
            authors: {}
        };
    }

    async componentDidMount() {
        const response = await axios.get('/data');
        const api = new DataApi(response.data);
        this.setState(() => ({
            articles: api.getArticles(),
            authors: api.getAuthors()
        }));
    }

    articleActions = {
        lookupAuthor: (authorId) => this.state.authors[authorId]
    }

    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                actions={this.articleActions}
            />
        );
    }
}

export default App;