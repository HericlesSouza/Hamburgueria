import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { iLoginUser } from "../../../contexts/UserContext/types";
import { ButtonStyled } from "../../../styles/Button";
import { StyledForm } from "../../../styles/Form";
import { StyledInput } from "../../../styles/Input";
import { loginSchema } from "./loginSchema";
import { StyledDiv } from "./style";

export const FormLogin = () => {
  const { registerError, setRegisterError, userLogin } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginUser>({
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginUser> = async (data) => {
    setRegisterError(false);
    userLogin(data);
  };

  return (
    <StyledForm margin="30px" onSubmit={handleSubmit(submit)} noValidate>
      <StyledDiv>
        <h1>Login</h1>
        <div className="input-content">
          <StyledInput>
            <input
              type="text"
              className={errors.email && "error"}
              required
              {...register("email")}
            />
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

          <StyledInput className={errors.email && "div-error"}>
            <input
              type="password"
              className={errors.password && "error"}
              required
              {...register("password")}
            />
            {errors.password && (
              <p className="error-span paragraph">{errors.password.message}</p>
            )}
            {registerError && (
              <p className="error-span paragraph">E-mail ou senha inválidos!</p>
            )}
            <span className={errors.password && "error-span"}>Senha</span>
          </StyledInput>

          <ButtonStyled
            type="submit"
            buttonColor="btnGreen"
            buttonSize="medium"
            className={
              errors.password && registerError
                ? "div-error2"
                : registerError
                ? "div-error"
                : errors.password
                ? "div-error"
                : undefined
            }
          >
            Logar
          </ButtonStyled>
          <p className="paragraph-account">
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </p>
          <Link to={"/register"} onClick={() => setRegisterError(false)}>
            Cadastrar
          </Link>
        </div>
      </StyledDiv>
    </StyledForm>
  );
};
