import { ChangeEvent, FormEvent, useState } from "react";

interface UseFormProps<T> {
  initialValues: T;
  validationSchema: (values: T) => Partial<Record<keyof T, string>>;
  onSubmit: (values: T, resetForm: () => void) => void | Promise<(values: T, resetForm: () => void) => void>;
}

export const useForm = <T>({ initialValues, onSubmit, validationSchema }: UseFormProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getAllFieldsTouched = () =>
    Object.keys(values as object).reduce(
      (acc, key) => {
        acc[key as keyof T] = true;
        return acc;
      },
      {} as Record<keyof T, boolean>,
    );

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newValue = { ...values, [name]: value };

    if (!touched[name as keyof T]) {
      setTouched({
        ...touched,
        [name]: true,
      });
    }

    const validationErrors = validationSchema(newValue);
    if (validationErrors) setErrors(validationErrors);

    setValues(newValue);
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched(getAllFieldsTouched());

    const validationErrors = validationSchema(values);
    setErrors(validationErrors);

    if (!Object.keys(validationErrors).length) {
      setIsSubmitting(true);
      await onSubmit(values, resetForm);
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
