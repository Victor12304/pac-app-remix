import React, { Component } from 'react';
import Timeline from './common/timeline/Timeline';
import Card from './common/card/Card';
import Modal from './common/modal/Modal';
import LoginForm from './common/form/LoginForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      activities: [
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" }
      ]
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
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
              <button type="button" onClick={this.showModal}>
                open
            </button>
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <LoginForm />
              </Modal>
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
