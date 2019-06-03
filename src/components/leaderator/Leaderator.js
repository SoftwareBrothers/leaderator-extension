import React, {Component} from 'react';
import Form from '../form/Form';
import Login from '../login/Login';
import styles from './leaderator.module.css';
import * as httpService from '../../service';

class Leaderator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      host: '',
      token: '',
      email: '',
      password: '',
      // TODO right now host is from chrome extension not from window
      url: window.location.host,
      fieldOptions: {
        titles: ['CO', 'CTO', 'PM'],
        cities: ['London', 'Warsaw', 'New York'],
        countries: ['Poland', 'Japan', 'USA'],
      },
    };
  }

  componentDidMount() {

    if (localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null) {
      const currentState = {...this.state};
      console.log('token did mo', localStorage.getItem('token'));
      console.log('ulr', this.state.url);
      currentState.token = localStorage.getItem('token');

      httpService.verifyDomain(window.location.host)
        .then(repsonse => {

        }).catch(error => {

      });
      httpService.getFields()
        .then((res) => {
          currentState.fieldOptions = res.data;
          this.setState({...currentState});
        });
    }
  };

  onAddProspect = (e) => {
    e.preventDefault();
    console.log('add');
    const data = {
      ...this.state
    };

    httpService.addProspect(data)
      .then(response => {

      })
      .catch(error => {

      });
  };

  onFindEmail = () => {
    const data = {
      domain: this.state.domain,
      firstName: this.state.firstName,
      secondName: this.state.secondName,
      lastName: this.state.lastName,
    };

    httpService.findEmailByFields(data)
      .then(response => {

      })
      .catch(error => {

      })
  };

  onCheckEmail = () => {
    httpService.checkEmail(this.state.email)
      .then((response) => {
        if (response.status === 200) {
          console.log('response email check');
        }
      })
      .catch(error => {

      });
  };

  onChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onLogin = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    httpService.login(data)
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            token: res.data.token,
          });
          localStorage.setItem('token', res.data.token);
        }
      }).catch(error => {

    });

    httpService.getFields()
      .then((res) => {
        const currentState = {...this.state};
        currentState.host = window.location.hostname;
        // TODO assingment should be from response
        currentState.fieldOptions = this.state.fieldOptions;
        this.setState({...currentState});
      });
  };

  onLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    this.setState({
      token: '',
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.logo}></span>
          <span className={styles.title}>Leaderator</span>
          {this.state.token && <span className={styles.logout} onClick={this.onLogout}>
                      <i className="fas fa-sign-out-alt fa-2x"></i>
                  </span>}
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
