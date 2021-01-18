import React, { Component } from 'react';


type CounterState = {
    // Только на чтение, без перезаписи, поддержка имутабельности
    // readonly 
    count: number
}
type CounterProps = {
    readonly title?: string,
}

// Дженерик типы типизация пропсов и стейта
class Counter extends Component<CounterProps, CounterState> {
    // Тип пропсов в конструкторе тоже нужно определить, пропсы типизируются 2 раза
    // constructor(props: CounterProps) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    state = {
        count: 0
    }

    // Типизация методов жизненного цикла
    // static defaultProps: CounterProps = {
    //     title: "Default counter",
    // }

    // static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
    //     return false ? { count: 2 } : null;
    // }

    // componentDidMount(): void {

    // }

    // shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
    //     return true
    // }




    // Типизация ивента, дженерик HTML и тип элемента, можем вешать обработчик только на теги кнопки.
    // Для этого ставиться пакет тайп реакт дом из коробки
    handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        console.log(`${e.clientX} ${e.clientY}`);
        this.setState(({ count }) => ({
            count: ++count
        }))


        // Readonly Довольно бесполезная опция на мой взгляд.
        // this.state.count = ++count
    }

    render() {
        // this.props.title = '';

        return (
            <div>
                <h1>{this.props.title}{this.state.count}</h1>
                <button onClick={this.handleClick}>+1</button>
            </div>
        );
    }
}

export default Counter;