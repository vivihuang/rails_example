import React, { Component, PropTypes } from 'react'

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
    const { defaultValue } = this.props
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.handleSubmit(input.value)
        input.value = ''
      }}
      >
        <input type='text'
          defaultValue={defaultValue}
          ref={(node) => { input = node }}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

InputBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValue: PropTypes.string
}

export default InputBox
