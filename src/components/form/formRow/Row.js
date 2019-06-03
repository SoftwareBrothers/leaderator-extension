import React from 'react';
import PropTypes from 'prop-types';
import styles from './formRow.module.css';

const getFormField = (props) => ({
  text: <InputRow {...props} />,
  password: <PasswordRow {...props} />,
  radio: <RadioRow {...props} />,
  checkbox: <CheckboxRow {...props} />,
  select: <SelectRow {...props} />,
});


export const FormRow = props => (
    getFormField(props)[props.typeField]
);

export const InputRow = props => (
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
        onChange={props.onChange}
        value={props.value}
      />
      {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);

export const PasswordRow = props => (
  <div className={styles.form_row}>
      <label htmlFor={props.fieldName}>{props.label}</label>
      <input
        className={styles.custom_input}
        type="password"
        name={props.fieldName}
        id={props.fieldName}
        onChange={props.onChange}
      />
      {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);

export const SelectRow = props => (
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

export const CheckboxRow = props => (
  <div className={styles.form_row_checkbox}>
      <label htmlFor={props.fieldName}>{props.label}</label>
      <input
        className={styles.custom_checkbox}
        type="checkbox"
        name={props.fieldName}
        id={props.fieldName}
        onChange={props.onChange}
      />
      {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);

export const RadioRow = props => (
  <div className={styles.form_row_radio}>
      <label htmlFor={props.fieldName}>{props.label}</label>
      <div className={styles.radioOptions}>
          {props.options.map((item, index) => (
            <div key={index + 1}>
                <span>{props.optionsLabels[index]}</span>
                <input className={styles.custom_radio} type="radio" value={item} name={props.fieldName}
                       onChange={props.onChange}/>
            </div>
          ))}
      </div>
      {props.error && <span className={styles.error}>{props.errorMessage}</span>}
  </div>
);


InputRow.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onFindEmail: PropTypes.func,
    onCheckEmail: PropTypes.func,
    error: PropTypes.bool,
    verifyButton: PropTypes.bool,
};

InputRow.defaultProps = {
    verifyButton: false,
    error: false,
    errorMessage: '',
};

PasswordRow.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
};

PasswordRow.defaultProps = {
  errorMessage: '',
  error: false,
};

CheckboxRow.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
};

CheckboxRow.defaultProps = {
    errorMessage: '',
    error: false,
};

RadioRow.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
};

RadioRow.defaultProps = {
    errorMessage: '',
    error: false,
};

SelectRow.propTypes = {
    fieldName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
