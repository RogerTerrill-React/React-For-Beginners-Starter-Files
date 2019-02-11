import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  myInput = React.createRef();

  // goToStore is a property, not a method
  goToStore = event => {
    // goToStore(event){ is the old way that needs binding
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from the input
    const storeName = this.myInput.current.value;
    console.log(this);
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store -></button>
      </form>
    );
  }
}

export default StorePicker;
