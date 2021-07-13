import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import styles from './LoginPage.module.css';

import { authOperations } from '../../redux/auth';

class LoginPage extends Component {
  updateState = values => {
    this.setState({ email: values.email, password: values.password });
  };

  validationsSchema = yup.object().shape({
    email: yup.string().email('Type correct email').required('Required'),
    password: yup
      .string()
      .typeError('Must be a string')
      .matches(
        /^(?=.*[0-9]).{8,32}$/,
        'Incorrect password (must contain at least 8 characters and at least one number)',
      )
      .required('Required'),
  });

  render() {
    return (
      <>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validateOnBlur
          onSubmit={(values, { resetForm }) => {
            this.updateState(values);
            this.props.onLogin(this.state);
            this.setState({ email: '', password: '' });
            resetForm();
          }}
          validationSchema={this.validationsSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <div className={styles.wrapper}>
              <div className={styles.background}>
                <div className={`${styles.circle} ${styles.circle1}`}></div>
                <div className={`${styles.circle} ${styles.circle2}`}></div>
                <div className={`${styles.circle} ${styles.circle3}`}></div>
                <div className={`${styles.circle} ${styles.circle4}`}></div>
                <div className={`${styles.circle} ${styles.circle5}`}></div>
                <div className={`${styles.circle} ${styles.circle6}`}></div>
                <div className={`${styles.circle} ${styles.circle7}`}></div>
                <div className={`${styles.circle} ${styles.circle8}`}></div>
                <div className={`${styles.circle} ${styles.circle9}`}></div>
                <div className={`${styles.circle} ${styles.circle10}`}></div>
              </div>
              <form className={styles.form} autoComplete="off">
                <h1 className={styles.title}>Enter</h1>
                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type={'email'}
                    name={'email'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className={styles.headline}>E-mail</span>
                  {touched.email && errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                </label>

                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type={'password'}
                    name={'password'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <span className={styles.headline}>Password</span>
                  {touched.password && errors.password && (
                    <p className={styles.error}>{errors.password}</p>
                  )}
                </label>

                <button
                  className={styles.btn}
                  disabled={!isValid || !dirty}
                  onClick={handleSubmit}
                  type={'submit'}
                >
                  Enter
                </button>
                <div className={styles.account}>
                  <p className={styles.accountQuestion}>No account?</p>
                  <a className={styles.accountLogin} href="/">
                    Register
                  </a>
                </div>
              </form>
            </div>
          )}
        </Formik>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
  };
};

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
