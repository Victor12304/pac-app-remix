import React, { Component } from 'react';
import Timeline from './common/timeline/Timeline';
import Card from './common/card/Card';
import Modal from './common/modal/Modal';

import './App.css';
import Form from './common/form/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      show: false,
      activities: [
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" },
        { date: "DATE", description: "DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION" }
      ],
      fields: [
        {type: "email", name: "email", id: "email", placeholder: "email", handleChange: this.handleChange},
        {type: "password", name: "password", id: "password", placeholder: "password", handleChange: this.handleChange}
      ]
    }

    this.handleChange = this.handleChange.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
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
                <Form fields={this.state.fields} btnLabel="Submit"/>
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
