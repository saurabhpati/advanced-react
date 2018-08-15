import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { answer: 42 };

    asyncFn = () => {
        return Promise.resolve(24);
    }

    render() {
        return (
            <h2>Hello React -- {this.state.answer}</h2>
        );
    }

    async componentDidMount() { 
        this.setState({
            answer: await this.asyncFn()
        })
    }
}

ReactDOM.render(<App />, document.getElementById('root'));