import React, { Component } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

class ToggleButtonGroup extends Component {
  state = {
    checked: '1',
  }

  handleRadioChange = (value) => {
    this.setState({ checked: value })
    this.props.onGenreChange(value)
  }

  radios = [
    { name: 'All', value: '1' },
    { name: 'Fantasy', value: '2' },
    { name: 'Romance', value: '3' },
    { name: 'History', value: '4' },
    { name: 'Sci-fi', value: '5' },
    { name: 'Horror', value: '6' },
  ]

  render() {
    return (
      <ButtonGroup>
        {this.radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={'light'}
            className="light-toggle-btn"
            name="radio"
            value={radio.value}
            onChange={() => this.handleRadioChange(radio.value)}
            checked={this.state.checked === radio.value}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    )
  }
}

export default ToggleButtonGroup
