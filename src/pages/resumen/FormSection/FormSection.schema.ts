import * as yup from "yup";

const CELLPHONE_FORMAT = /^\d+$/;
const NAME_FORMAT = /^[a-zA-Z\s]+$/;

export const shippingFormSchema = yup.object({
  firstName: yup
    .string()
    .matches(NAME_FORMAT, "Solo ingresar letras en este campo")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obligatorio"),
  lastName: yup
    .string()
    .matches(NAME_FORMAT, "Solo ingresar letras en este campo")
    .max(50, "Máximo 50 caracteres")
    .required("Campo obligatorio"),
  district: yup.string().required("Campo obligatorio"),
  address: yup.string().max(100, "Máximo 100 caracteres").required("Campo obligatorio"),
  reference: yup.string().max(100, "Máximo 100 caracteres").required("Campo obligatorio"),
  phone: yup
    .string()
    .matches(/^9/, "El número debe comenzar con 9")
    .length(9, "El número debe tener 9 dígitos")
    .matches(CELLPHONE_FORMAT, "Debe ingresar un valor válido")
    .required("Campo obligatorio"),
});

export const initialShippingFormvalues = {
  firstName: "",
  lastName: "",
  district: "",
  address: "",
  reference: "",
  phone: "",
};
