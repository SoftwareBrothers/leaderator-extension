import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    FormRowInput, FormRowCheckbox, FormRowDropdown, FormRowRadio,
} from './formRow/Row';

import styles from './form.module.css';

const errorMessages = {
    required: 'Field is required',
};

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className={styles.form_container}>
              <form className={styles.form}>
                  <FormRowCheckbox
                    label="VIP"
                    fieldName="vip"
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['vip']}

                  />
                  <FormRowInput
                    label="First name"
                    fieldName="firstName"
                    errorMessage={errorMessages.required}
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['firstName']}
                  />
                  <FormRowInput
                    label="Second name"
                    fieldName="secondName"
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['secondName']}
                  />
                  <FormRowInput
                    label="Last name"
                    fieldName="lastName"
                    errorMessage={errorMessages.required}
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['lastName']}
                  />
                  <FormRowInput
                    label="Company"
                    fieldName="company"
                    errorMessage={errorMessages.required}
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['company']}
                  />
                  <FormRowInput
                    label="URL"
                    fieldName="url"
                    errorMessage={errorMessages.required}
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['url']}
                  />
                  <FormRowInput
                    label="E-mail"
                    fieldName="email"
                    errorMessage={errorMessages.required}
                    onChange={(e) => this.props.onChange(e)}
                    verifyButton
                    onFindEmail={this.props.onFindEmail}
                    onCheckEmail={this.props.onCheckEmail}
                    value={this.props['email']}
                  />
                  <FormRowRadio
                    label="Gender"
                    fieldName="gender"
                    optionsLabels={['Male', 'Female']}
                    options={['male', 'female']}
                    errorMessage={errorMessages.required}
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['gender']}
                  />
                  <FormRowDropdown
                    label="Title"
                    fieldName="title"
                    options={this.props.fieldOptions.titles}
                    errorMessage={errorMessages.required}
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['title']}
                  />
                  <FormRowDropdown
                    label="Country"
                    fieldName="country"
                    options={this.props.fieldOptions.countries}
                    errorMessage={errorMessages.required}
                    onChange={(e) => this.props.onChange(e)}
                  />
                  <FormRowDropdown
                    label="City"
                    fieldName="city"
                    options={this.props.fieldOptions.cities}
                    errorMessage={errorMessages.required}
                    onChange={(e) => this.props.onChange(e)}
                  />
                  <FormRowInput
                    label="Address"
                    fieldName="address"
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['address']}
                  />
                  <FormRowInput
                    label="Found on"
                    fieldName="foundOn"
                    errorMessage={errorMessages.required}
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['foundOn']}
                  />
                  <FormRowInput
                    label="Note"
                    fieldName="note"
                    onChange={(e) => this.props.onChange(e)}
                    value={this.props['note']}
                  />
                  <div className={styles.form_footer}>
                      <button className={styles.submit} type="submit">Add prospect</button>
                      <button className={styles.reset}>Clear form</button>
                  </div>
              </form>
          </div>
        );
    }
}

export default Form;

Form.propTypes = {
    onFindMail: PropTypes.func,
    onCheckMail: PropTypes.func,
    fieldOptions: PropTypes.arrayOf({}),
};

Form.defaultProps = {
    fieldOptions: {},
};
