import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      domain: props.domain,
    };
  }

  render() {
    return (
      <div>
        <form className={styles.myForm}>
          <label htmlFor="customer_name">Name </label>
          <input type="text" name="customer_name" id="customer_name" onChange={() => {}} />
          <label htmlFor="email_address">Email </label>
          <input type="email" name="email_address" id="email_address" onChange={() => {}} />
          <label htmlFor="comments">Comments</label>
          <textarea placeholder="test" onChange={() => {}}>{this.state.domain}</textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  domain: PropTypes.string(),
};

Form.defaultProps = {
  domain: '',
};
