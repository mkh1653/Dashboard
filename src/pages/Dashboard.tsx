import Grid from "@mui/material/Grid";
import Weather from "../components/Weather";

const Dashboard: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={3}>
        <Weather />
      </Grid>
    </Grid>
  );
};

export default Dashboard;