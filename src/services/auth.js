// Servicio creado para reacomodar el código de App.js 

export async function login(correo, pass) {
  let datos = {
    "email_client": correo,
    "password_client": pass
  };

  try {
    const response = await fetch('http://18.212.63.4:3000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || 'Error en la solicitud' };
    }

    const data = await response.json();
    const accessToken = data.data.tokens.access_token;
    const refreshToken = data.data.tokens.refresh_token;
    
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (15 * 60 * 1000));
    
    document.cookie = `tokenUser=${accessToken}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = `refreshToken=${refreshToken}; expires=${expirationDate.toUTCString()}; path=/`;

    const decodedToken = parseJwt(accessToken);

    return { data, decodedToken };
  } catch (error) {
    console.error('Error:', error);
    return { error: error.message };
  }
}

export function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export async function register(correo, pass) {
  let datos = {
    "email_client": correo,
    "password_client": pass
  };

  try {
    const response = await fetch('http://18.212.63.4:3000/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }

    const data = await response.json();
    const accessToken = data.data.tokens.access_token;
    const refreshToken = data.data.tokens.refresh_token;
    
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (15 * 60 * 1000));

    document.cookie = `tokenUser=${accessToken}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = `refreshToken=${refreshToken}; expires=${expirationDate.toUTCString()}; path=/`;

    return data;
  } catch (error) {
    console.error('Error:', error);
    return { error: error.message };
  }
}

// export const getTokenFromCookie = () => {
//   const cookieName = "tokenUser=";
//   const decodedCookie = decodeURIComponent(document.cookie);
//   const cookieArray = decodedCookie.split(';');

//   for (let i = 0; i < cookieArray.length; i++) {
//     let cookie = cookieArray[i].trim();
//     if (cookie.indexOf(cookieName) === 0) {
//       return cookie.substring(cookieName.length, cookie.length);
//     }
//   }
//   return null;
// };

// Nueva version de la funcion getTokenFromCookie (la anterior esta más atrás)
export const getTokenFromCookie = () => {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  const tokenCookie = cookies.find(cookie => cookie.startsWith('tokenUser='));
  return tokenCookie ? tokenCookie.split('=')[1] : null;
};

export async function getUserById(id) {
  try {
    const response = await fetch(`http://18.212.63.4:3000/api/v1/clients/${id}`);

    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
    const data = await response.json();
    document.cookie = `rolUser=${data.roles_client[0]}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}