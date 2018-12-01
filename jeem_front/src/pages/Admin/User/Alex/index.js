import React from 'react'
import { connect } from 'jeem'
import LAP from './UI'

const mapStateToProps = state => ({
  name: state.lap.user.name,
  age: state.lap.user.age,
})

const mapDispatchToProps = dispatch => ({
  onAddOne: ({ name, age }) => dispatch.lap.addOne({ name, age }),
  InputOnChange: () => console.log('Value is changed'),
});


export default connect(mapStateToProps, mapDispatchToProps)(LAP)
