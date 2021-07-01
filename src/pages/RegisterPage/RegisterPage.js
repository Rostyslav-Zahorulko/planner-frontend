import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import resetErrorOperation from '../../redux/error/error-operations';

import { Formik } from 'formik';
import * as yup from 'yup';
import { ToastContainer } from 'react-toastify';

import styles from './RegisterPage.module.css';

class RegisterPage extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const updateState = values => {
      this.setState({ email: values.email, password: values.password });
      // console.log(this.state);
    };

    const validationsSchema = yup.object().shape({
      email: yup.string().email('Type correct email').required('Required'),
      password: yup
        .string()
        .typeError('Must be a string')
        .matches(
          /^(?=.*[0-9]).{8,32}$/,
          'Password must contain at least 8 characters and at least one number',
        )
        .required('Required'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Required'),
    });

    return (
      <>
        <ToastContainer autoClose={5000} hideProgressBar />
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validateOnBlur
          onSubmit={(values, { resetForm }) => {
            updateState(values);
            this.props.onRegister(this.state);
            resetForm();
          }}
          validationSchema={validationsSchema}
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
                <h1 className={styles.title}>Registration</h1>
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

                <label className={styles.label}>
                  <input
                    className={styles.input}
                    placeholder=" "
                    type={'password'}
                    name={'confirmPassword'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  <span className={styles.headline}>Repeat password</span>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <p className={styles.error}>{errors.confirmPassword}</p>
                  )}
                </label>

                <button
                  className={styles.btn}
                  disabled={!isValid || !dirty}
                  onClick={handleSubmit}
                  type={'submit'}
                >
                  Register
                </button>
                <div className={styles.account}>
                  <p className={styles.accountQuestion}>
                    Do you have an account?
                  </p>
                  <a className={styles.accountLogin} href="users/login">
                    Log in
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
  onRegister: authOperations.register,
  resetError: resetErrorOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
