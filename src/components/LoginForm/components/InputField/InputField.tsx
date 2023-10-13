import { useEffect, useRef } from 'react';
import styles from './InputField.module.scss';
import classNames from 'classnames';
import { InputFieldProps } from './InputField.types';

export function InputField({
  id,
  type,
  placeholder,
  activeTab,
  serialNumber,
  handleSetTab,
  title,
}: InputFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isActive = activeTab === serialNumber;
  const isAfterSelected = serialNumber > activeTab;

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  return (
    <>
      <input
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeholder}
        required
        autoFocus
        className={classNames(
          styles.input,
          isActive && styles.input_focus,
          isAfterSelected && styles.input_focus_next_inputs,
        )}
      />
      <label
        htmlFor={id}
        className={styles.label}
      >
        <span
          className={classNames(
            styles.labelText,
            isActive && styles.input_focus_label_text,
            isAfterSelected && styles.input_focus_next_labels_text,
          )}
        >
          {title}
        </span>
        <span
          className={classNames(
            styles.navDot,
            isActive && styles.input_focus_nav_dot,
            activeTab === 0 && styles.navDot_unactive,
          )}
          style={{ marginTop: `calc( -150px + ${25 * serialNumber}px)` }}
          onClick={() => handleSetTab(serialNumber)}
        />
      </label>
    </>
  );
}