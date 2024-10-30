import { ShippingFormValues } from "@/pages/resumen/FormSection/FormSection";

export const shippingFormValuesMock: ShippingFormValues = {
  firstName: "Juan",
  lastName: "Linares",
  district: "Ate",
  address: "Calle Galicias 123",
  phone: "989898989",
  reference: "Frente al mall",
};

export const shippingFormBodyMock = {
  nombres: "Juan",
  apellidos: "Linares",
  distrito: "Ate",
  direccion: "Calle Galicias 123",
  referencia: "Frente al mall",
  celular: 989898989,
  compra: [{ id: 1, quantity: 2 }],
};

export const invalidShippingFormValuesMock: ShippingFormValues = {
  firstName:
    "texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres",
  lastName:
    "texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres",
  district: "Ate",
  address:
    "texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres",
  phone: "989898989",
  reference:
    "texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres texto de mas de 100 caracteres",
};
