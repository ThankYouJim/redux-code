import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

function validate(formValues) {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title is required";
  }
  if (!formValues.description) {
    errors.description = "Description is required";
  }

  return errors;
}

class StreamCreate extends React.Component {
  
  renderError({error, touched}) {
    if (error && touched) {
      return(
        <div className="ui error message">
          <div className="content">
            <div className="header">{error}</div>
          </div>
        </div>
      );
    }
    else
      return null;
  }

  // renderInput(props) {
  // just grab the input obj and spreading into <input />
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    );
  }

  // this function is no longer used to handle form submission
  // when called, redux form is treated and will return the values
  onSubmit = (formValues) => {
    // e.preventDefault(); // we don't need this since we're using redux form
    // validate(formValues);
    this.props.createStream(formValues);
  }

  render() {
    return (
      <form 
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui error form">
        
        <Field 
          name="title" 
          component={this.renderInput} 
          label="Title"
        />
        <Field 
          name="description" 
          component={this.renderInput} 
          label="Description"
        />
        <button className="ui button primary">Submit</button>

      </form>
    );
  }
}

const formWrapper = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(
  null,
  { createStream } 
)(formWrapper);