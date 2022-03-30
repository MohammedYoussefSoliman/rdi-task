import React from "react";
import {
  ValidationRule,
  FieldValue,
  FieldValues,
  ValidateResult,
  Control,
} from "react-hook-form";
import { Property } from "csstype";

export type FormValidationRules = {
  required: string | ValidationRule<boolean>;
  pattern: ValidationRule<RegExp>;
  min: ValidationRule<number | string>;
  max: ValidationRule<number | string>;
  maxLength: ValidationRule<number>;
  minLength: ValidationRule<number>;
  validate: (
    value: FieldValue<FieldValues>,
  ) => ValidateResult | Promise<ValidateResult>;
};

export interface InputPropsType extends React.InputHTMLAttributes<any> {
  name: string;
  error?: string;
  width?: Property.Width;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
  variant?: "filled" | "outlined";
}

export interface CommonInputProps {
  name: string;
  label?: string;
  error?: string;
  width?: Property.Width;
}

export type OptionType = {
  label: string;
  value: string | number;
};

export type InputControllerProps = {
  control: Control<any>;
  validationRules?: Partial<FormValidationRules>;
};
