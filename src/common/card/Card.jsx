import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card">
        <div class="card-header">
          <h2>{this.props.title}</h2>
        </div>
        <div class="card-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}