import React from 'react';
import PropTypes from 'prop-types';
import styles from './formRow.module.css';

export const FormRowInput = props => (
  <div className={styles.form_row}>
    <label htmlFor={props.fieldName}>{props.label}</label>
    <input className={styles.custom_input} type="text" name={props.fieldName} id={props.fieldName} onChange={e => props.onChange(e)}/>
    {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);

export const FormRowPassword = props => (
  <div className={styles.form_row}>
    <label htmlFor={props.fieldName}>{props.label}</label>
    <input className={styles.custom_input} type="password" name={props.fieldName} id={props.fieldName} onChange={e => props.onChange(e)}/>
    {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);

export const FormRowDropdown = props => (
  <div className={styles.form_row}>
    <label htmlFor={props.fieldName}>{props.label}</label>
    <select
      name={props.fieldName}
      value={props.options}
      onChange={props.onChange}
      placeholder="Select option"
      className={styles.custom_select}
    >
      {props.options.map(option => <option value={option}>{option}</option>)}
    </select>
    {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);

export const FormRowCheckbox = props => (
  <div className={styles.form_row_checkbox}>
    <label htmlFor={props.fieldName}>{props.label}</label>
    <input className={styles.custom_checkbox} type="checkbox" name={props.fieldName} id={props.fieldName} onChange={e => props.onChange(e)}/>
    {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);

export const FormRowRadio = props => (
  <div className={styles.form_row_radio}>
    <label htmlFor={props.fieldName}>{props.label}</label>
    <div className={styles.radioOptions}>
      {props.options.map((item, index) => (
        <div>
          <span>{props.optionsLabels[index]}</span>
          <input className={styles.custom_radio} type="radio" value={item} name={props.fieldName} onChange={e => props.onChange(e)}/>
        </div>
      ))}
    </div>
    {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);


FormRowInput.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

FormRowPassword.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

FormRowCheckbox.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

FormRowRadio.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionsLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.bool.isRequired,
};

FormRowDropdown.propTypes = {
  fieldName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.bool.isRequired,
};
