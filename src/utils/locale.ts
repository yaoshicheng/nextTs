import { IncomingMessage } from 'http';

// 将一系列语言脱水成zh和en 适用于本项目所有的语言参数
export function hydrateLocale(locale: string): Locale {
  if (!locale) { return 'zh'; }
  const _locale = locale.toLowerCase();
  if (_locale.includes('en')) { return 'en'; }
  return 'zh';
}

// 将本项目的zh和cn注水成en-US/zh-CN 适用于API请求
export function formatLocale(locale: Locale): FormatLocale {
  if (locale === 'en') { return 'en-US'; }
  return 'zh-CN';
}

export function getDefaultLocaleFromRequest(req: IncomingMessage): Locale {
  const acceptLocale = req.headers['accept-language'];
  return hydrateLocale(acceptLocale);
}

export function getDefaultLocaleFromClient(navigator: Navigator): Locale {
  const { language } = navigator;
  return hydrateLocale(language);
}
