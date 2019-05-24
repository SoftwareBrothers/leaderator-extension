import React, { Component } from 'react';
import Form from '../form/Form';
import styles from './leaderator.module.css';

class Leaderator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <Form />
      </div>
    );
  }
}

export default Leaderator;
