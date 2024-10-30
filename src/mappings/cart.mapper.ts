import { Cart } from "@/interfaces";
import { ShippingFormValues } from "@/pages/resumen/FormSection/FormSection";
import { clearSpaces } from "@/utils/app.utils";

export const getShippingInfoMapper = (shippingFormValues: ShippingFormValues, cart: Cart) => {
  const { firstName, lastName, district, address, phone, reference } = shippingFormValues;

  const compra = cart.map(({ id, quantity }) => ({ id, quantity }));

  return {
    nombres: clearSpaces(firstName),
    apellidos: clearSpaces(lastName),
    distrito: district,
    direccion: clearSpaces(address),
    referencia: clearSpaces(reference),
    celular: +clearSpaces(phone),
    compra,
  };
};
