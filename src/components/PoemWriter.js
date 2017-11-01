import React from 'react';

const countWords = (line) => {
  if(line) {
    return line.split(' ').filter(word => word).length
  }
}

const isPoemValid = (poem) => {
  const poemLines = poem.split("\n").filter(line => line)
  const hasThreeLines = poemLines.length === 3
  const hasWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return hasThreeLines && hasWords
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      isHidden: false,
    };
  }

  handleChange = (event) => {
    const value = event.target.value
    this.setState({
      value: value,
      isHidden: isPoemValid(value)
    })
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange}
        />
        {!this.state.isHidden ? <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div> : null}
      </div>
    );
  }
}

export default PoemWriter;
