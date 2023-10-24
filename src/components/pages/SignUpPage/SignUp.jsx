import React from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  PageWrapper,
  CenteredPageWrapper,
  CentralContainer,
  AsideLink,
  LoginRow,
  Heading,
  GraySpan,
  BlueSpan,
} from "../LogInPage/LoginElements";
import { SubHeading, GridForm, BlueButton, ErrorP } from "./SignupElements";
import TenderIcon from "../../icons/TenderIcon";
import { LangContext } from "../../../App";

import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { TextField } from "@mui/material";

import { Link } from "react-router-dom";

import { useState, useRef, useEffect } from "react";
import axios from "axios";

function SignUp() {
  const { currentLang, setCurrentLang } = useContext(LangContext);
  const { t } = useTranslation();

  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [age, setAge] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    password && confirmPassword
      ? setPasswordMatch(password === confirmPassword)
      : setPasswordMatch(true);
  }, [password, confirmPassword, passwordMatch]);

  useEffect(() => {
    setErrorMessage("");
  }, [name, surname, email, password, passwordMatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://backendfortender.herokuapp.com/auth/registration`,
        JSON.stringify({ email, password, name, surname }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      setSuccess(true);
      // setUser("");
      setPassword("");
    } catch (err) {
      if (!err?.response) {
        setErrorMessage("No Server Response");
      } else {
        setErrorMessage(err.response.data.message);
      }
    }
  };

  return (
    <PageWrapper className="signup-page-wrapper">
      <LoginRow className="signup-row" style={{ padding: "1.5rem 3rem" }}>
        <ArrowBackOutlinedIcon style={{ color: "white" }} />
        <AsideLink to="/" lang={currentLang}>
          {t("back_to_main")}
        </AsideLink>
      </LoginRow>

      <CenteredPageWrapper>
        <CentralContainer gap="1.5rem">
          <TenderIcon width="86" height="19" />
          <Heading lang={currentLang}>{t("sign_up")}</Heading>
          <LoginRow flexDirection="column">
            <SubHeading>{t("fill_form")}</SubHeading>
          </LoginRow>

          <GridForm onSubmit={handleSubmit} className="signup-form">
            <TextField
              id="name"
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              value={name}
              required
              label="Name"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <AccountCircleOutlinedIcon />
                  </InputAdornment>
                ),
                type: "text",
              }}
              style={{ width: "100%" }}
            />

            <TextField
              id="surname"
              onChange={(e) => setSurname(e.target.value)}
              autoComplete="off"
              value={surname}
              required
              label="Surname"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <BadgeOutlinedIcon />
                  </InputAdornment>
                ),
                type: "text",
              }}
              style={{ width: "100%" }}
            />

            <TextField
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
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
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
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

            <TextField
              id="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="off"
              value={confirmPassword}
              required
              label="Confirm password"
              variant="outlined"
              error={passwordMatch ? false : true}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {confirmPassword && password ? (
                      passwordMatch ? (
                        <CheckCircleIcon />
                      ) : (
                        <CancelIcon style={{ color: "#d32f2f" }} />
                      )
                    ) : (
                      ""
                    )}
                  </InputAdornment>
                ),
                type: "password",
              }}
              style={{ width: "100%" }}
            />

            <BlueButton
              type="submit"
              lang={currentLang}
              style={{ whiteSpace: "no-wrap" }}
            >
              {t("create_an_acc")}
            </BlueButton>
          </GridForm>

          <LoginRow justifyContent="center" flexDirection="column">
            <ErrorP
              ref={errorRef}
              className={passwordMatch ? "noDisplay" : "errorMessage"}
            >
              Passwords don't match
            </ErrorP>
            <ErrorP
              ref={errorRef}
              className={errorMessage ? "errorMessage" : "noDisplay"}
            >
              {errorMessage}
            </ErrorP>
          </LoginRow>

          <LoginRow justifyContent="center">
            <GraySpan>{t("already_signed")}</GraySpan>
            <BlueSpan fontSize="0.875rem">
              <Link to="/LogIn">{t("log_in")}</Link>
            </BlueSpan>
          </LoginRow>
        </CentralContainer>
      </CenteredPageWrapper>
    </PageWrapper>
  );
}

export default SignUp;
