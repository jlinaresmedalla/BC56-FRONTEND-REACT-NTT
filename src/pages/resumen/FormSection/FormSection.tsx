import { Button, HelperText, Input, Select } from "@/components/UI";
import { initialShippingFormvalues, shippingFormSchema } from "./FormSection.schema";
import { useCartContext } from "@/hooks/cart.hooks";
import { getShippingInfoMapper } from "@/mappings/cart.mapper";
import { useDistrictListQuery } from "@/hooks/useDistrictListQuery";
import { useModal } from "@/hooks/modal.hooks";
import { Modal } from "@/components";
import { useNavigate } from "react-router-dom";
import { resetCart } from "@/actions/cart.actions";
import { useFormik } from "formik";
import { PrivateRoutes } from "@/enums";
import "./FormSection.css";

export interface ShippingFormValues {
  firstName: string;
  lastName: string;
  district: string;
  address: string;
  reference: string;
  phone: string;
}

export const FormSection = () => {
  const navigate = useNavigate();
  const { cartState, dispatch } = useCartContext();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { data: districtList } = useDistrictListQuery();

  const { values, errors, touched, handleSubmit, handleChange, isSubmitting } = useFormik<ShippingFormValues>({
    initialValues: initialShippingFormvalues,
    validationSchema: shippingFormSchema,
    onSubmit: (values, { resetForm }) => {
      if (!cartState.length) return;

      const body = getShippingInfoMapper(values, cartState);
      console.log(body);
      openModal();
      resetCart(dispatch);
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
              error={touched.lastName ? errors.lastName : ""}
            />
          </span>
          <span className="shipping-form-field">
            <label className="title">Distrito*</label>
            <Select
              name="district"
              options={districtList!}
              valueKey={"value"}
              labelKey={"label"}
              staticLabel="Selecciona tu distrito"
              value={values.district}
              onChange={handleChange}
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
          <h3 className="primary-text-color">
            <center>Su compra se realizó con exito! 🎉</center>
          </h3>
          <Button variant="secondary" onClick={() => navigate(PrivateRoutes.Dashboard)}>
            Aceptar
          </Button>
        </div>
      </Modal>
    </section>
  );
};
