import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import { z } from "zod";
import { useRegister } from "../../hooks/useRegister";

// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.
const signUpSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.string(),
  gender: z.string(),
  location: z.string(),
  occupation: z.string(),
});

export default function SignUp() {
  const { register } = useRegister();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = await Object.fromEntries(data.entries());

    const result = await signUpSchema.safeParse(formData);

    if (result.success) {
      console.log("Valid data:", result.data);
    } else {
      console.error("Validation errors:", result.error.errors);
    }

    const req = {
      ...result.data,
      name: `${result.data?.lastName} ${result.data?.firstName}`,
      dob: new Date(result.data!.dob).toISOString(),
    };
    delete req.firstName;
    delete req.lastName;

    register(req);
  };

  const [selectedDate, setSelectedDate] = React.useState(null);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup row aria-labelledby="gender" name="gender">
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
              <DatePicker
                label="Date of birth"
                name="dob"
                value={selectedDate}
                onChange={(newValue: any) => {
                  setSelectedDate(newValue);
                }}
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="occupation"
                label="Your Occupation"
                name="occupation"
                autoComplete="occupation"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to={"/signin"}>Already have an account?</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
