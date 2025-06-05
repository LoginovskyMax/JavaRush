import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, {type FC } from 'react'
import * as Yup from 'yup'


const FormikComp:FC = () => {
   const Shema = Yup.object().shape({
     name: Yup.string()
     .min(2, 'Имя слишком короткое')
     .max(8, 'Имя слишком длинное'),
     email:Yup.string().email('Invalid email')
   })

    const submitFunc = (e:{ name: string; age: number; email: string }) => {
       console.log(e);
    }
   
    return (
        <div>
            <p>Формик компонент</p>
            <Formik 
            initialValues={{
                  name: '',
                  age: 0,
                  email: ''
            }}
            validationSchema={Shema}
        //     validate={values => {
        //       const errors = {
        //           name: '',
        //           age: '',
        //           email: ''
        //       };
        //           if (!values.email) {
        //            errors.email = 'Required';
        //           } else if (
        //              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //            ) {
        //             errors.email = 'Invalid email address';
        //             }
        //        return Object.values(errors).some((val:string) => val) ? errors : {};
        //    }}
            onSubmit={submitFunc}
            >
                <Form>
                  <Field name='name' type='text'/>
                  <ErrorMessage name='name' component='div' />
                  <Field name='age' type='number'/>
                  <Field name='email' type='email'/>
                  <ErrorMessage name='email' component='div' />
                  <button type='submit'>Подтвердить</button>
                </Form>
       
            </Formik>
        </div>
    )
}

export default React.memo(FormikComp) 