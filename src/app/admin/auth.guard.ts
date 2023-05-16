import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let userString = sessionStorage.getItem("user"); 
  let userObj = (userString) ? JSON.parse(userString) : {};
  if(userObj.token) {
    return true;
  } 
  return router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
};
