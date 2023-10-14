import { InputField } from './components/InputField';
import styles from './AuthorizationForm.module.scss';
import { ButtonAuth } from './components/ButtonAuth';
import { Controls } from './components/Controls';
import { useAuthorization } from './hooks/useAuthorization';

export function AuthorizationForm() {
  const {
    activeTab,
    formFields,
    valueForm,
    handleKeyDown,
    handleSetTab,
    handleSetTabAndForm,
  } = useAuthorization();

  return (
    <form className={styles.form} onKeyDown={handleKeyDown}>
      {formFields.map((field) => (
        <InputField
          key={field.serialNumber}
          { ...field }
          activeTab={activeTab}
          handleSetTab={handleSetTab}
        />
      ))}

      <Controls isActive={activeTab !== valueForm.firstButton} />

      <ButtonAuth
        isActive={activeTab !== valueForm.firstButton}
        onClick={() => handleSetTabAndForm(true)}
        title='Sign In'
      />

      <ButtonAuth
        isActive={activeTab !== valueForm.firstButton}
        onClick={() => handleSetTabAndForm(false)}
        title='Sign Up'
      />
    </form>
  );
}