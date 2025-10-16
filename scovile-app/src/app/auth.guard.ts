import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.getToken()) {
    return true; // Пользователь авторизован, разрешаем доступ
  } else {
    // Пользователь не авторизован, перенаправляем на страницу входа
    return router.createUrlTree(['/registrate']);
  }
};
