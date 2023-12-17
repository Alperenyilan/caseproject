/* eslint-disable react/prop-types */
import { Box } from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

const Headers = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
  };
  return (
    <Box
      sx={{
        bgcolor: "#000000",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        boxSizing: "border-box",
        position: "sticky",
        top: "0",
        zIndex: "999",
      }}
    >
      <Box
        // className="custom-box"
        height={"70px"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 70,
            // display: "flex",
            padding: "5px",
            width: "100%",
            cursor: "pointer",
          }}
          alt="char"
          src="static/marvellogo.svg"
          onClick={handleClick}
        />
        {/* Bundan sonrası search ile ilgili formun bitisine kadar */}
      </Box>
    </Box>
  );
};

export default Headers;
