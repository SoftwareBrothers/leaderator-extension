import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormRowInput, FormRowPassword} from '../form/formRow/Row';
import styles from './login.module.css';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className={styles.login_container}>
              <div className={styles.header}>
                  <span className={styles.logo}></span>
                  <span className={styles.title}>Leaderator</span>
              </div>
              <div className={styles.form_container}>
                  <form>
                      <FormRowInput fieldName="email" label="Email" errorMessage="Field is required"
                                    onChange={e => this.props.onChange(e)} error={false}/>
                      <FormRowPassword fieldName="password" label="Password" errorMessage="Field is required"
                                       onChange={e => this.props.onChange(e)} error={false}/>
                      <button type="submit" className={styles.login_button} onClick={e => this.props.onLogin(e)}>Login
                      </button>
                  </form>
              </div>
          </div>
        );
    }
}

export default Login;


Login.propTypes = {
    onChange: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
};
