import * as yup from "yup";

export const loginValidationSchema = yup.object({
  username: yup.string().required("Campo obligatorio"),
  password: yup.string().required("Campo obligatorio"),
});

export const resetPasswordValidationSchema = yup.object({
  email: yup.string().email("Ingresar formato válido").required("Campo obligatorio"),
});
