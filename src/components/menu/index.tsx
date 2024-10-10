import React, { FC, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import classnames from 'classnames';
import Responsive from '../responsive';
import { menus, MenuItem } from '../../configs/menu';
import MenuIcon from '../../assets/common/menu@2x.png';
import CloseIcon from '../../assets/common/menu_close@2x.png';
import './style.scss';

type DesktopsProps = {
  current: MenuCurrent;
  extra?: React.ReactNode;
  locale: Locale;
};

type MobilesProps = {
  locale: Locale;
  current: MenuCurrent;
  maskVisible: boolean;
  onMaskVisibleChange: (maskVisible: boolean) => void;
  onLocaleChange: (locale: Locale) => void;
};

type MenuProps = {
  current: MenuCurrent;
  extra?: React.ReactNode;
  locale: Locale;
  maskVisible: boolean;
  onMaskVisibleChange: (maskVisible: boolean) => void;
  onLocaleChange: (locale: Locale) => void;
};


const DesktopsMenu: FC<DesktopsProps> = (props: DesktopsProps) => {
  const { current, locale } = props;
  return (
    <dl className="menu_list">
      <>
        {menus.map((item: MenuItem): React.ReactNode => {
          const { id, description, href, intlId } = item;
          let _href = href;
          if (id === 'helpCenter') {
            _href = locale === 'zh' ? 'https://atoken1.s2.udesk.cn/hc' : 'https://atoken2.s2.udesk.cn/hc';
          }
          const active = current === id;
          const className = classnames(id, { active });
          const outer = !!_href.includes('https');
          return (
            <dd className={className} key={id}>
              {outer
                ? (
                  <a href={_href} target="_blank" rel="noopener noreferrer">
                    <FormattedMessage id={intlId} description={description} />
                  </a>
                ) : (
                  <Link href={_href}>
                    <a><FormattedMessage id={intlId} description={description} /></a>
                  </Link>
                )}

              {active && <hr className="active_line" />}
            </dd>
          );
        })}
      </>
    </dl>
  );
};

const MobilesMenu: FC<MobilesProps> = (props: MobilesProps) => {
  const { maskVisible, onMaskVisibleChange, onLocaleChange, locale, current } = props;
  const iconSrc = maskVisible ? CloseIcon : MenuIcon;
  const menuMaskClassName = classnames('menu_mask', { active: maskVisible });
  const changedLocale: Locale = locale === 'zh' ? 'en' : 'zh';

  const renderMenus = (): ReactNode[] => menus.map((item: MenuItem): ReactNode => {
    const { id, description, href, intlId } = item;
    let _href = href;
    if (id === 'helpCenter') {
      _href = locale === 'zh' ? 'https://atoken1.s2.udesk.cn/hc' : 'https://atoken2.s2.udesk.cn/hc';
    }
    const outer = !!_href.includes('https');
    const active = current === id;
    const className = classnames(id, { active });
    return (
      outer
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
        ? (<a href={_href} target="_blank" rel="noopener noreferrer" key={id}><FormattedMessage id={intlId} description={description} /></a>)
        : <Link href={_href} key={id}><a className={className}><FormattedMessage id={intlId} description={description} /></a></Link>
    );
  });

  return (
    <div className="atoken_mobile_menu">
      <button className="mask_btn" type="button" onClick={(): void => onMaskVisibleChange(!maskVisible)}>
        <img src={iconSrc} alt="" className="menu_icon" />
      </button>
      <div className={menuMaskClassName}>
        {renderMenus()}
        <FormattedMessage id="MENU_LOCALE_SELECTOR" description="语言切换描述">
          {(txt: string): ReactNode => (
            <button className="locale_change_btn" type="button" onClick={(): void => onLocaleChange(changedLocale)}>{txt}</button>
          )}
        </FormattedMessage>
      </div>
    </div>
  );
};


const Menu: FC<MenuProps> = (props: MenuProps) => {
  const { extra } = props;
  return (
    <div className="atoken_header_menu">
      <Responsive

        desktops={(
          <>
            <DesktopsMenu {...props} />
            {extra}
          </>
)}
        mobiles={<MobilesMenu {...props} />}
      />
    </div>
  );
};

export default Menu;
