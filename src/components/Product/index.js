import classNames from 'classnames/bind';
import styles from './Product.module.css';
const cx = classNames.bind(styles);

function Product() {
  return <div className={cx('wrapper')}></div>;
}

export default Product;
