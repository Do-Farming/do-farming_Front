import Cookies from 'js-cookie';

export const signIn = (auth: any) => {
  Cookies.set('auth', JSON.stringify(auth));
  localStorage.setItem('auth', JSON.stringify(auth));
};

export const signOut = () => {
  Cookies.remove('auth');
  localStorage.removeItem('auth');
};
