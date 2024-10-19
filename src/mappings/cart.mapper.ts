import { Cart } from "@/interfaces";
import { ShippingFormValues } from "@/pages/resumen/FormSection/FormSection";

export const getShippingInfoMapper = (shippingFormValues: ShippingFormValues, cart: Cart) => {
  const { firstName, lastName, district, address, phone, reference } = shippingFormValues;

  const compra = cart.map(({ id, quantity }) => ({ id, quantity }));

  return {
    nombres: firstName.trim(),
    apellidos: lastName.trim(),
    distrito: district,
    direccion: address.trim(),
    referencia: reference.trim(),
    celular: +phone.trim(),
    compra,
  };
};
