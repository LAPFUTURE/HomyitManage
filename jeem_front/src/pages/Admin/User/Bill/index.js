import React from 'react'
import {
  Form, Icon, InputNumber, Button, Checkbox, Layout,
} from 'antd'

class Title extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { color: 'red', inputValue: 1 };
    this.buttOnClick = this.buttOnClick.bind(this);
    this.inputNumberOnchange = this.inputNumberOnchange.bind(this);
  }

  buttOnClick() {
    this.setState({ inputValue: this.state.inputValue + 1, color: this.state.color === 'red' ? 'green' : 'red' });
  }

  // eslint-disable-next-line class-methods-use-this
  inputNumberOnchange() {
    console.log('input\'s value is changed!');
  }

  render() {
    return <div>
        <InputNumber style={{ borderColor: this.state.color }} value ={ this.state.inputValue} onChange={ this.inputNumberOnchange }/>
        <Button onClick={ this.buttOnClick }>Click</Button>
    </div>;
  }
}
export default Title
