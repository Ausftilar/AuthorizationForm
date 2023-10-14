import { useState, KeyboardEvent } from "react";
import {
  SIGN_IN_DATA,
  SIGN_UP_DATA,
  SIGN_IN_VALUE,
  SIGN_UP_VALUE,
} from "../../constants";

export function useAuthorization() {
  const [activeTab, setActiveTab] = useState(SIGN_IN_VALUE.firstButton);
  const [formFields, setFormFields] = useState(SIGN_UP_DATA);
  const [valueForm, setValueForm] = useState(SIGN_IN_VALUE);

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Tab" || event.key === "Enter") {
      event.preventDefault();
  
      if (event.shiftKey) {
        // Если зажата клавиша Shift, то переключаем на таб назад.
        setActiveTab((prevTab) => (prevTab > valueForm.firstTab ? prevTab - valueForm.step : valueForm.firstButton));
      } else {
        // Иначе переключаем на следующий таб.
        setActiveTab((prevTab) => (prevTab < valueForm.lastTab ? prevTab + valueForm.step : valueForm.firstTab));
      }
    }
  };

  function handleSetTab(tabNumber: number) {
    setActiveTab(tabNumber);
  }

  function handleSetTabAndForm(isSignIn: boolean) {
    setActiveTab(valueForm.firstTab);
    setFormFields(isSignIn ? SIGN_IN_DATA : SIGN_UP_DATA);
    setValueForm(isSignIn ? SIGN_IN_VALUE : SIGN_UP_VALUE)
  }

  return {
    activeTab,
    formFields,
    valueForm,
    handleKeyDown,
    handleSetTab,
    handleSetTabAndForm,
  }
}