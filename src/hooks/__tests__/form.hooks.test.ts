import { ShippingFormValues } from "@/pages/resumen/FormSection/FormSection";
import { useForm } from "../form.hooks";
import { act, renderHook } from "@testing-library/react";
import { initialShippingFormvalues, shippingFormSchema } from "@/pages/resumen/FormSection/FormSection.schema";

const onSubmitMock = jest.fn();
const initialValues = initialShippingFormvalues;

const renderFormHook = async (validationSchema = shippingFormSchema) => {
  const results = act(async () =>
    renderHook(() => useForm<ShippingFormValues>({ initialValues, validationSchema, onSubmit: onSubmitMock })),
  );
  return results;
};

describe("useForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with initialValues", async () => {
    const { result } = await renderFormHook();

    expect(result.current.values).toEqual(initialValues);
    expect(result.current.errors).toEqual({});
    expect(result.current.touched).toEqual({});
    expect(result.current.isSubmitting).toBe(false);
  });

  it("should update values on handleChange", async () => {
    const { result } = await renderFormHook();
    const event = { target: { name: "firstName", value: "Juan Alvaro" } } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(event);
    });

    expect(result.current.values.firstName).toBe("Juan Alvaro");
    expect(result.current.touched.firstName).toBe(true);
  });

  it("should validate values on handleChange", async () => {
    const { result } = await renderFormHook();
    const event = { target: { name: "firstName", value: "123" } } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(event);
    });

    expect(result.current.errors.firstName).toBe("Solo ingresar letras en este campo");
  });

  it("should reset form on resetForm", async () => {
    const { result } = await renderFormHook();
    const event = { target: { name: "firstName", value: "Juan Alvaro" } } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleChange(event);
      result.current.resetForm();
    });

    expect(result.current.values).toEqual(initialValues);
    expect(result.current.errors).toEqual({});
    expect(result.current.touched).toEqual({});
  });

  it("should handle form submission", async () => {
    const mockValidationSchema = jest.fn(() => ({}));
    const { result } = await renderFormHook(mockValidationSchema);
    const event = { preventDefault: jest.fn() } as unknown as React.FormEvent<HTMLFormElement>;

    await act(async () => {
      result.current.handleSubmit(event);
    });

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
    expect(onSubmitMock).toHaveBeenCalledWith(initialValues, expect.any(Function));
    expect(result.current.isSubmitting).toBe(false);
  });

  it("should not submit form with validation errors", async () => {
    const { result } = await renderFormHook();
    const event = { preventDefault: jest.fn() } as unknown as React.FormEvent<HTMLFormElement>;

    act(() => {
      result.current.handleSubmit(event);
    });

    expect(result.current.errors.firstName).toBe("Campo obligatorio");
    expect(result.current.errors.lastName).toBe("Campo obligatorio");
    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});
