import React, { useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import { HomePage } from "../src/text.json";
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  InputAdornment,
  Button,
  ThemeProvider,
  createTheme,
  Snackbar,
} from "@mui/material";
import AccordionComponent from "../Components/AccordionComponent";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import GradeIcon from "@mui/icons-material/Grade";
const LANGAUGES = {
  ENGLISH: "en",
  GERMAN: "ger",
};
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(66,69,73)",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "rgb(66,69,73)",
      contrastText: "#F7F5FF",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        color: "secondary",
        inputProps: {
          style: {
            color: "#rgb(66,69,73)", // This sets the text field font color
          },
        },
      },
    },
  },
});

function Home(props) {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [mailSent, setMailSent] = useState(false);
  const [mailSnackMsg, setMailSnackMsg] = useState("")
  const language = props.appLanguage

  return (
    <div  className={styles.home_container}>
      <div id="home" className={styles.home_Hero_Container}>
        <div className={styles.home_Hero_Backdrop}>
          <div className={styles.home_text_container}>
            <h1 className={styles.home_Title}>{HomePage.Title[language]}</h1>
            <div className={styles.home_subTitle}>
              {HomePage.SubTitle1[language]}
            </div>
            <div className={styles.home_subTitle2}>
              {HomePage.SubTitle2[language]}
            </div>
            <div className={styles.home_subText}>
              {HomePage.SubText1[language]}
            </div>
          </div>
        </div>
      </div>
      <div  className={styles.home_vision_Title}>
        {" "}
        {HomePage.Vision.Title[language]}{" "}
      </div>
      <div className={styles.home_vision_container}>
        <div className={styles.home_vision_textContainer}>
          <div className={styles.home_subText}>
            {HomePage.Vision.SubText1[language]}
          </div>
          {HomePage.Vision.Vision_Points[language].map((point) => {
            return (
              <div key={point} className={styles.home_subTitle}>
                {point}
              </div>
            );
          })}
          <div className={styles.home_subText}>
            {HomePage.Vision.Subtext2[language]}
          </div>
        </div>
      </div>
      <div id="how_it_works" className={styles.home_howItWorks_Title}>
        {HomePage.How_It_Works.Title[language]}
      </div>
      <div className={styles.home_howItWorks_container}>
        <div className={styles.howItWorks_textContainer}>
          <div className={styles.home_howItWorks_Subtext1}>
            {HomePage.How_It_Works.SubText1[language]}
          </div>
          <div className={styles.home_howItWorks_textContainer2}>
            <Card
              sx={{ borderRadius: "3vh" }}
              elevation={3}
              classes={styles.home_howItWorks_CARD}
            >
              <CardHeader
                style={{
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  fontSize: "4vh",
                  padding: "1vh",
                }}
                title={
                  <div>
                    <div>
                      <MoneyOffIcon fontSize="large" />
                    </div>
                    {HomePage.How_It_Works.Free_Option.Title[language]}
                  </div>
                }
              />
              <CardContent>
                <div className={styles.pkg_card + ` ${styles.pkg_card_small}`}>
                  {HomePage.How_It_Works.Free_Option.SubText[language]}
                </div>
              </CardContent>
            </Card>
            <Card
              sx={{ borderRadius: "3vh" }}
              elevation={3}
              classes={styles.home_howItWorks_CARD}
            >
              <CardHeader
                style={{
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  fontSize: "4vh",
                  padding: "1vh",
                }}
                title={
                  <div>
                    <div>
                      <GradeIcon fontSize="large" />
                    </div>
                    {HomePage.How_It_Works.Fifty_Euro_PKG.Title[language]}
                  </div>
                }
              />
              <CardContent>
                {HomePage.How_It_Works.Fifty_Euro_PKG.Points[language].map(
                  (point) => {
                    return (
                      <div className={styles.pkg_card} key={point}>
                        <div className={styles.pkg_point_title}>{point[0]}</div>
                        <div className={styles.pkg_point_point}>{point[1]}</div>
                      </div>
                    );
                  }
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div id="faq" className={styles.faq_container}>
        <div className={styles.faq_Title}>FAQ</div>
        <div className={styles.accordion_container}>
          <div className={styles.accordion_container2}>
            <AccordionComponent language={language} />
          </div>
        </div>
      </div>
      <div id="contact" className={styles.contact_Container}>Contact us!</div>
      <div className={styles.contact_Form_Container}>
        <div className={styles.contact_Form_Subtext}>
          Wanna contact us for your specific issue? Send us a message!
        </div>
        <div className={styles.form}>
          <ThemeProvider theme={theme}>
            <TextField
              sx={{ margin: "1.5vh", maxWidth: "30%" }}
              id="outlined-basic"
              label="Name"
              required
              variant="filled"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              sx={{ margin: "1.5vh", maxWidth: "30%" }}
              id="outlined-basic"
              label="Email"
              required
              variant="filled"
              onChange={(e) => {
                setMail(e.target.value);
              }}
              slotProps={{
                htmlInput: {
                  sx: { textAlign: "left" },
                },
                input: {
                  endAdornment: (
                    <InputAdornment position="end">.com</InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              sx={{
                height: "2vh",
                margin: "1.5vh",
                marginBottom: "18vh",
                color: "rgb(66,69,73)",
              }}
              label="Your Message"
              multiline
              rows={6}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              variant="filled"
            />
          </ThemeProvider>
          <Button
            onClick={async (event) => {
              const data = {
                name: name,
                email: mail,
                message: msg,
              };
              try {
                const response = await axios.post("/api/send-email", data);

                if (response.status === 200) {
                  console.log("WHAAAT")
                  setMailSnackMsg("Email Sent! We will contact you shortly!")
                  setMailSent(true); 
                } else {
                  setMailSnackMsg("Failed to send email.")
                  setMailSent(true); 
                }
              } catch (error) {
                setMailSnackMsg("Failed to send email.")
                setMailSent(true); 
              }
            }}
            sx={{
              maxWidth: "10vw",
              alignSelf: "center",
              backgroundColor: "rgb(66,69,73)",
            }}
            variant="contained"
          >
            Send
          </Button>
        </div>
      </div>
      <Snackbar
        open={mailSent}
        autoHideDuration={5000}
        onClose={() => {
          setMailSent(false);
        }}
        message={mailSnackMsg}
      />
    </div>
  );
}

export default Home;
