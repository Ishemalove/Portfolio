import React from "react";
import { Typography, Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";
import profileImage from "../../assets/profile.jpg";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "row", // Horizontal layout
    alignItems: "center",
    justifyContent: "space-between", // Space between elements
    maxWidth: "100vw",
    marginTop: "auto",
    marginBottom: "auto",
    padding: theme.spacing(2, 15), // Adjust padding for better spacing
    marginLeft: "80px", // Add left margin
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "50%", // Limit the width for better layout
    textAlign: "left", // Align text to the left
  },
  jobs: {
    display: "flex",
    flexDirection: "column", // Align job titles horizontally
    alignItems: "left",
    marginBottom: theme.spacing(1),
    fontSize: "100px", // Increase font size for job titles
    fontWeight: "bold",
     margin: 0,
    lineHeight: 0.9, // Set a low line height for minimal spacing Make text bold
 // Add space between job titles
  
  },
  description: {
    marginTop: theme.spacing(2),
    textAlign: "left", // Align description to the left
    fontSize: "20px",
    marginBottom:theme.spacing(2), // Smaller font size for summary
  },
  downloadCv: {
    marginTop: theme.spacing(2),
    fontSize: "16px", // Smaller font size for CV button
    backgroundColor: "aqua", // Light blue background
    color: "white",
    borderRadius:"10px", // Black text color for contrast (you can change this as needed)
    "&:hover": {
      backgroundColor: "aqua", // Slightly darker blue on hover
    },
  },
  profileImage: {
    width: "500px", // Adjusted width
    height: "500px", // Adjusted height
    borderRadius: "50%",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h5" component="h2">
          <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography>
        <div className={classes.jobs}>
        
            <TextDecrypt text={`Software Developer`} />
             <TextDecrypt text={`& Analyst`} />
          
        </div>
       < Typography variant="body1" className={classes.description}>
          Experienced software developer and analyst with a strong background in
          designing and implementing efficient and scalable solutions. Proficient
          in various programming languages and frameworks, with a keen eye for
          detail and a passion for delivering high-quality results. Adept at
          collaborating with cross-functional teams to identify and solve
          complex problems.
        </Typography>
        <Button
          variant="contained"
          className={classes.downloadCv}
          href={Resume.basics.cvLink}
          download
        >
          DOWNLOAD CV
        </Button>
      </div>
      <div className={classes.profileImage}>
        <img src={profileImage} alt="Profile" />
      </div>
    </Container>
  );
};