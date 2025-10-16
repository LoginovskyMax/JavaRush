import { HttpInterceptorFn, HttpEventType } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
   const auth = inject(AuthService);

   const token = auth.getToken()

   if(!token) {
    return next(req)
   }
   
  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`)
  });

  return next(authReq)
};