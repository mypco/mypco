import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';

import '../style/form-element.scss';

class FormElement extends React.Component {

  childrenWithProps(){
    const {
      children,
      onFieldUpdate,
      onFieldBlur,
      placeholder,
      currentValue,
      fieldName
    } = this.props;

    return React.Children.map(children,
     (child) => React.cloneElement(child, {
       onFieldUpdate,
       onFieldBlur,
       placeholder,
       currentValue,
       fieldName
     })
    );
  }

  createError(error) {
    return(
      <p className="body" key={error}>
        {error}
      </p>
    );
  }

  errors(){
    let errors = [];
    this.props.errors.forEach((error) => {
      errors.push(this.createError(error));
    });
    return errors;
  }

  render() {
    const { fieldTitle, info, className, fieldName } = this.props;
    return (
      <div className={ "form-element " + className }>
        <div className="info">
          <p className="field-title">{ fieldTitle }</p>
          <Tooltip
            text={info}
            id={ "form-element-tooltip-" + fieldName }
          />
        </div>

        {this.childrenWithProps()}

        <div className="errors">
          {this.errors()}
        </div>
      </div>
    );
  }
}

FormElement.propTypes = {
  fieldName: PropTypes.string.isRequired,
  info: PropTypes.string,
  fieldTitle: PropTypes.string,
  placeholder: PropTypes.string,
  currentValue: PropTypes.string,
  errors: PropTypes.array,
  onFieldUpdate: PropTypes.func,
  onFieldBlur: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default FormElement;
