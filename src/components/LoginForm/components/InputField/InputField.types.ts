export interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  activeTab: number;
  serialNumber: number;
  title: string,
  handleSetTab: (tabNumber: number) => void,
}