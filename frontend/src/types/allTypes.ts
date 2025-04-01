import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type Client = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  data_cadastro: string;
};

export type CreateClientDTO = {
  nome: string;
  email: string;
  telefone: string;
};

export type CustomInputProps = {
  placeholder?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  type?: string;
  size?: string;
  variant?: string;
  color?: string;
  leftIcon?: ReactNode;
  id?: string;
  isRequired?: boolean;
  borderColor: string;
  width: string;
  height: string;
  padding?: string;
  register: UseFormRegisterReturn;
  margin?: string;
  defaultValue?: string;
};
