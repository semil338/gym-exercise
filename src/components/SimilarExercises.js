import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "0" },
      }}
    >
      <Typography variant="h3" mb={5} sx={{ ml: "20px" }}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: 2,
          position: "relative",
        }}
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar
            data={targetMuscleExercises}
            isBodyPart={false}
          />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5} sx={{ ml: "20px" }}>
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: 2,
          position: "relative",
        }}
      >
        {equipmentExercises.length ? (
          <HorizontalScrollBar
            data={targetMuscleExercises}
            isBodyPart={false}
          />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
