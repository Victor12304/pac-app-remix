import React, { Component } from 'react';
import Timeline from './common/timeline/Timeline';
import Card from './common/card/Card';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activities: [
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <span>Pac App</span>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <Card title="Actividades">
              <Timeline activities={this.state.activities} />
            </Card>
          </div>
          <div className="grid-item">
            <Card title="Ayuda">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero ratione quo, sunt dolores eum. Aut laborum nesciunt quas facilis, facere sint quod assumenda vitae recusandae, porro commodi dignissimos esse!
            </Card>
          </div>
          <div className="grid-item">
            <Card title="Educacion">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero ratione quo, sunt dolores eum. Aut laborum nesciunt quas facilis, facere sint quod assumenda vitae recusandae, porro commodi dignissimos esse!
            </Card>
          </div>
          <div className="grid-item">
            <Card title="Recursos">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero ratione quo, sunt dolores eum. Aut laborum nesciunt quas facilis, facere sint quod assumenda vitae recusandae, porro commodi dignissimos esse!
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
