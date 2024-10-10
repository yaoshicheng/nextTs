import Cookies, { CookieAttributes } from 'js-cookie';

export function setCookies(name: string, data: string | object, options?: CookieAttributes): boolean {
  try {
    Cookies.set(name, data, options);
    return true;
  } catch (e) {
    return false;
  }
}

export function getCookies(name: string): object | string {
  try {
    const cookieData = Cookies.getJSON(name) || null;
    return cookieData;
  } catch (e) {
    return null;
  }
}
