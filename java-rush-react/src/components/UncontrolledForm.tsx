import React, {useRef, type FC, type FormEvent } from 'react'


const UncontrolledForm:FC = () => {
    const form = useRef<HTMLFormElement | null>(null)

    const submitFunc = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!form.current) return
        console.log(form.current.user.value);

        console.log(form.current.agree.checked);
        console.log(form.current.gender.value);
    }
   
    return (
        <div>
            <p>неконтролируемая форма</p>
            <form ref={form} onSubmit={submitFunc}>
               <input type="text" name='user' placeholder='Ваше имя'/>
               <input type="checkbox" name='agree' />
               <button type='submit'>Подтвердить</button>
               <select name="gender">
                 <option value="Male">Male</option>
                 <option value="Female">Female</option>
               </select>
            </form>
        </div>
    )
}

export default React.memo(UncontrolledForm) 