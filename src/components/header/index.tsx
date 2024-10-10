import React, { ReactElement, RefObject } from 'react';
import classnames from 'classnames';
import throttle from 'lodash.throttle';
import './style.scss';

type Props = {
  readonly menu: React.ReactNode;
  readonly headStyle: 'default' | 'fixed';
};

type State = {
  readonly scroll: boolean;
};

class Header extends React.PureComponent<Props, State> {
  public header: RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.state = {
      scroll: false,
    };
    this.header = React.createRef();
    this.handleScrollEvent = throttle(this.handleScrollEvent.bind(this), 300);
    this.getHeaderClass = this.getHeaderClass.bind(this);
  }

  componentDidMount(): void {
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    this.handleScrollEvent();
    const { headStyle } = this.props;
    if (headStyle === 'default') { window.addEventListener('scroll', this.handleScrollEvent); }
    return null;
  }

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.handleScrollEvent);
  }


  getHeaderClass(): string {
    const { headStyle } = this.props;
    const { scroll } = this.state;
    return classnames('atoken_header_wrapper', headStyle, { scroll });
  }

  handleScrollEvent(): void {
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if (scrollTop > 60) { return this.setState({ scroll: true }); }
    return this.setState({ scroll: false });
  }

  render(): ReactElement {
    const { menu } = this.props;
    const className = this.getHeaderClass();
    return (
      <div className={className} ref={this.header}>
        <div className="atoken_header">
          <div className="logo" />
          {menu}
        </div>
      </div>
    );
  }
}


export default Header;
