import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loading() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px",  }}>
      <CircularProgress />
    </Box>
  );
}
export default Loading;
