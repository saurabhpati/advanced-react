import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from '../ArticleList';

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' }
        },
        actions: {
            lookupAuthor: jest.fn(() => ({}))
        }
    };

    it('should render correctly', () => {
        const tree = renderer.create(
            <ArticleList {...testProps}
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.children.length).toBe(Object.values(testProps.articles).length);
    });
});