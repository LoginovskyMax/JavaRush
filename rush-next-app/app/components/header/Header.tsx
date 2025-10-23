'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import './header.css'
import { useAppSelector } from '@/app/store/hooks';
import { useEffect } from 'react';
import { setCookies, deleteCookies } from '@/app/actions/cookies';
import { logOut } from '@/app/store/slices/authSlice';
import { useAppDispatch } from '@/app/store/hooks';

export default function Header() {
  const { user} = useAppSelector((state) => state.auth)
  const router = useRouter()
  const dispatch = useAppDispatch()

  const logOutFunc = () => {
    dispatch(logOut())
  }

 useEffect(() => {
    if(user){
       setCookies(user?.token)
    } else {
       deleteCookies('token')
    }
 }, [user])
                 

  return (
<header>
    <div className="header-container">
        <Link href={'/'} className="header__logo">
            {/* <img src="../static/img/logo.svg" alt="Hop & Barley Logo" /> */}
            <p className="logo-text">Hop & Barley</p>
        </Link>
        <nav className="header__nav">
            <ul>
                <li><Link href={'/'}>Products</Link></li>
                <li><a href="guides-recipes.html">Guides & Recipes</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Resources</a></li>
                <li><Link href={'/basket'}>Basket</Link></li>
            </ul>
        </nav>

        { !user ?         
        <div className="header__auth-buttons" id="auth-guest">
            <Link href="login.html" className="button button--secondary">Sign in</Link>
            <Link href={'/register'} className="button button--primary">Register</Link>
        </div> :
         <div className="header__user-actions" id="auth-user">
            <span className="cart-icon" aria-label="Shopping Cart" onClick={logOutFunc}>
                Log out
                {/* <img src="../static/img/icons/Shopping_bag.svg" alt="Shopping Cart"/> */}
            </span>
            <Link href={'/basket'} className="cart-icon" aria-label="Shopping Cart">
                Shopping Cart
                {/* <img src="../static/img/icons/Shopping_bag.svg" alt="Shopping Cart"/> */}
            </Link>
        </div>
        }
    </div>
</header>
  )
}