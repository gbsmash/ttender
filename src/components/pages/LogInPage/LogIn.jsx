import React from "react";
import {
  CenteredPageWrapper,
  CentralContainer,
  Heading,
  StyledForm,
  LoginRow,
  LoginCol,
  BlueSpan,
  GraySpan,
  BlueButton,
  AsideLink,
  AsideDiv,
  PageWrapper,
} from "./LoginElements";
import TenderIcon from "../../icons/TenderIcon";

import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { FormControlLabel } from "@mui/material";
import { TextField } from "@mui/material";
import { Checkbox } from "@mui/material";

import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { authContext } from "../../authentication";
import axios from "axios";

import { useTranslation } from "react-i18next";
import { LangContext } from "../../../App";

function LogIn() {
  const { currentLang, setCurrentLang } = useContext(LangContext);

  const { t } = useTranslation();

  const { authentication, setAuthentication } = useContext(authContext);
  const userRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setsuccess] = useState(false);

  const printOut = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://backendfortender.herokuapp.com/auth/login`,
        { email, password }
      );
      console.log(JSON.stringify(response?.data));
      console.log(response);

      setAuthentication({ email, password });
    } catch (error) {
      if (error.response?.statusCode === 404) {
        setError("Missing E-mail or Password");
      } else {
        setError("Login Failed");
      }
      errorRef.current.focus();
    }
    console.log(authentication);
    console.log(email);
  };

  return (
    <PageWrapper className="login-page-wrapper">
      <LoginRow style={{ padding: "1.5rem 3rem" }}>
        <ArrowBackOutlinedIcon style={{ color: "white" }} />
        <AsideLink to="/" lang={currentLang}>
          {t("back_to_main")}
        </AsideLink>
      </LoginRow>
      <CenteredPageWrapper>
        {success ? (
          <LoginRow>
            <Heading>
              {t("welcome_back")}, {}
            </Heading>
          </LoginRow>
        ) : (
          <CentralContainer>
            <TenderIcon width="86" height="19" />
            <Heading lang={currentLang}>{t("login_heading")}</Heading>

            <StyledForm onSubmit={handleSubmit} className="login-form">
              <TextField
                id="email"
                ref={userRef}
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
                label="E-mail"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                  type: "email",
                }}
                style={{ width: "100%" }}
              />

              <TextField
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                required
                label="Password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LockOutlinedIcon />
                    </InputAdornment>
                  ),
                  type: "password",
                }}
                style={{ width: "100%" }}
              />

              <LoginRow justifyContent="space-between">
                <LoginCol alignItems="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        className="remember-me"
                        size="small"
                        defaultChecked
                        style={{ padding: "0" }}
                      />
                    }
                    label={<GraySpan>{t("remember_me")}</GraySpan>}
                    style={{ margin: 0 }}
                  />
                </LoginCol>

                <LoginCol alignItems="center">
                  <BlueSpan fontSize="14px"> {t("forgot_password")} </BlueSpan>
                </LoginCol>
              </LoginRow>

              <BlueButton lang={currentLang}>{t("log_in")}</BlueButton>

              <LoginRow justifyContent="center">
                <GraySpan>{t("dont_have_an_acc")}</GraySpan>
                <Link to="/SignUp" style={{ display: "flex" }}>
                  <BlueSpan fontSize="14px">{t("sign_up")}</BlueSpan>
                </Link>
              </LoginRow>
            </StyledForm>

            <p ref={errorRef} className="error">
              {error}
            </p>
          </CentralContainer>
        )}
      </CenteredPageWrapper>
    </PageWrapper>
  );
}

export default LogIn;
