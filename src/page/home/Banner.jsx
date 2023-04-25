import React from "react";
import {
  Box,  
  IconButton,
  useMediaQuery,
  
} from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";

// import all image from assets;
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../asset/carousel-img", false, /\.(png|jpe?g|svg)$/)
);


const MainCarousel = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon
            sx={{
              fontSize: 40,
              color: "#5C5C5C"
            }}
          />
        </IconButton>
    )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon
            sx={{
              fontSize: 40,
              color: "#5C5C5C"
            }}
          />
        </IconButton>
    )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              width: {lg:"100%", md:"768px", sm:"481px", xs:"375px"},
              height: "auto",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />         
        </Box>
      ))}
    </Carousel>
  );
};

export default MainCarousel;