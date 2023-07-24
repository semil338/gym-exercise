import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        // borderTop: bodyPart === item ? "2px solid #FF2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        gap: "47px",
        cursor: "pointer",
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
      <Typography>{item}</Typography>
    </Stack>
  );
};

export default BodyPart;
