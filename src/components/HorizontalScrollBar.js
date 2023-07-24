import { useContext } from "react";
import { Box, Typography, Stack } from "@mui/material";
// import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import Icon from "../assets/icons/gym.png";
import ExerciseCard from "./ExerciseCard";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyPart ? (
            <Stack
              type="button"
              alignItems="center"
              justifyContent="center"
              className="bodyPart-card"
              sx={{
                borderTop: bodyPart === item ? "4px solid #FF2625" : "",
                backgroundColor: "#FFFFFF",
                borderBottomLeftRadius: "20px",
                width: "270px",
                height: "280px",
                gap: "47px",
                cursor: "pointer",
              }}
              onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
              }}
            >
              <img
                src={Icon}
                alt="dumbbell"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              <Typography
                fontSize="24px"
                fontWeight="bold"
                color="#3A1212"
                textTransform="capitalize"
              >
                {item}
              </Typography>
            </Stack>
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
