import React from 'react';
import './Timeline.css';

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.isOdd = this.isOdd.bind(this);
  }

  isOdd(num) {
    return num % 2;
  }

  render() {
    return (
      <div className="timeline">
        {
          this.props.activities.map((item, index) => {
            if(this.isOdd(index) === 0) {
              return (<div key={index} className="container left">
              <div className="content">
                <h2>{item.date}</h2>
                <p>{item.description}</p>
              </div>
            </div>)
            } else {
              return (<div key={index} className="container right">
              <div className="content">
                <h2>{item.date}</h2>
                <p>{item.description}</p>
              </div>
            </div>)
            }
          })
        }
      </div>
    )
  }
}