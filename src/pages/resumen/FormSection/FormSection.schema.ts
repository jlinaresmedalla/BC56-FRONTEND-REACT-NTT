import { ShippingFormValues } from "./FormSection";

const CELLPHONE_FORMAT = /^\d+$/;
const NAME_FORMAT = /^[a-zA-Z\s]+$/;

export const shippingFormSchema = (values: ShippingFormValues) => {
  const errors: Partial<Record<keyof ShippingFormValues, string>> = {};
  const { firstName, lastName, district, address, reference, phone } = values;

  if (!NAME_FORMAT.test(firstName)) errors.firstName = "Solo ingresar letras en este campo";
  if (firstName.length > 50) errors.firstName = "Máximo 50 caracteres";
  if (!firstName) errors.firstName = "Campo obligatorio";

  if (!NAME_FORMAT.test(lastName)) errors.lastName = "Solo ingresar letras en este campo";
  if (lastName.length > 50) errors.lastName = "Máximo 50 caracteres";
  if (!lastName) errors.lastName = "Campo obligatorio";

  if (!district) errors.district = "Campo obligatorio";

  if (address.length > 100) errors.address = "Máximo 100 caracteres";
  if (!address) errors.address = "Campo obligatorio";

  if (reference.length > 100) errors.reference = "Máximo 100 caracteres";
  if (!reference) errors.reference = "Campo obligatorio";

  if (+phone[0] !== 9) errors.phone = "El número debe comenzar con 9";
  if (phone.length !== 9) errors.phone = "El número debe tener 9 dígitos";
  if (!CELLPHONE_FORMAT.test(phone)) errors.phone = "Debe ingresar un valor válido";
  if (!phone) errors.phone = "Campo obligatorio";

  return errors;
};

export const initialShippingFormvalues = {
  firstName: "",
  lastName: "",
  district: "",
  address: "",
  reference: "",
  phone: "",
};
