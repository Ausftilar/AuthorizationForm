import classNames from 'classnames';
import styles from './Controls.module.scss';
import { ControlsProps } from './Controls.types'

export function Controls({
  isActive,
}: ControlsProps) {
  return(
    <>
      <p
        className={classNames(
          styles.tip,
          isActive && styles.tip_active
        )}
      >
        Press Tab
      </p>
    </>
  );
}