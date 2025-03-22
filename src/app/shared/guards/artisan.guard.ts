import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const artisanGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  return authService.getUserRoles() == "Artisan";
};
