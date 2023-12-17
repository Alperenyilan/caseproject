import InfoIcon from "@mui/icons-material/Info";
import { Box } from "@mui/material";
import { useState } from "react";

function GoInfoUrl({ selectedHero }) {
  const [urlDetail, setUrlDetail] = useState();

  const UrlClick = (event) => {
    event.preventDefault(); // Linkin varsayılan davranışını engelle

    const url = selectedHero?.urls?.find((url) => url.type === "detail");
    if (url) {
      setUrlDetail(url.url);
      window.open(url.url, "_blank");
    }
  };

  return (
    <Box
      height={"50px"}
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"flex-end"}
      paddingRight={"15px"}
      component="a"
      href={urlDetail} // href özelliğini URL olarak ayarla
      target="_blank"
      rel="noopener noreferrer"
      onClick={UrlClick}
    >
      <InfoIcon />
      <Box sx={{ paddingLeft: "5px", fontSize: "15px" }}>Daha Fazla Bilgi</Box>
    </Box>
  );
}

export default GoInfoUrl;
