import { Button, HelperText, Input, Select } from "@/components/UI";
import { useForm } from "@/hooks/form.hooks";
import { shippingFormSchema } from "./FormSection.schema";
import { useCart } from "@/hooks/cart.hooks";
import { getShippingInfoMapper } from "@/mappings/cart.mapper";
import { useDistrictListQuery } from "@/hooks/fetch.hooks";
import { useModal } from "@/hooks/modal.hooks";
import { Modal } from "@/components";
import "./FormSection.css";
import { useNavigate } from "react-router-dom";

export interface ShippingFormValues {
  firstName: string;
  lastName: string;
  district: string;
  address: string;
  reference: string;
  phone: string;
}

const initialShippingFormvalues = {
  firstName: "",
  lastName: "",
  district: "",
  address: "",
  reference: "",
  phone: "",
};

export const FormSection = () => {
  const navigate = useNavigate();
  const { cartState, resetCart } = useCart();
  const { isModalOpen, openModal, closeModal } = useModal();
  const districtList = useDistrictListQuery();

  const { values, errors, touched, handleSubmit, handleChange, isSubmitting } = useForm<ShippingFormValues>({
    initialValues: initialShippingFormvalues,
    validationSchema: shippingFormSchema,
    onSubmit: (values, resetForm) => {
      if (!cartState.length) return;

      const body = getShippingInfoMapper(values, cartState);
      console.log(body);
      openModal();
      resetCart();
      resetForm();
    },
  });

  return (
    <section className="form-section">
      <form className="shipping-form" onSubmit={handleSubmit}>
        <h3 className="primary-text-color">
          <center>Información de envío</center>
        </h3>
        <div className="shipping-form-fields">
          <span className="shipping-form-field">
            <label className="title">Nombres*</label>
            <Input
              placeholder="Ingresa tu nombre"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleChange}
              error={touched.firstName ? errors.firstName : ""}
            />
          </span>
          <span className="shipping-form-field">
            <label className="title">Apellidos*</label>
            <Input
              placeholder="Ingresa tus apellidos"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleChange}
              error={touched.lastName ? errors.lastName : ""}
            />
          </span>
          <span className="shipping-form-field">
            <label className="title">Distrito*</label>
            <Select
              name="district"
              options={districtList}
              valueKey={"value"}
              labelKey={"label"}
              staticLabel="Selecciona tu distrito"
              value={values.district}
              onChange={handleChange}
              onBlur={handleChange}
              error={touched.district ? errors.district : ""}
            />
          </span>
          <span className="shipping-form-field">
            <label className="title">Dirección*</label>
            <Input
              placeholder="Ingresa tu dirección"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleChange}
              error={touched.address ? errors.address : ""}
            />
          </span>
          <span className="shipping-form-field">
            <label className="title">Referencia*</label>
            <Input
              placeholder="Referencia de tu dirección"
              name="reference"
              value={values.reference}
              onChange={handleChange}
              onBlur={handleChange}
              error={touched.reference ? errors.reference : ""}
            />
          </span>
          <span className="shipping-form-field">
            <label className="title">Celular*</label>
            <Input
              placeholder="Ingresa tu número"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleChange}
              error={touched.phone ? errors.phone : ""}
              maxLength={9}
            />
          </span>
        </div>
        {!cartState.length && (
          <center>
            <HelperText variant="danger" dimension="medium" message={"El carrito está vacío"} />
          </center>
        )}
        <Button type="submit" disabled={isSubmitting}>
          Comprar
        </Button>
      </form>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="succes-message-container">
          <h3>
            <center>Su compra se realizó con exito! 🎉</center>
          </h3>
          <Button onClick={() => navigate("/#products-section")}>Aceptar</Button>
        </div>
      </Modal>
    </section>
  );
};
