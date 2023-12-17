import { Fab, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./backButton.scss";
const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Fab class="buttonStyle" onClick={() => navigate("/")}>
      <Box class="icon-style">
        <ArrowBackIcon />
      </Box>
    </Fab>
  );
};

export default BackButton;
