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

const theme = createTheme();

export default function AddRecipe() {
  let [state, setState] = useState([]);

  let[technicalSkills,setTechnicalSkills]=useState([])
useEffect(()=>{
  let data =JSON.parse(window.localStorage.getItem("Details"));
  setState(data)
},[]);
console.log(state)
  // console.log(data)
  // console.log(typeof(data))

  let {
    Name,
    Email,
    Gender,
    MobileNumber,
    JobApply,
    ExpectedCTC,
  } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleCheckbox=(e)=>{
  console.log(e.target.value)
  if(e.target.checked){
 setTechnicalSkills([...technicalSkills,e.target.value])
  }
  else{
    if(e.target.checked===false){
      let i=technicalSkills.indexOf(e.target.value)
    technicalSkills.splice(i,1)
    }
  }
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    try {
      let payload = {
        Name,
        Email,
        Gender,
        MobileNumber,
        JobApply,
        ExpectedCTC,
      };
      // console.log(payload);
      let data = window.localStorage.getItem(
        "Details",
        JSON.stringify({ ...payload,technicalSkills })
      );
      console.log(data);
      toast.success(`successfully ${Name} edited`);
      window.location.assign("/getdetails")
    } catch (error) {
      toast.error(error.code);
      console.log(error);
    }
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
          <Typography
            className="style"
            component="h1"
            variant="h5"
            style={{ marginTop: "15px" }}
          >
            Edit Employee Details
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
                  value={Email}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  name="Gender"
                  onChange={handleChange}
                  value={Gender}
                >
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup row>
                    <FormControlLabel
                      name="Gender"
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      name="Gender"
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      name="Gender"
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
                  value={MobileNumber}
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
                    <MenuItem name="ExpectedCTC" value="5 lpa">
                      5 lpa
                    </MenuItem>
                    <MenuItem name="ExpectedCTC" value="6 lpa">
                      6 lpa
                    </MenuItem>
                    <MenuItem name="ExpectedCTC" value="7 lpa">
                      7 lpa
                    </MenuItem>
                    <MenuItem name="ExpectedCTC" value="8 lpa">
                      8 lpa
                    </MenuItem>
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
