import styles from './Button.module.scss';
import classNames from "classnames";
import { Link } from "react-router-dom";

export const Button = ({className, size = 'normal', href, onClick, linkState, children}) => {
  if (href) return  (
    <Link 
      to={href} 
      className={classNames(styles.button, styles[`button--${size}`], className)}
      state={linkState}
    >
      {children}
    </Link>
  )

  return (
    <button 
      className={classNames(styles.button, styles[`button--${size}`], className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
