import React from 'react';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.onKeyUpListener = this.onKeyUpListener.bind(this);
  }

  render() {
    const cebolla = 'cebolla';
    const onKeyUpListener = () => {
      this.isHating = true;
      this.forceUpdate();
    };
    return (
      <textarea
        className="noHateOnion"
        onKeyUp={onKeyUpListener}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Escribe lo que quieras..."
      ></textarea>
    );
  }
}

export default OnionHater;
