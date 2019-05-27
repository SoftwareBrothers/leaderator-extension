import React, { Component } from 'react';
import axios from 'axios';
import Form from '../form/Form';
import Login from '../login/Login';
import styles from './leaderator.module.css';

class Leaderator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: '',
      token: '',
      email: '',
      password: '',
      fieldOptions: {
        titles: [],
        cities: [],
        countries: [],
      },

    };
    this.onAddProspect = this.onAddProspect.bind(this);
    this.onFindEmail = this.onFindEmail.bind(this);
    this.onCheckEmail = this.onCheckEmail.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    const currentState = { ...this.state };
    currentState.host = window.location.hostname;

    if (localStorage.getItem('token') !== '') {
      currentState.token = localStorage.getItem('token');
    }

    axios.get('https://private-63e5ba-leaderator2.apiary-mock.com/fields')
      .then((res) => {
        currentState.fieldOptions = res.data;
      });

    this.setState({ ...currentState });
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

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onLogin(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    axios.post('http://private-63e5ba-leaderator2.apiary-mock.com/auth/login', data, config)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            token: res.data.token,
          });
          localStorage.setItem('token', res.data.token);
        }
      });
  }

  onLogout(e) {
    e.preventDefault();
    console.log('logout');
    localStorage.removeItem('token');
    this.setState({
      token: '',
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.logo}></span>
          <span className={styles.title}>Leaderator</span>
        </div>
        {
          this.state.token ? (
            <Form
              {...this.state}
              onFindEmail={this.onFindEmail}
              onCheckEmail={this.onCheckEmail}
              onAddProspect={this.onAddProspect}
              onChange={this.onChange}
              onLogout={this.onLogout}
            />
          ) : (
            <Login
              onChange={this.onChange}
              onLogin={this.onLogin}
            />
          )
        }
      </div>
    );
  }
}

export default Leaderator;
