import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h2>{this.props.title}</h2>
        </div>
        <div className="card-body">
          {this.props.children}
        </div>
      </div>
    )
  }
}