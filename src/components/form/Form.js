import React, { Component } from 'react';
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
      <div>
        <form className={styles.myForm}>
          <FormRowCheckbox label="VIP" fieldName="vip" onChange={() => {}} />
          <FormRowInput label="First name" fieldName="firstName" errorMessage={errorMessages.required} onChange={() => {}} />
          <FormRowInput label="Second name" fieldName="secondName" onChange={() => {}} />
          <FormRowInput label="Last name" fieldName="lastName" errorMessage={errorMessages.required} onChange={() => {}} />
          <FormRowInput label="Company" fieldName="company" errorMessage={errorMessages.required} onChange={() => {}} />
          <FormRowInput label="URL" fieldName="url" errorMessage={errorMessages.required} onChange={() => {}} />
          <FormRowInput label="E-mail" fieldName="email" errorMessage={errorMessages.required} onChange={() => {}} />
          <FormRowRadio label="Gender" fieldName="gender" optionsLabels={['Male', 'Female']} options={['male', 'female']} errorMessage={errorMessages.required} onChange={() => {}} />
          <FormRowDropdown label="Title" fieldName="title" options={this.props.fieldOptions.titles} errorMessage={errorMessages.required} onChange={() => {}} />
          <FormRowDropdown label="Country" fieldName="country" options={this.props.fieldOptions.countries} errorMessage={errorMessages.required} onChange={() => {}} />
          <FormRowDropdown label="City" fieldName="city" options={this.props.fieldOptions.cities} errorMessage={errorMessages.required} onChange={() => {}} />
          <FormRowInput label="Address" fieldName="address" onChange={() => {}} />
          <FormRowInput label="Found on" fieldName="foundOn" errorMessage={errorMessages.required} onChange={() => {}} />
          <FormRowInput label="Note" fieldName="note" onChange={() => {}} />
          <div className={styles.form_footer}>
            <button className={styles.submit} type="submit">Add prospect</button>
            <button className={styles.reset}>Clear form</button>
          </div>
          <button onClick={(e) => this.props.onLogout(e)}>logOut</button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  onLogout: PropTypes.func.isRequired,
  fieldOptions: PropTypes.arrayOf({}),
};

Form.defaultProps = {
  fieldOptions: {},
};
