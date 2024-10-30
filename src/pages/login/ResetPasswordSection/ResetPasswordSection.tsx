import { Modal } from "@/components";
import { Button, Input } from "@/components/UI";
import { useResetPasswordController } from "../hooks/useResetPasswordController";

export const ResetPasswordSection = () => {
  const { isModalOpen, openModal, closeModal, handleChange, errors, touched, handleSubmit } =
    useResetPasswordController();

  return (
    <>
      <span
        className="login-reset-password subtitle"
        onClick={() => {
          openModal();
        }}
      >
        ¿Olvidé contraseña?
      </span>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="login-reset-password-modal">
          <center>
            <h3>Resetea tu contraseña</h3>
            <span>Ingresa tu correo electrónico</span>
          </center>
          <Input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            onChange={handleChange}
            error={touched.email ? errors.email : ""}
          />
          <center>
            <Button type="submit" onClick={() => handleSubmit()}>
              Enviar
            </Button>
            <Button variant="danger" onClick={() => closeModal()}>
              Cancelar
            </Button>
          </center>
        </div>
      </Modal>
    </>
  );
};
