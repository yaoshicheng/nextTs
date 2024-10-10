export type NavigationItem = {
  url: string;
  title: string;
};

export const navigationList: NavigationItem[] = [
  {
    url: 'https://www.dfg.group/',
    title: 'FOOTER_DFG',
  },
  {
    url: 'http://www.bit.luxe/',
    title: 'FOOTER_LUXE',
  },
  {
    url: 'http://oxbtc.com/home',
    title: 'FOOTER_OXBTC',
  },
  {
    url: 'http://www.coinvoice.cn/',
    title: 'FOOTER_COINVOICE',
  },
  {
    url: 'https://wayi.cn',
    title: 'FOOTER_WAYI',
  },
  {
    url: 'http://www.qianba.com/',
    title: 'FOOTER_QIANBA',
  },
  {
    url: 'https://www.chaindd.com/',
    title: 'FOOTER_CHAINDD',
  },
  {
    url: 'https://www.chainsguard.com/',
    title: 'FOOTER_CHAINSGUARD',
  },
];

export type NavigationIcon = {
  type: IconType;
  url?: string;
};

export const navigationIcons: NavigationIcon[] = [
  {
    type: 'chainnode',
    url: 'https://www.chainnode.com/forum/239',
  },
  {
    type: 'facebook',
    url: 'https://www.facebook.com/ATokenOfficial',
  },
  {
    type: 'medium',
    url: 'https://medium.com/@atokenwallet',
  },
  {
    type: 'reddit',
    url: 'https://www.reddit.com/user/ATokenwallet/',
  },
  {
    type: 'telegram',
    url: 'https://t.me/ATokenCommunity',
  },
  {
    type: 'twitter',
    url: 'https://twitter.com/ATokenOfficial',
  },
  {
    type: 'wechat',
  },
  {
    type: 'youtube',
    url: 'https://www.youtube.com/channel/UCQnHLaRRNa3QoMUFbcakbQA',
  },
];
