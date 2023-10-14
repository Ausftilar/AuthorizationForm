import classNames from 'classnames';
import styles from './ButtonAuth.module.scss';
import { ButtonAuthProps } from './ButtonAuth.types';

export function ButtonAuth({
  isActive,
  onClick,
  title,
}: ButtonAuthProps) {
  return(
    <button
      type='button'
      className={classNames(
        styles.button,
        isActive && styles.button_active
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
}