import { useModal } from "@/hooks/modal.hooks";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { resetPasswordValidationSchema } from "../Loginpage.schema";

export const useResetPasswordController = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const { handleChange, errors, touched, handleSubmit } = useFormik({
    initialValues: { email: "" },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: (data) => {
      console.log(data.email);
      toast.success("Se envió la información al correo ingresado");
      closeModal();
    },
  });

  return { handleChange, errors, touched, handleSubmit, isModalOpen, openModal, closeModal };
};
