import DataApi from '../DataApi';
import { data } from '../testData.json';

// Arrange
const api = new DataApi(data);

describe('DataApi', () => {

    it('should expose articles as an object', () => {
        
        // Act
        const articles = api.getArticles();
        const articleId = data.articles[0].id;
        const title = data.articles[0].title;

        // Assert
        expect(articles).toHaveProperty(articleId);
        expect(articles[articleId].title).toBe(title);
    });

    it('should expose authors as an object', () => {

        // Act
        const authors = api.getAuthors();        
        const authorId = data.authors[0].id;
        const name = data.authors[0].firstName;

        // Assert
        expect(authors).toHaveProperty(authorId);
        expect(authors[authorId].firstName).toBe(name);
    });
});