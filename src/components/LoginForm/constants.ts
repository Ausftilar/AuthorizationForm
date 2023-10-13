export const SIGN_UP_DATA = [
  {
    id: 'input-1',
    type: 'text',
    placeholder: 'John Doe',
    title: 'Full Name',
    serialNumber: 1,
  },
  {
    id: 'input-2',
    type: 'text',
    placeholder: 'John',
    title: 'Username',
    serialNumber: 2,
  },
  {
    id: 'input-3',
    type: 'email',
    placeholder: 'email@address.com',
    title: 'Email',
    serialNumber: 3,
  },
  {
    id: 'input-4',
    type: 'password',
    placeholder: '●●●●●●',
    title: 'Password',
    serialNumber: 4,
  },
  {
    id: 'input-5',
    type: 'password',
    placeholder: '●●●●●●',
    title: 'Confirm Password',
    serialNumber: 5,
  },
];

export enum ValueForm {
  FirstTab = 1,
  LastTab = 5,
  Step = 1,
  FirstButton = 0, // FirstTab - Step
  LastButton = 6, // LastTab + Step
}