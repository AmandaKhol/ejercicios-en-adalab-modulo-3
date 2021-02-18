import React from 'react';

// const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
// const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    if (this.props.width === undefined) {
      this.props.width = '400';
    }
    if (this.props.height === undefined) {
      this.props.height = '200';
    }
    console.log(this.props);

    //const randomCat = getRandomInteger(NUMBER_OF_CATS);
    let width;
    let height;
    return (
      <a href="https://www.fillmurray.com">
        <img src={`https://www.fillmurray.com/${this.props.width}/${this.props.height}`} alt="Random Bill" />
      </a>
    );
  }
}

export default RandomCat;
