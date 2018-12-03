import React from 'react'
import { Link } from 'jeem/router'
// eslint-disable-next-line import/no-unresolved
import {
  Form, Icon, InputNumber, Button, Checkbox, Layout,
} from 'antd'
import styless from './Alex.less'
import Bill from '../Bill/index'

const LAP = (props) => {
  const {
    name, age, onAddOne, InputOnChange,
  } = props;
  return (<div>I am {name},and I am { age } years old.
          <InputNumber onChange= { InputOnChange } value={age}/>
          <Button onClick = { onAddOne }>Add</Button>
          <div className={ styless.con } style={{ border: '1px red solid' }}>asdf</div>
          <Bill test="kj" lap="123" />
        </div>)
};
export default LAP;
