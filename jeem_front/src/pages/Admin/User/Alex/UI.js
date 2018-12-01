import React from 'react'
import { Link } from 'jeem/router'
import {
  Form, Icon, InputNumber, Button, Checkbox, Layout,
} from 'antd'

const LAP = (props) => {
  const {
    name, age, onAddOne, InputOnChange,
  } = props;
  return <div>I am {name},and I am { age } years old.
  <InputNumber onChange= { InputOnChange } value={age}/>
  <Button onClick = { onAddOne }>Add</Button>
  </div>
};

export default LAP;
