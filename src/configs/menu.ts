export type MenuItem = {
  id: MenuCurrent | 'helpCenter';
  description: string;
  intlId: string;
  href: string;
};

export type Menus = MenuItem[];

export const menus: Menus = [
  {
    id: 'main',
    description: '首页',
    intlId: 'MENU_01002',
    href: '/',
  },
  {
    id: 'wallet',
    description: '全币种钱包',
    intlId: 'MENU_01003',
    href: '/wallet',
  },
  {
    id: 'DeFi',
    description: 'DeFi',
    intlId: 'MENU_01004',
    href: '/deFi',
  },
  {
    id: 'DApp',
    description: 'DApp',
    intlId: 'MENU_01005',
    href: '/dApp',
  },
  {
    id: 'bussiness',
    description: '商务合作',
    intlId: 'MENU_01006',
    href: '/bussiness',
  },
  {
    id: 'helpCenter',
    description: '帮助中心',
    intlId: 'MENU_01007',
    href: 'http://www.baidu.com',
  },
];

export const useless = '';
