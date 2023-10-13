import { useState, KeyboardEvent } from 'react';
import { InputField } from './components/InputField';
import styles from './LoginForm.module.scss';
import classNames from 'classnames';
import { SIGN_UP_DATA, ValueForm } from './constants';

export function LoginForm() {
  const [activeTab, setActiveTab] = useState(ValueForm.FirstButton);

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Tab" || event.key === "Enter") {
      event.preventDefault();
  
      if (event.shiftKey) {
        // Если зажата клавиша Shift, то переключаем на таб назад.
        setActiveTab((prevTab) => (prevTab > ValueForm.FirstTab ? prevTab - ValueForm.Step : ValueForm.FirstButton));
      } else {
        // Иначе переключаем на следующий таб.
        setActiveTab((prevTab) => (prevTab < ValueForm.LastButton ? prevTab + ValueForm.Step : ValueForm.FirstTab));
      }
    }
  };

  function handleSetTab(tabNumber: number) {
    setActiveTab(tabNumber);
  }

  return (
    <form className={styles.form} onKeyDown={handleKeyDown}>
      {SIGN_UP_DATA.map((field) => (
        <InputField
          { ...field }
          activeTab={activeTab}
          handleSetTab={handleSetTab}
        />
      ))}

      <button
        type="submit"
        className={classNames(
          styles.button,
          activeTab === ValueForm.LastButton && styles.button_active,
          activeTab === ValueForm.LastTab && styles.button_input_active,
        )}
      >
        Create Your Account
      </button>

      <p
        className={classNames(
          styles.tip,
          activeTab !== ValueForm.FirstButton && styles.tip_active
        )}
      >
        Press Tab
      </p>

      <div
        className={classNames(
          styles.signupButton,
          activeTab !== ValueForm.FirstButton && styles.signupButton_active
        )}
        onClick={() => handleSetTab(1)}
      >
        Sign Up
      </div>
    </form>
  );
}