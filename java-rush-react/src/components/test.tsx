import React , { Component } from 'react'
import reactLogo from '../assets/react.svg'

interface Props {
    name: string
}
interface State {
    counter: number
}

export default class Test extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
        counter: 10,
    };
  }

  decrement() {
     this.setState({ counter: this.state.counter - 1 });
  }

  render(): React.ReactNode {return (
    <div className='avatar'>
       <img src={reactLogo} className="logo react" alt="React logo" />
       <p>Имя: {this.props.name}</p>
       <p>{this.state.counter}</p>

        <button onClick={() => this.decrement()}>
          ДизЛайк
        </button>
    </div>
  )
 }
}

