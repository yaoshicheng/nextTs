
export function inWeChatEnv(renderEnv: RenderEnv): boolean {
  if (renderEnv === 'client') {
    // 在windowsPhone下判断无效，但是WP已经被放弃了，所以不要用这个来烦我了
    return /MicroMessenger/i.test(window.navigator.userAgent.toLowerCase());
  }
  return false;
}

export function getSystem(renderEnv: RenderEnv, userAgent?: string): System {
  let _userAgent = '';
  if (renderEnv === 'client') { _userAgent = navigator.userAgent; }
  if (renderEnv === 'server') { _userAgent = userAgent; }
  const androidEnv = _userAgent.includes('Android') || _userAgent.includes('Adr'); // android终端
  if (androidEnv) { return 'android'; }
  const appleEnv = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(_userAgent);
  if (appleEnv) { return 'apple'; }
  return 'pc';
}

export function getRenderEnv(): RenderEnv {
  return String(typeof window) === 'undefined' ? 'server' : 'client';
}
