import { CanActivateFn } from '@angular/router';

export const formGuard: CanActivateFn = (route, state) => {

  const nome = "form";

  const a = state.url.includes(nome);

  return a ? true : false
};
