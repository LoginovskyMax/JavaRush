'use client'

import { useState } from 'react'
import './page.css'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getUser } from '../store/slices/authSlice'
 

export default function register() {
 const { error } = useAppSelector((state) => state.auth)
 const dispatch = useAppDispatch()
    const [form, setForm] = useState({
        password:'',
        email:''
    })

    const register = () => {
        dispatch(getUser(form))
    }

  return (
<main className="auth-page-wrapper">
    <div className="auth-form-container">
        <div className="auth-container auth-container--register">
            <div className="Legend">
                <h1 className="auth-title">Register</h1>
            </div>

            <form className="auth-form" id="register-form">
                <div className="InputField">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="Input" 
                    placeholder="Value" 
                    required
                    value={form.email}
                    onInput={(e:React.ChangeEvent<HTMLInputElement>) => setForm(prev => {
                        return {
                            ...prev,
                           email: e.target.value
                        }
                    })}
                    />
                </div>
                <div className="InputField">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    id="password"
                    name="password" 
                    className="Input" 
                    placeholder="Value" 
                    required 
                    value={form.password}
                    onInput={(e:React.ChangeEvent<HTMLInputElement>) => setForm(prev => {
                        return {
                            ...prev,
                           password: e.target.value
                        }
                    })}
                    />
                </div>

                <div className="CheckboxField">
                    <label className="checkbox-container">Remember me
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>

                <div className="ButtonGroup">
                    <button type='button' className="button button--primary" onClick={register}>Register</button>
                </div>
                {error && <p>{error}</p>}
            </form>

            <p className="auth-switch">Already have an account? <a href="login.html">Sign in</a></p>
        </div>
    </div>
</main>
  )
}