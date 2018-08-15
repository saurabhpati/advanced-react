export default class DataApi {

    constructor(data) {
        this.data = data;
    }

    getArticles() {
        return this.convertToObject(this.data.articles);
    }

    getAuthors() {
        return this.convertToObject(this.data.authors);
    }

    convertToObject(input) {
        return input.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }
}