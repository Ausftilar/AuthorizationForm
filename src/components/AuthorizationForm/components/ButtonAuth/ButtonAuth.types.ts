import { MouseEventHandler } from "react";

export interface ButtonAuthProps {
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  title: string,
}