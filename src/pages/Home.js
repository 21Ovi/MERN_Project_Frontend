import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Home = () => {
  const registerNewComplaintHandler = () => {
    window.location.href = "/newComplaint";
  };

  const getAllComplaints = () => {
    window.location.href = "/getAllComplaints";
  };

  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Div>{"Complaint Management System By Ayan Khan Pathan"}</Div>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Item>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Register A New Complaint
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      How do you explain a complaint?
                    </Typography>
                    <Typography variant="body2">
                      An effective complaint often has three steps: explaining
                      the problem; stating your feelings; and asking for action.
                      The first step is to explain the problem. To do it
                      effectively, you must use polite, respectful language. In
                      English, polite language is usually indirect
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" onClick={registerNewComplaintHandler}>
                      Register Now
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      See All The Complaints
                    </Typography>
                    <Typography variant="body2">
                      Complaints about drainage, lighting etc...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" onClick={getAllComplaints}>
                      Get All The Complaints
                    </Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
