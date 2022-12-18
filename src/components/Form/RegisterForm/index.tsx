import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { iRegisterUser } from "../../../contexts/UserContext/types";
import { ButtonStyled } from "../../../styles/Button";
import { StyledForm } from "../../../styles/Form";
import { StyledInput } from "../../../styles/Input";
import { StyledDiv } from "./style";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export const FormRegister = () => {
  const { userRegister, registerError, setRegisterError } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iRegisterUser>({
    mode: "onSubmit",
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterUser> = async (data) => {
    setRegisterError(false);

    delete data.passwordConfirmed;

    userRegister(data);

    reset({
      email: "",
      password: "",
      passwordConfirmed: "",
    });
  };

  return (
    <StyledForm margin="30px" onSubmit={handleSubmit(submit)} noValidate>
      <StyledDiv>
        <div className="div-header">
          <h1>Cadastro</h1>
          <Link to={"/"} onClick={() => setRegisterError(false)}>
            Retornar para o login
          </Link>
        </div>
        <div className="input-content">
          <StyledInput>
            <input
              type="text"
              className={errors.name && "error"}
              required
              {...register("name")}
            />
            {errors.name && (
              <p className="error-span paragraph">{errors.name.message}</p>
            )}
            <span className={errors.name && "error-span"}>Nome</span>
          </StyledInput>

          <StyledInput className={errors.name && "div-error"}>
            <input
              type="text"
              className={
                errors.email ? "error" : registerError ? "error" : undefined
              }
              required
              {...register("email")}
            />
            {registerError && (
              <p className="error-span paragraph">
                Endereço de e-mail já existe!
              </p>
            )}
            {errors.email && (
              <p className="error-span paragraph">{errors.email.message}</p>
            )}
            <span
              className={
                errors.email
                  ? "error-span"
                  : registerError
                  ? "error-span"
                  : undefined
              }
            >
              Email
            </span>
          </StyledInput>

          <StyledInput
            className={
              errors.email && registerError
                ? "div-error2"
                : registerError
                ? "div-error"
                : errors.email
                ? "div-error"
                : undefined
            }
          >
            <input
              type="password"
              className={errors.password && "error"}
              required
              {...register("password")}
            />
            {errors.password && (
              <p className="error-span paragraph">{errors.password.message}</p>
            )}
            <span className={errors.password && "error-span"}>Senha</span>
          </StyledInput>

          <StyledInput className={errors.password && "div-error"}>
            <input
              type="password"
              className={errors.passwordConfirmed && "error"}
              required
              {...register("passwordConfirmed")}
            />
            {errors.passwordConfirmed && (
              <p className="error-span paragraph">
                {errors.passwordConfirmed.message}
              </p>
            )}
            <span className={errors.passwordConfirmed && "error-span"}>
              Confirmar senha
            </span>
          </StyledInput>

          <ButtonStyled
            className={errors.passwordConfirmed && "div-error"}
            buttonColor="btnGrey"
            buttonSize="medium"
          >
            Cadastrar
          </ButtonStyled>
        </div>
      </StyledDiv>
    </StyledForm>
  );
};
