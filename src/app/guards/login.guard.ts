import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  if( localStorage.getItem('user')== 'true'){
    return true
  }else{
    return true;
  }
};

  export const revisionGuard: CanActivateFn = (route, state) => {
    if( localStorage.getItem('admin')== 'true'){
      return true
    }else{
      return false;
    }
  };

  export const usuarioGuard: CanActivateFn = (route, state) => {
    if( localStorage.getItem('admin')== 'true'){
      return false
    }else{
      return true;
    }
  };
  export const formularioGuard: CanActivateFn = (route, state) => {
    if( localStorage.getItem('user')== 'true'){
      return true
    }else{
      return false;
    }
  };
 
