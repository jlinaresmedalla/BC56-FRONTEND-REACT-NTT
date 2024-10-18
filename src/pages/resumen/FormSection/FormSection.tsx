import { Button, Input, Select } from "@/components/UI";
import "./FormSection.css";

export const FormSection = () => {
  return (
    <section className="form-section">
      <form className="shipping-form" onSubmit={() => {}}>
        <h3>
          <center>Información de envío</center>
        </h3>
        <div className="shipping-form-fields">
          <span className="shipping-form-field">
            <label className="title">Nombre</label>
            <Input placeholder="Ingresa tu nombre" />
          </span>
          <span className="shipping-form-field">
            <label className="title">Apellidos</label>
            <Input placeholder="Ingresa tus apellidos" />
          </span>
          <span className="shipping-form-field">
            <label className="title">Distrito</label>
            <Select
              options={[{ value: "Lima", label: "Lima" }]}
              valueKey={"value"}
              labelKey={"label"}
              staticLabel="Selecciona tu distrito"
            />
          </span>
          <span className="shipping-form-field">
            <label className="title">Dirección</label>
            <Input placeholder="Ingresa tu dirección" />
          </span>
          <span className="shipping-form-field">
            <label className="title">Referencia</label>
            <Input placeholder="Referencia de tu dirección" />
          </span>
          <span className="shipping-form-field">
            <label className="title">Celular</label>
            <Input placeholder="Ingresa tu número" />
          </span>
        </div>
        <Button type="submit">Comprar</Button>
      </form>
    </section>
  );
};
