// hooks/useCookie.js
import { useState, useEffect } from 'react';

export const useCookie = (name) => {
  const [cookie, setCookie] = useState('');

  useEffect(() => {
    const getCookie = (name) => {
      const cookieName = `${name}=`;
      const cookiesArray = document.cookie.split(';');
      for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
      return '';
    };

    setCookie(getCookie(name));
  }, [name]);

  return cookie;
};
