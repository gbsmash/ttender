import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment/moment";

import Breadcrumbs from "../../commonComponents/Breadcrumbs";
import NavBar from "../../navbar";
import Footer from "../../Footer";
import Loading from "../../Loading";

import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import {
  CategoriesContainer,
  Category,
  PageTitle,
  PageWrapper,
  SectionWrapper,
  TenderBox,
  TenderBoxCol,
  TenderDetails,
} from "./TendersElements";

function Tenders() {
  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState([]);
  const [postsByTime, setPostsByTime] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluc2hAbWFpbC5ydSIsImlkIjoxNiwicm9sZXMiOlt7ImlkIjoyLCJ2YWx1ZSI6IkFkbWluIiwiZGVzY3JpcHRpb24iOiJBbGwgcHJpdi4iLCJjcmVhdGVkQXQiOiIyMDIyLTA3LTI2VDE2OjE3OjA5LjA5MloiLCJ1cGRhdGVkQXQiOiIyMDIyLTA3LTI2VDE2OjE3OjA5LjA5MloiLCJVc2VyUm9sZXMiOnsiaWQiOjE1LCJyb2xlSWQiOjIsInVzZXJJZCI6MTZ9fV0sImlhdCI6MTY2NTA3MTAwNywiZXhwIjoxNjY1MTU3NDA3fQ.3bNDARaKrn9MKC17rO-wKT1UwgKXO76Y-Caez5Xsaw4";
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://backendfortender.herokuapp.com/categories/all`)
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://backendfortender.herokuapp.com/posts`)
      .then((response) => {
        setPostsByTime(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(postsByTime);

  const cat = Array(25).fill("Construction equipment and materials");

  return (
    <PageWrapper>
      {loading ? (
        <Loading />
      ) : (
        <PageWrapper>
          <NavBar />
          <SectionWrapper>
            <Breadcrumbs
              className="tenders-breadcrumbs"
              style={{ paddingLeft: "2rem" }}
            />
            <PageTitle>Tenders</PageTitle>

            <CategoriesContainer>
              {cat.map((name, index) => {
                return (
                  <Link to="/" key={index}>
                    <Category>
                      {" "}
                      {name}{" "}
                      <ArrowForwardIosIcon
                        fontSize="1rem"
                        style={{ color: "#3160D0" }}
                      />{" "}
                    </Category>
                  </Link>
                );
              })}
            </CategoriesContainer>
          </SectionWrapper>

          <SectionWrapper>
            {postsByTime.map((tender) => {
              return (
                <TenderBox key={tender.id}>
                  <TenderDetails
                    fontSize="14px"
                    color="#BEBDBD"
                    style={{ gridArea: "Tender" }}
                  >
                    Tender : {tender.id}
                  </TenderDetails>

                  <TenderDetails
                    fontSize="1rem"
                    color="black"
                    style={{ gridArea: "Title" }}
                  >
                    {tender.title}
                  </TenderDetails>

                  <TenderDetails
                    fontSize="14px"
                    color="#BEBDBD"
                    style={{ gridArea: "Date" }}
                  >
                    {moment(tender.createdAt).format("DD.MM.YYYY")}
                  </TenderDetails>

                  <TenderDetails
                    fontSize="14px"
                    color="#BEBDBD"
                    style={{ gridArea: "Industry" }}
                  >
                    Industries
                  </TenderDetails>

                  <TenderDetails
                    fontSize="1rem"
                    color="black"
                    style={{ gridArea: "Industry-title" }}
                  >
                    {
                      categories.find(
                        (category) => category.id === tender.categoryId
                      ).title
                    }
                  </TenderDetails>

                  <TenderDetails
                    fontSize="24px"
                    color="black"
                    style={{ gridArea: "Price" }}
                  >
                    {tender.price}{" "}
                    <span style={{ fontSize: "24px", color: "#3160D0" }}>
                      ₼
                    </span>
                  </TenderDetails>

                  <TenderDetails
                    fontSize="14px"
                    color="black"
                    style={{ gridArea: "Deadline" }}
                  >
                    <QueryBuilderIcon
                      style={{ fontSize: "1rem", fill: "#FFC223" }}
                    />
                    Application Deadline :{" "}
                    {moment(tender.createdAt)
                      .add(14, "days")
                      .format("DD.MM.YYYY")}
                  </TenderDetails>

                  <TenderDetails
                    fontSize="14px"
                    color="black"
                    style={{ gridArea: "Location" }}
                  >
                    <LocationOnOutlinedIcon
                      style={{ fontSize: "1rem", fill: "#ABADBA" }}
                    />
                    Baku
                  </TenderDetails>
                </TenderBox>
              );
            })}
          </SectionWrapper>
          <Footer />
        </PageWrapper>
      )}
    </PageWrapper>
  );
}

export default Tenders;
