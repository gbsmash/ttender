import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div>
      <MUIBreadcrumbs aria-label="breadcrumb" >
        <Link style={{color:"#3160D0"}} to="/"> Home</Link>
        
        {pathnames.map((name, index) => {
          const last = index === pathnames.length - 1;
          const LinkTo = `/${pathnames.slice(0, index + 1).join("/")}`;

          return last ? (
            <Typography key={LinkTo}>
              {name}
            </Typography>
          ) : (
            <Link style={{color:"#3160D0"}} to={LinkTo} key={LinkTo}>
              {name}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </div>
  );
}

export default Breadcrumbs;
