import { Box, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.scss";
function HomePage({ heros }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="featured">
        <h1>Featured Characters and Image</h1>
      </div>
      <Grid className="container">
        {heros?.map((hero) => (
          <Grid className="item" key={hero.id}>
            <Box
              onClick={() => navigate("/info/" + hero.id)}
              className="BoxElement"
            >
              <Box className="BoxElementIn ">
                <img
                  src={hero?.thumbnail?.path + "." + hero?.thumbnail?.extension}
                  alt="1"
                  className="imgElement"
                />
              </Box>

              <Box className="boxElementGeneral">{hero.name}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default HomePage;
