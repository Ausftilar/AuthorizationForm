import { useState, ChangeEvent } from 'react';
import { useInputProps } from './useInput.types';

export function useInput({
  init,
  maskChange,
  maskClick,
  message = '',
}: useInputProps) {
  const [value, setValue] = useState(String(init));
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    if (isError) {
      setIsError(false);
      setErrorMessage('');
    }

    const getValue = event.target.value;

    if (!maskChange) {
      setValue(getValue);
    }

    if (maskChange?.test(getValue) || getValue === '') {
      setValue(getValue);
    }
  }

  function setValueInField(value: number | string) {
    setIsError(false);
    setErrorMessage('');
    setValue(String(value ? value : ''));
  }

  function checkValidate() {
    if (maskClick && !maskClick.test(value)) {
      setIsError(true);
      setErrorMessage(message);
    }
  }

  return {
    value,
    onChange,
    setValueInField,
    isError,
    errorMessage,
    checkValidate,
  };
}
