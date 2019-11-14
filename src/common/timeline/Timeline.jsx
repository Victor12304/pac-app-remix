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
      <div class="timeline">
        {
          this.props.activities.map((item, index) => {
            if(this.isOdd(index) == 0) {
              return (<div class="container left">
              <div class="content">
                <h2>{item.date}</h2>
                <p>{item.description}</p>
              </div>
            </div>)
            } else {
              return (<div class="container right">
              <div class="content">
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