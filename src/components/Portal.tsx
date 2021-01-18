import React, { Component } from 'react';
import ReactDOM from 'react-dom';


type PortalProps = {
    children: React.ReactNode,
}

class Portal extends Component<PortalProps> {

    private el: HTMLDivElement = document.createElement('div');

    public componentDidMount(): void {
        document.body.appendChild(this.el)
    }

    public componentWillUnmount(): void {
        document.body.removeChild(this.el)
    }

    public render(): React.ReactElement<PortalProps> {
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}

class MyComponent extends Component<{}, { count: number }> {

    state = {
        count: 0,
    }

    handleClick = () => {
        this.setState(({ count }) => ({
            count: ++count,
        }));
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <h1>Clicks: {this.state.count}</h1>
                <Portal>
                    <h2>TEST PORTAL</h2>
                    <button>Click</button>
                </Portal>
            </div>
        );
    }
}

interface IContext {
    isAuth: boolean,
    toggleAuth: () => void
}

const AuthContext = React.createContext<IContext>({
    isAuth: true,
    toggleAuth: () => { },
})


class Logic extends Component {

    static contextType = AuthContext;

    context!: React.ContextType<typeof AuthContext>

    render() {
        const { isAuth, toggleAuth } = this.context

        return (
            <button onClick={toggleAuth} >
                {!isAuth ? 'Login' : 'Logout'}
            </button>
        );
    }
}

const Profile: React.FC = (): React.ReactElement => (
    <AuthContext.Consumer>
        {
            ({ isAuth }: IContext) => (
                <h1>{!isAuth ? 'Please log in' : 'You are logged in'}</h1>
            )
        }
    </AuthContext.Consumer>
)


class Context extends Component<{}, { isAuth: boolean }> {

    readonly state = {
        isAuth: false,
    };

    toggleAuth = () => {
        this.setState(({ isAuth }) => ({
            isAuth: !isAuth
        }));
    };
    render() {
        const { isAuth } = this.state;
        const context: IContext = { isAuth, toggleAuth: this.toggleAuth }

        return (
            <AuthContext.Provider value={context}>
                <Logic />
                <Profile />
            </AuthContext.Provider>
        );
    }
}



export default Context;