import React, { Component, PropTypes } from 'react'
import style from './style.scss'

class InputBox extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(text) {
    const { onSubmit } = this.props
    onSubmit(text)
  }

  render() {
    let input
    const { defaultValue, onBlur } = this.props
    return (
      <form className={style.form}
        onSubmit={(e) => {
          e.preventDefault()
          this.handleSubmit(input.value)
          input.value = ''
        }}
      >
        <input className={`${style.inputBox} ${defaultValue ? style.edit : style.new}`}
          type='text'
          defaultValue={defaultValue}
          placeholder='New Todo'
          ref={(node) => { input = node }}
          onBlur={onBlur} autoFocus={!!defaultValue}
        />
        <button type='submit' hidden />
      </form>
    )
  }
}

InputBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  onBlur: PropTypes.func
}

export default InputBox
