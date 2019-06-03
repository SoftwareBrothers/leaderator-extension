import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FormRow } from './formRow/Row';

import styles from './form.module.css';

const errorMessages = {
    required: 'Field is required',
};

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const formProperties = [
            { label: 'VIP', fieldName: 'vip', onChange: this.props.onChange, value: this.props['vip'], typeField: 'checkbox' },
            { label: 'First name', fieldName: 'firstName', onChange: this.props.onChange, value: this.props['firstName'], typeField: 'text' },
            { label: 'Second name', fieldName: 'secondName', onChange: this.props.onChange, value: this.props['secondName'], typeField: 'text' },
            { label: 'Last name', fieldName: 'lastName', onChange: this.props.onChange, value: this.props['lastName'], typeField: 'text' },
            { label: 'Company', fieldName: 'company', onChange: this.props.onChange, value: this.props['company'], typeField: 'text' },
            { label: 'URL', fieldName: 'domain', onChange: this.props.onChange, value: this.props['domain'], typeField: 'text' },
            { label: 'Email', fieldName: 'email', onChange: this.props.onChange, value: this.props['email'], verifyButton: true,
                onCheckMail: this.props.onCheckMail, onFindMail: this.props.onFindMail,  typeField: 'text' },
            { label: 'Gender', fieldName: 'gender', onChange: this.props.onChange, value: this.props['gender'],
                optionsLabels: ['male', 'female'], options: ['male', 'female'], typeField: 'radio' },
            { label: 'Title', fieldName: 'title', onChange: this.props.onChange, value: this.props['title'],
                options: this.props.fieldOptions.titles, typeField: 'select' },
            { label: 'Country', fieldName: 'country', onChange: this.props.onChange, value: this.props['country'],
                options: this.props.fieldOptions.countries ,typeField: 'select' },
            { label: 'City', fieldName: 'city', onChange: this.props.onChange, value: this.props['city'],
                options: this.props.fieldOptions.cities ,typeField: 'select' },
            { label: 'Address', fieldName: 'address', onChange: this.props.onChange, value: this.props['address'], typeField: 'text' },
            { label: 'Found on', fieldName: 'foundOn', onChange: this.props.onChange, value: this.props['foundOn'], typeField: 'text' },
            { label: 'Note', fieldName: 'note', onChange: this.props.onChange, value: this.props['note'], typeField: 'text' },
        ];

        return (
          <div className={styles.form_container}>
              <form className={styles.form}>
                {formProperties.map((properties, index) => (
                    <FormRow key={`field${index}`}{ ...properties } />
                  ))}
                  <div className={styles.form_footer}>
                      <button className={styles.submit} onClick={this.props.onAddProspect} type="submit">Add prospect</button>
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
};

Form.defaultProps = {
    fieldOptions: {},
};
