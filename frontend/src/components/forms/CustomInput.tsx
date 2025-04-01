import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";

import clientTheme from "../../theme";
import { CustomInputProps } from "../../types/allTypes";

export const CustomInput = ({
  placeholder = "Digite aqui...",
  isLoading = false,
  isDisabled = false,
  type = "text",
  size = "md",
  variant = "outline",
  color = "black",
  leftIcon,
  id,
  isRequired,
  borderColor,
  width,
  height,
  register,
  padding,
  margin,
  defaultValue,
}: CustomInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "file" && e.target.files) {
      register.onChange(e);
    }
  };

  return (
    <InputGroup size={size}>
      {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
      <Input
        sx={{
          "::placeholder": {
            color: clientTheme.colors.primary.gray03,
          },
        }}
        outline="none"
        required={isRequired ? isRequired : false}
        id={id ? id : ""}
        placeholder={placeholder}
        borderColor={borderColor}
        isDisabled={isDisabled || isLoading}
        type={type}
        variant={variant}
        focusBorderColor={color}
        width={width}
        height={height}
        color={color}
        defaultValue={defaultValue}
        padding={padding}
        margin={margin ? margin : ""}
        autoComplete="off"
        {...register}
        onChange={type === "file" ? handleChange : register.onChange}
      />
      {isLoading && (
        <InputRightElement>
          <Spinner size="sm" />
        </InputRightElement>
      )}
    </InputGroup>
  );
};
