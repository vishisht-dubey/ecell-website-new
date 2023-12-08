import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { firebaseDB } from "@/lib/firebase";
import {doc,setDoc} from "firebase/firestore"
import Spinner from "../Spinner/spinner";
// import { UserAuth } from "../../context/AuthContext";
export default function StartupInternForm() {
  // const { user} = UserAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [yearOfStudy, setYearOfStudy] = useState(0);
  const [linkedinId, setLinkedinId] = useState("");
  const [instagramId, setInstagramId] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [loading, setLoading] = useState(false);
  const formData = {
    username: name,
    // useremail: user?.email,
    usercontact: contact,
    userlinkedinid: linkedinId,
    userinstaid: instagramId,
    userinstitutename: instituteName,
    useryearofstudy: yearOfStudy,
  };
  const handleSubmit = async (event) => {
    setLoading(true);
    // ambassadorInfo(formData);
    const campusAmbassadorCollection = collection(
      firebaseDB,
      "campus_ambassadors_info"
    );
    const newCampusAmbassadorRef = await setDoc(
      doc(firebaseDB, "startup_intern_recruiter"),
      formData
    );
    console.log(newCampusAmbassadorRef.id);
    location.reload();
  };
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <div style={{display:"flex",justifyContent:"center",fontWeight:"400",fontSize:"30px",lineHeight:"36px",marginBottom:"16px"}}>
        Fill Up Your Details
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:"4px",width:"80vw"}}>
        <TextField
          variant="filled"
          label="Name"
          type="text"
          color="warning"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        {/* <TextField
          variant="filled"
          label="Email Address"
          type="email"
          color="warning"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        /> */}
        <TextField
          variant="filled"
          label="Linkedin ID"
          type="text"
          color="warning"
          onChange={(event) => {
            setLinkedinId(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          label="Instagram ID"
          type="text"
          color="warning"
          onChange={(event) => {
            setInstagramId(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          label="Institue Name"
          color="warning"
          type="text"
          onChange={(event) => {
            setInstituteName(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          label="Contact Number"
          color="warning"
          type="number"
          onChange={(event) => {
            setContact(event.target.value);
          }}
        />
        <TextField
          variant="filled"
          label="Year of Studying"
          color="warning"
          type="number"
          onChange={(event) => {
            setYearOfStudy(event.target.value);
          }}
        />
        <div style={{display:"flex",justifyContent:"end",marginTop:"48px"}}>
        {!loading ? (
          <Button
            variant="contained"
            color="warning"
            size="large"
            className="bg-orange-500"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        ) : (
          <Spinner />
        )}
      </div>
      </div>
    </div>
  );
}
