import { shippingFormValuesMock } from "@/__mocks__/form.mocks";
import { shippingFormSchema } from "../FormSection/FormSection.schema";

describe("ResumenFormSection Schema", () => {
  it("should validate a correct schema", async () => {
    const result = await shippingFormSchema.validate(shippingFormValuesMock);
    expect(result).toEqual(shippingFormValuesMock);
  });
});
