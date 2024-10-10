import React, { FC } from 'react';
import ChinaFlag from '../../assets/common/flag_cn@2x.png';
import USAFlag from '../../assets/common/flag_en@2x.png';
import BottomArrow from '../../assets/common/bottom_arrow.png';
import './style.scss';

type Props = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};


const LocaleSelector: FC<Props> = (props: Props) => {
  const { locale, onLocaleChange } = props;
  const localeList = ['zh', 'en'];
  const localeTextMap = {
    zh: '中文',
    en: 'EN',
  };
  const localeFlagMap = {
    zh: ChinaFlag,
    en: USAFlag,
  };
  const renderLocaleItem = (localeItem: Locale, extra?: React.ReactNode, className?: string): React.ReactNode => (
    <div
      className={className || 'locale_item'}
      onClick={(): void => onLocaleChange(localeItem)}
      role="presentation"
      key={className ? `${className} + ${localeItem}` : localeItem}
    >
      <img src={localeFlagMap[localeItem]} alt="" className="flag" />
      <span>{localeTextMap[localeItem]}</span>
      {extra}
    </div>
  );
  return (
    <div className="atoken_locale_selector">
      {renderLocaleItem(locale, <img src={BottomArrow} alt="" className="bottom_arrow" />, 'current_locale')}
      <div className="selector_optons">
        {localeList.map((item: Locale): React.ReactNode => renderLocaleItem(item))}
      </div>

    </div>
  );
};

export default LocaleSelector;
