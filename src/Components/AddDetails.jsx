import React, { useState, useEffect } from "react";
import "../app.css";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const theme = createTheme();

export default function AddRecipe() {
  let [state, setState] = useState({
    Name: "",
    Email: "",
    Gender: "",
    MobileNumber: "",
    JobApply: "",
    ExpectedCTC: "",
  });

  let [technicalSkills, setTechnicalSkills] = useState([]);

  let { Name, Email, Gender, MobileNumber, JobApply, ExpectedCTC } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleCheckbox = e => {
    console.log(e.target.value);
    if (e.target.checked) {
      setTechnicalSkills([...technicalSkills, e.target.value]);
      // technicalSkills.push(e.target.value)
    } else {
      if (e.target.checked === false) {
        let i = technicalSkills.indexOf(e.target.value);
        technicalSkills.splice(i, 1);
      }
    }
  };
  // console.log(technicalSkills)

  // const checkBocHandler = (status, option) => {
  //   setTechnicalSkills
  // }

  let handleSubmit = e => {
    e.preventDefault();
    console.log(state);

    // let phone = '1234567890';
    // if( !(phone.match('[0-9]{10}')) ){
    //      alert('Please provide valid phone number');
    // }else{
    //      //good to go
    // }

    try {
      let payload = {
        Name,
        Email,
        Gender,
        MobileNumber,
        JobApply,
        ExpectedCTC,
      };
      let data = JSON.parse(window.localStorage.getItem("Details")) || [];
      console.log("previous data", data);
      window.localStorage.setItem(
        "Details",
        JSON.stringify([
          ...data,
          { ...payload, technicalSkills, key: data.length },
        ])
      );
    } catch (error) {
      toast.error(error.code);
      console.log(error);
    }
    window.location.assign("/getdetails");
    setState({
      Name: "",
      Email: "",
      Gender: "",
      MobileNumber: "",
      JobApply: "",
      ExpectedCTC: "",
      technicalSkills: "",
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" style={{ marginTop: "20px" }}>
            Add Employee Details
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 0 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Enter Name"
                  autoFocus
                  value={Name}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Email"
                  label="Email"
                  type="email"
                  name="Email"
                  autoComplete="Email"
                  // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"
                  value={Email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    name="Gender"
                    onChange={handleChange}
                    value={Gender}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="MobileNumber"
                  name="MobileNumber"
                  label="Enter MobileNumber"
                  required
                  fullWidth
                  id="MobileNumber"
                  type="tel"
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Apply For Job</InputLabel>
                  <Select
                    id="Job Apply"
                    value={JobApply}
                    name="JobApply"
                    onChange={handleChange}
                  >
                    <MenuItem name="JobApply" value="">
                      Select the Type of job
                    </MenuItem>
                    <MenuItem name="JobApply" value="Software developer">
                      Software developer
                    </MenuItem>
                    <MenuItem name="JobApply" value="FrontEnd developer">
                      FrontEnd developer
                    </MenuItem>
                    <MenuItem name="JobApply" value="BackEnd developer">
                      BackEnd developer
                    </MenuItem>
                    <MenuItem name="JobApply" value="Nodejs developer">
                      Nodejs developer
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Expected CTC</InputLabel>
                  <Select
                    id="ExpectedCTC"
                    value={ExpectedCTC}
                    name="ExpectedCTC"
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select the Expected CTC</MenuItem>
                    <MenuItem value="5 lpa">5 lpa</MenuItem>
                    <MenuItem value="6 lpa">6 lpa</MenuItem>
                    <MenuItem value="7 lpa">7 lpa</MenuItem>
                    <MenuItem value="8 lpa">8 lpa</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid>
                <FormLabel id="skills">Skills</FormLabel>
                <Box
                  id="box"
                  onChange={handleCheckbox}
                  value={technicalSkills}
                  name="technicalSkills"
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        type="checkBox"
                        value="java"
                        name="technicalSkills"
                      />
                    }
                    label="java"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        type="checkBox"
                        value="javascript"
                        name="technicalSkills"
                      />
                    }
                    label="Javascript"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        type="checkBox"
                        value="sql"
                        name="technicalSkills"
                      />
                    }
                    label="SQL"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
