import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";

const FormInput = ({
  name,
  label,
  value,
  type,
  multiline,
  rows,
  error,
  onChange
}) => {
  return (
    <FormControl margin="normal" fullWidth error={error ? true : false}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        multiline={multiline}
        rows={rows}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default FormInput;
