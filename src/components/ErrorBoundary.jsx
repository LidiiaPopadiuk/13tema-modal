import { Component } from "react";

export class ErrorBoundary extends Component {
    state = {
        hasError: false,
    }

    componentDidCatch(error, info) {
        console.log('Сталася помилка', error);
        console.log('Деталі', info);
        this.setState({ hasError: true, })
    }

    render() {
        if(this.state.hasError) {
            return <p>Somethimg went wrong</p>
        }
        return this.props.children
    }
}