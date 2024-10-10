import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

type Props = {
  desktops?: React.ReactNode;
  tablets?: React.ReactNode;
  phones?: React.ReactNode;
  mobiles?: React.ReactNode;
};

const Responsive: FC<Props> = (props: Props) => {
  const { desktops, tablets, phones, mobiles } = props;
  const inDesktops = useMediaQuery({ query: '(min-width: 1025px)' });
  const inTablets = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const inPhones = useMediaQuery({ query: '(max-width: 767px)' });
  const inMobiels = useMediaQuery({ query: '(max-width: 1024px)' });
  return (
    <>
      {inDesktops && desktops}
      {inMobiels && mobiles}
      {inTablets && tablets}
      {inPhones && phones}
    </>
  );
};

export default Responsive;
