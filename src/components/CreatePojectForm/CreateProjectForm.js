import React from 'react';
import { useDispatch } from 'react-redux';
import s from './CreateProjectForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import addProject from '../../redux/projects/projects-operations';

const formSchema = Yup.object().shape({
  name: Yup.string('Enter a name')
    .min(3, 'Too short!')
    .required('* Project Name is a required field'),
  description: Yup.string('Enter a name')
    .min(4, 'Too short!')
    .required('* Description is a required field'),
});

const CreateProjectForm = ({ onClose }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
      }}
      validationSchema={formSchema}
      onSubmit={values => {
        addProject(values);
        dispatch(addProject(values));
        onClose();
      }}
    >
      <Form
        className={s.ProjectForm}
        //   onChange={handleChange}
      >
        <div className={s.FormField}>
          <Field
            className={s.FormInput}
            type="text"
            name="name"
            placeholder=" "
          />

          <label className={s.FormLable}>Project name</label>
        </div>
        <ErrorMessage className={s.ErrorInput} component="span" name="name" />
        <div className={s.FormField}>
          <Field
            className={s.FormInput}
            type="text"
            name="description"
            placeholder=" "
          />

          <label className={s.FormLable}>Description</label>
        </div>

        <ErrorMessage
          className={s.ErrorInput}
          component="span"
          name="description"
        />
      </Form>
    </Formik>
  );
};

export default CreateProjectForm;

//v.2

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import s from './CreateProjectForm.module.css';

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { projectsOperations, projectsSelectors } from '../../redux/projects';
// import { errorSelectors } from '../../redux/error';

// const FormSchema = Yup.object().shape({
//   name: Yup.string('Enter a name')
//     .min(3, 'Too short!')
//     .required('* Project Name is a required field'),
//   description: Yup.string('Enter a name')
//     .min(4, 'Too short!')
//     .required('* Description is a required field'),
// });

// const createErrorMessage = error => {
//   if (error.includes('400')) return 'Bad request. Please try again';
//   if (error.includes('401')) return 'User not authorized';
//   return 'Unknown error. Please try again';
// };

// const CreateProjectForm = ({ onSave }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleChange = e => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'name':
//         return setName(value);
//       case 'description':
//         return setDescription(value);
//       default:
//         return;
//     }
//   };

//   const projects = useSelector(projectsSelectors.getProjects);
//   const dispatch = useDispatch();

//   const errorFromState = useSelector(errorSelectors);

//   let errorMessage = errorFromState ? createErrorMessage(errorFromState) : null;

//   const handleSubmit = (
//     { name, description },
//     { resetForm, setSubmitting },
//   ) => {
//     if (projects.some(project => project.name === name)) {
//       return (errorMessage = `Name "${name}" already exists, please enter another name.`);
//     } else dispatch(projectsOperations.addProject(name, description));

//     setSubmitting(false);
//     resetForm();

//     // console.log(name, description);
//     onSave();
//   };

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         description: '',
//       }}
//       validationSchema={FormSchema}
//       //   onCreate={values => {
//       // addProject(values);
//       // dispatch(addProject(values));
//       // console.log(values);
//       // onClose();
//       //   }}
//       onSubmit={handleSubmit}
//     >
//       {({ errors, touched }) => (
//         <Form className={s.ProjectForm} onChange={handleChange}>
//           <div className={s.FormField}>
//             <Field
//               className={`${s.FormInput} ${
//                 touched.name && errors.name && s.ErrorInput
//               }`}
//               type="text"
//               name="name"
//               placeholder=" "
//               // value={prName}
//               // onChange={setPrName}
//             />

//             <label className={s.FormLable}>Project name</label>
//             {touched.name && errors.name && (
//               <div className={s.error}>{errors.name}</div>
//             )}
//           </div>
//           {/* <ErrorMessage className={s.ErrorName} component="span" name="name" /> */}
//           <div className={s.FormField}>
//             <Field
//               className={`${s.FormInput} ${
//                 touched.description && errors.description && s.ErrorInput
//               }`}
//               type="text"
//               name="description"
//               placeholder=" "
//               // value={prDesc}
//               // onChange={setPrDesc}
//             />

//             <label className={s.FormLable}>Description</label>
//             {touched.description && errors.description && (
//               <div className={s.error}>{errors.description}</div>
//             )}
//           </div>

//           {/* <ErrorMessage
//             className={s.ErrorDescription}
//             component="span"
//             name="description"
//           /> */}
//           <div className={s.wr}>
//             {errorMessage ? (
//               <div className={s.errorMessage}>{errorMessage}</div>
//             ) : null}
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default CreateProjectForm;
