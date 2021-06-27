import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import { authOperations } from '../redux/auth';

import { Formik } from 'formik';
import * as yup from 'yup';

import styles from './RegisterPage.module.css';

export default function RegisterPage() {
  // const dispatch = useDispatch();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = useCallback(
  //   e => {
  //     e.preventDefault();

  //     const user = {
  //       email,
  //       password,
  //     };

  //     dispatch(authOperations.register(user));

  //     setEmail('');
  //     setPassword('');
  //   },
  //   [email, password, dispatch],
  // );

  const validationsSchema = yup.object().shape({
    email: yup.string().email('Type correct email').required('Required'),
    password: yup.string().typeError('Must be a string').required('Required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validateOnBlur
      onSubmit={values => {
        console.log(values);
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
        <div>
          <h1 className={styles.title}>Registration</h1>
          <form className={styles.form} autoComplete="off">
            <label className={styles.label}>
              <span className={styles.headline}>E-mail</span>
              <input
                className={styles.input}
                placeholder=" "
                type={'email'}
                name={'email'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </label>
            {touched.email && errors.email && (
              <p className={styles.error}>{errors.email}</p>
            )}

            <label className={styles.label}>
              <span className={styles.headline}>Password</span>
              <input
                className={styles.input}
                placeholder=" "
                type={'password'}
                name={'password'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </label>
            {touched.password && errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}

            <label className={styles.label}>
              <span className={styles.headline}>Repeat password</span>
              <input
                className={styles.input}
                placeholder=" "
                type={'password'}
                name={'confirmPassword'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </label>
            {touched.confirmPassword && errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword}</p>
            )}

            <button
              className={styles.btn}
              disabled={!isValid || !dirty}
              onClick={handleSubmit}
              type={'submit'}
            >
              Register
            </button>
            <div className={styles.account}>
              <p className={styles.accountQuestion}>Do you have an account?</p>
              <a className={styles.accountLogin} href="/login">
                Login
              </a>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

// return (
//   <div className={styles.container}>
//     <h1>Registration Page</h1>

//     <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
//       <label className={styles.label}>
//         <span className={styles.headline}>Name</span>
//         <input
//           className={styles.input}
//           type="text"
//           name="name"
//           value={name}
//           placeholder="Jon Howard"
//           onChange={handleChange}
//         />
//       </label>

//       <label className={styles.label}>
//         <span className={styles.headline}>email</span>
//         <input
//           className={styles.input}
//           type="email"
//           name="email"
//           value={email}
//           placeholder="jhovard@gmail.com"
//           onChange={handleChange}
//         />
//       </label>

//       <label className={styles.label}>
//         <span className={styles.headline}>login</span>
//         <input
//           className={styles.input}
//           type="password"
//           name="password"
//           value={password}
//           pattern=".{7,}"
//           title="Must contain at least 7 or more characters"
//           onChange={handleChange}
//         />
//       </label>

//       <button type="submit" className={styles.btn}>
//         Sign up
//       </button>
//     </form>
//   </div>
// );
