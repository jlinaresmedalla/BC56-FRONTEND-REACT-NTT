import { invalidShippingFormValuesMock } from "@/__mocks__/form.mocks";
import { shippingFormSchema } from "../FormSection/FormSection.schema";

describe("ResumenFormSection Schema", () => {
  it("should validate a correct schema for fields length > 100", () => {
    const result = shippingFormSchema(invalidShippingFormValuesMock);
    expect(result).toEqual({
      firstName: "Máximo 50 caracteres",
      lastName: "Máximo 50 caracteres",
      address: "Máximo 100 caracteres",
      reference: "Máximo 100 caracteres",
    });
  });
});
