import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormRow} from '../form/formRow/Row';
import styles from './login.module.css';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className={styles.login_container}>
              <div className={styles.form_container}>
                  <form>
                      <FormRow
                        fieldName="email"
                        label="Email"
                        errorMessage="Field is required"
                        onChange={this.props.onChange}
                        error={false}
                        typeField="text"
                      />
                      <FormRow
                        fieldName="password"
                        label="Password"
                        errorMessage="Field is required"
                        onChange={this.props.onChange}
                        error={false}
                        typeField="password"
                      />
                      <button type="submit" className={styles.login_button} onClick={this.props.onLogin}>Login</button>
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
