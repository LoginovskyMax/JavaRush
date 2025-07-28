import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, {useState, type FC } from 'react'
import * as Yup from 'yup'
import DatePicker from "react-datepicker";

import calendar from '../assets/Calendar.png'

import "react-datepicker/dist/react-datepicker.css";
import ModalCalendar from './ModalCalendar';

interface iProps {
    value?:string, 
    placeholder?: string, 
    onClick?: () => void
}

interface Values {
    name: string;
    age: number;
    email: string;
    date: Date 
}

const initialValues:Values = {
    name: '',
    age: 0,
    email: '',
    date: new Date
}

const CustomInput = React.forwardRef<HTMLLabelElement, iProps>((props, ref) => {
  return (
    <div className='field'>
      <label onClick={props?.onClick} ref={ref} className='label'>    
       <img src={calendar} height={25}/>     
       {props?.value || props?.placeholder}
      </label>
    </div>
  );
});


const FormikComp:FC = () => {
  const [showCalendar, setShowCalendar] = useState(false)

   const Shema = Yup.object().shape({
     name: Yup.string()
     .min(2, 'Имя слишком короткое')
     .max(8, 'Имя слишком длинное')
     .required(),
     email:Yup.string().email('Invalid email').required()
   })

   const [startDate, setStartDate] = useState<Date | null>(null);

    const submitFunc = (e:Values) => {
       console.log(e);
    }

    const showCalendarFunc = () => {
      setShowCalendar(!showCalendar)
    }
   
    return (
        <div className='page'>
            <p>Формик компонент</p>
            <Formik 
              initialValues={initialValues}
              validationSchema={Shema}
              onSubmit={submitFunc}
            >
          {({ setFieldValue }) => (
         <Form className='form'>
                  <Field name='name' type='text' className='field'/>
                  <ErrorMessage name='name' component='div' />
         
        
                  <Field name='age' type='number' className='field'/>
                  <Field name='email' type='email'  className='field'/>
                  <ErrorMessage name='email' component='div' />

                  <DatePicker 
                    selected={startDate} 
                    placeholderText='start date'
                    onChange={(date) => {
                         setFieldValue('date', date)
                         setStartDate(date)}}
                    customInput={<CustomInput/>}
                  />
                  
                  <button type='submit'>Подтвердить</button>
                </Form>
         )}
            </Formik>
             <button 
               type='button' 
               onClick={showCalendarFunc}>
              {showCalendar ? 'Показать календарь' : 'Скрыть календарь'}
              </button>
              <ModalCalendar show={showCalendar} />
        </div>
    )
}

export default React.memo(FormikComp) 