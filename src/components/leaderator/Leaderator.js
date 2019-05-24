import React, { Component } from 'react';
import Form from '../form/Form';
import styles from './leaderator.module.css';

class Leaderator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: '',
    };
    this.onAddProspect = this.onAddProspect.bind(this);
    this.onFindEmail = this.onFindEmail.bind(this);
    this.onCheckEmail = this.onCheckEmail.bind(this);
  }

  componentDidMount() {
    this.setState({
      host: window.location.hostname,
    });
  }

  onAddProspect() {
    console.log('add prospect');
  }

  onFindEmail() {
    console.log('find email');
  }

  onCheckEmail() {
    console.log('check email');
  }

  render() {
    return (
      <div className={styles.container}>
        <Form
          {...this.state}
          onFindEmail={this.onFindEmail}
          onCheckEmail={this.onCheckEmail}
          onAddProspect={this.onAddProspect}
        />
      </div>
    );
  }
}

export default Leaderator;
