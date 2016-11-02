import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <label className="switch">
        <input type="checkbox" />
        <div className="slider round"></div>
      </label>
    );
  }
}
