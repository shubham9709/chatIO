import React, { useState } from "react";
import { Button, Dialog, Divider, TextField } from "@mui/material";
import { Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#cc3636",
      contrastText: "#fff",
    },
    orange: {
      main: "#ff5858",
      contrastText: "#fff",
    },
  },
});

const useStyles = makeStyles({
  icon: {
    color: "#54B435",
    padding: "0 5px",
  },
  text: {
    color: "#54B435",
    fontFamily: "Pacifio",
    cursor: "pointer",
  },
  logoDiv: {
    display: "flex",
    padding: "10px",
    justifyContent: "center",
  },
  mainDiv: {
    width: "40rem",
    height: "30rem",
    backgroundColor: "#434242",
  },
  input: {
    width: "100%",
  },
  button: {
    width: "95%",
    textAlign: "center",
  },
  signup: {
    color: "#f9d923",
    opacity: "0.8",
    cursor: "pointer",
  },
});

const Login = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const imageWarning = () => {
    toast.error("Please select an image", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleClose = () => {
    setOpen(false);
    setState(false);
  };
  const classes = useStyles();

  const SignUpInitialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const LoginInitialValues = {
    email: "example@gmail.com",
    password: "12345",
  };
  const [logIn, setLogIn] = useState(LoginInitialValues);
  const [signUp, setSignUp] = useState(SignUpInitialValues);
  const [pic, setPic] = useState();
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);

  const onValueChange = (e) => {
    setLogIn({ ...logIn, [e.target.name]: e.target.value });
  };
  const onInputChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
    // console.log(signUp);
  };

  const onUploadClick = () => {
    const input = document.getElementById("file-input");

    if (input) {
      input.click();
    }
  };
  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      imageWarning();
      return;
    }
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chatIO");
      data.append("cloud_name", "djbawo94v");
      try {
        fetch("https://api.cloudinary.com/v1_1/djbawo94v/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setPic(data.url.toString());
            setLoading(false);
            toast.success("Image upload successfull", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      imageWarning();
      setLoading(false);
      return;
    }
  };

  const signup = async () => {
    setLoading(true);
    if (
      !signUp.name ||
      !signUp.email ||
      !signUp.password ||
      !signUp.confirmpassword
    ) {
      toast.error("Please Fill all the fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
      return;
    }
    if (signUp.password != signUp.confirmpassword) {
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { name, email, password } = signUp;
      console.log(pic);
      const { data } = await axios.post(
        "http://localhost:7000/api/user",
        { name, email, password, pic },
        config
      );
      toast.success("Registration successfull", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      console.log(error);
      toast.error("Error occurred", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const login = () => {
    const { email, password } = logIn;
    setLoading(true);
    if (!email || !password) {
      toast.error("Please Fill all the fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
      return;
    }
    try {
      const config = {
        header: {
          "Content-type": "applicationjson",
        },
      };
      const { data } = axios.post(
        "http://localhost:7000/api/user/login",
        { email, password },
        config
      );
      toast.success("Login successfull", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
    } catch (error) {
      toast.error("Error occurred", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth="md"
      PaperProps={{
        sx: {
          maxWidth: "unset",
          backgroundColor: "transparent",
        },
      }}
    >
      <Box className={classes.mainDiv}>
        <Box className={classes.logoDiv}>
          <WhatsAppIcon fontSize="large" className={classes.icon} />
          <Typography variant="h5" className={classes.text}>
            chat&nbsp;IO
          </Typography>
        </Box>
        {state === false ? (
          <Box>
            <Box style={{ padding: "4% 0  0 2%" }}>
              <TextField
                required
                variant="standard"
                label="Enter email"
                className={classes.input}
                style={{ padding: "0 0 3% 0" }}
                name="email"
                value={logIn.email}
                onChange={(e) => onValueChange(e)}
              />
              <Box style={{ display: "flex" }}>
                <TextField
                  required
                  variant="standard"
                  label="Enter password"
                  type="password"
                  className={classes.input}
                  name="password"
                  value={logIn.password}
                  onChange={(e) => onValueChange(e)}
                />
              </Box>
            </Box>
            <Box style={{ textAlign: "center", padding: "2% 0 0 0" }}>
              <ThemeProvider theme={theme}>
                <Button
                  color="neutral"
                  variant="contained"
                  className={classes.button}
                  onClick={login}
                >
                  LogIn
                </Button>
              </ThemeProvider>
              <ThemeProvider theme={theme}>
                <Button
                  color="orange"
                  variant="contained"
                  className={classes.button}
                  style={{ marginTop: "2%" }}
                  onClick={login}
                >
                  Login using Guest User Credentials
                </Button>
              </ThemeProvider>
            </Box>
            <Box style={{ textAlign: "center", marginTop: "2%" }}>
              <Typography>OR</Typography>
              <Typography
                className={classes.signup}
                onClick={() => {
                  setState(true);
                }}
              >
                New to chatIO? Join US
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box>
            <Box style={{ padding: "4% 0  0 2%" }}>
              <TextField
                required
                variant="standard"
                label="Enter your name"
                value={signUp.name}
                className={classes.input}
                style={{ marginBottom: "2%" }}
                name="name"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                required
                variant="standard"
                label="Enter email"
                className={classes.input}
                style={{ marginBottom: "2%" }}
                name="email"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                required
                variant="standard"
                label="Enter Password"
                type="password"
                className={classes.input}
                style={{ marginBottom: "2%" }}
                name="password"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                required
                variant="standard"
                label="Confirm Password"
                type="password"
                className={classes.input}
                style={{ marginBottom: "2%" }}
                name="confirmpassword"
                onChange={(e) => onInputChange(e)}
              />
              <Box
                style={{
                  display: "flex",
                  marginTop: "2%",
                }}
              >
                <Typography style={{ fontWeight: "600", color: "grey" }}>
                  Upload your profile picture
                </Typography>
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    color="orange"
                    component="label"
                    style={{ position: "relative", left: "50%" }}
                    onClick={onUploadClick}
                  >
                    Upload
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                      onChange={(e) => postDetails(e.target.files[0])}
                    />
                  </Button>
                  <Box>
                    {loading && (
                      <CircularProgress
                        style={{ position: "relative", bottom: "5%" }}
                      />
                    )}
                  </Box>
                </ThemeProvider>
              </Box>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="neutral"
                  className={classes.button}
                  style={{ marginTop: "2%", textAlign: "center" }}
                  onClick={signup}
                >
                  Sign UP
                </Button>
              </ThemeProvider>
            </Box>
          </Box>
        )}
      </Box>
      <ToastContainer />
    </Dialog>
  );
};

export default Login;
