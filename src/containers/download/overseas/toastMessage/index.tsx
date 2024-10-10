import './style.scss';

type Props = {
  timeout?: number;
  position?: 'bottom' | 'middle' | 'top';
  msg?: string;
};

class ToastMessage {
  msg: string;

  position: string;

  timeout: number;

  constructor(props: Props) {
    const { msg, position, timeout } = props;
    this.msg = msg;
    this.position = position || 'middle';
    this.timeout = timeout || 1500;
  }

  public static hideToast(): void {
    const toastEle = document.getElementsByClassName('atoken_custom_toast_container');
    if (toastEle && toastEle.length > 0) {
      toastEle[0].remove();
    }
  }

  showToast({ msg = 'Toast提示窗' }: Props): void {
    ToastMessage.hideToast();
    const root = document.getElementsByTagName('body');
    const CustomToastContainer = document.createElement('div');
    CustomToastContainer.className = 'custom_toast_container';
    const loadingEle = document.getElementsByClassName('custom_toast');
    let toastCss = 'custom_toast';
    if (this.position === 'top') {
      toastCss = 'custom_toast custom_toast_top';
    } else if (this.position === 'middle') {
      toastCss = 'custom_toast custom_toast_middle';
    }
    if (loadingEle.length === 0) {
      const toastBox = document.createElement('div');
      toastBox.className = toastCss;
      const toastContent = document.createElement('div');
      toastContent.className = 'toast_content';
      toastContent.innerHTML = msg;
      toastBox.appendChild(toastContent);
      CustomToastContainer.appendChild(toastBox);
      root[0].appendChild(CustomToastContainer);
    } else {
      const elements = document.getElementsByClassName('toast_content');
      if (elements && elements[0]) {
        elements[0].innerHTML = msg;
      }
    }

    const clearTime = setTimeout(() => {
      const toastEle = document.getElementsByClassName('custom_toast_container');
      if (toastEle && toastEle.length > 0) {
        toastEle[0].remove();
      }
      clearTimeout(clearTime);
    }, this.timeout);
  }
}
export default ToastMessage;
