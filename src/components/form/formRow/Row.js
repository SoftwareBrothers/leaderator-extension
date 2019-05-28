import React from 'react';
import PropTypes from 'prop-types';
import styles from './formRow.module.css';

export const FormRowInput = props => (
  <div className={styles.form_row}>
      <div className={styles.label}>
          <label htmlFor={props.fieldName}>{props.label}</label>
          {!props.value && props.verifyButton && <span className={styles.find_email} onClick={props.onFindEmail}>FIND</span>}
          {props.value && props.verifyButton && <span className={styles.check_email} onClick={props.onCheckEmail}>CHECK</span>}
      </div>
      <input
        className={styles.custom_input}
        type="text"
        name={props.fieldName}
        id={props.fieldName}
        onChange={e => props.onChange(e)}
        value={props.value}
      />
      {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);

export const FormRowPassword = props => (
  <div className={styles.form_row}>
      <label htmlFor={props.fieldName}>{props.label}</label>
      <input
        className={styles.custom_input}
        type="password"
        name={props.fieldName}
        id={props.fieldName}
        onChange={e => props.onChange(e)}
      />
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
          {props.options.map((option, index) => <option key={index + 1} value={option}>{option}</option>)}
      </select>
      {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);

export const FormRowCheckbox = props => (
  <div className={styles.form_row_checkbox}>
      <label htmlFor={props.fieldName}>{props.label}</label>
      <input
        className={styles.custom_checkbox}
        type="checkbox"
        name={props.fieldName}
        id={props.fieldName}
        onChange={e => props.onChange(e)}
      />
      {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);

export const FormRowRadio = props => (
  <div className={styles.form_row_radio}>
      <label htmlFor={props.fieldName}>{props.label}</label>
      <div className={styles.radioOptions}>
          {props.options.map((item, index) => (
            <div key={index + 1}>
                <span>{props.optionsLabels[index]}</span>
                <input className={styles.custom_radio} type="radio" value={item} name={props.fieldName}
                       onChange={e => props.onChange(e)}/>
            </div>
          ))}
      </div>
      {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);


FormRowInput.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onFindEmail: PropTypes.func,
    onCheckEmail: PropTypes.func,
    error: PropTypes.bool,
    verifyButton: PropTypes.bool,
};

FormRowInput.defaultProps = {
    verifyButton: false,
    error: false,
    errorMessage: '',
};

FormRowPassword.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
};

FormRowPassword.defaultProps = {
  errorMessage: '',
  error: false,
};

FormRowCheckbox.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
};

FormRowCheckbox.defaultProps = {
    errorMessage: '',
    error: false,
};

FormRowRadio.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    optionsLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    error: PropTypes.bool,
};

FormRowRadio.defaultProps = {
    errorMessage: '',
    error: false,
};

FormRowDropdown.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    error: PropTypes.bool.isRequired,
};
