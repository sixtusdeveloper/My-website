"use client";

import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Form } from "react-hook-form";
import { FormFieldType } from "@/components/ContactForm";
import { Textarea } from "@/components/ui/textarea";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, placeholder } = props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            className="shad-input px-4 py-3"
          />
        </FormControl>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            {...field}
            className="shad-textArea"
            disabled={props.disabled}
          />
        </FormControl>
      );

    default:
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className="block text-start text-sm font-medium">
              {label}
            </FormLabel>
          )}

          <RenderField field={field} props={props} />
          <FormMessage className="text-yellow-500 text-start text-sm mt-1" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
