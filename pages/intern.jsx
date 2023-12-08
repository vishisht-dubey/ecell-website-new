import Footer from "@/components/Footer";
import Nav from "@/components/navbar/NavLayout";
import Head from "next/head";
import React from "react";
import styles from "./internship_portal/internship_portal.module.css";
import { Button } from "react-bootstrap";
import Testimonials from "../components/sip_testimonials/siptestimonials";
import Card from "../components/carousel/card/card";
import { useRouter } from "next/navigation";
export default function InternshipPortal() {
  const router = useRouter();
  const handleRecruiterClick = ()=>{

  }
  return (
    <>
      <Head>
        <title>Internship Portal</title>
      </Head>
      <div>
        <Nav />
        <section style={{ marginBottom: "20px" }}>
          <div className={styles.body}>
            <div className={styles.content}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <span className={styles.heading} style={{ color: "#ea850c" }}>
                  Startup Internship Programme
                </span>
                <p className={styles.description}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  laborum illum! Neque voluptatem itaque, magnam perferendis
                  atque, vitae hic debitis porro qui alias aspernatur pariatur,
                  nobis voluptates at vel deserunt! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Cum, laborum illum! Neque
                  voluptatem itaque, magnam perferendis atque, vitae hic debitis
                  porro qui alias aspernatur pariatur, nobis voluptates at vel
                  deserunt!
                </p>
                <div>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "48px",
                      marginBottom: "30px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Register
                  </span>
                  <div
                    style={{
                      marginTop: "4px",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Button
                      style={{
                        padding: "4px",
                        marginRight: "4px",
                        height: "40px",
                        width: "200px",
                        backgroundColor: "#ea850c",
                      }}
                      onClick={()=>{router.push("internship_portal/recruiter")}}
                  
                    >
                      As Recruiter
                    </Button>
                    <Button
                     style={{
                      padding: "4px",
                      marginRight: "4px",
                      height: "40px",
                      width: "200px",
                      backgroundColor: "#ea850c",
                    }}
                    // className={styles.button}
                    >
                      As Student
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                  height={200}
                  width={200}
                ></img>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span
              style={{ fontSize: "48px", fontWeight: "600", marginTop: "40px" }}
            >
              Why Intern At A Startup
            </span>
          </div>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <Card />
            <Card />
            <Card />
          </div>
          <div style={{ display: "flex",flexDirection:"column", justifyContent: "center",flexWrap:"wrap",alignContent:"center" }}>
            <span
              style={{ fontSize: "48px", fontWeight: "600", marginTop: "40px" ,textAlign:"center"}}
            >
             Success of SIP
            </span>
            <p style={{display:"flex",textAlign:"center",maxWidth:"1200px",fontWeight:"800px",letterSpacing:"2px",backgroundClip:"text",lineHeight:"1rem"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              laborum illum! Neque voluptatem itaque, magnam perferendis atque,
              vitae hic debitis porro qui alias aspernatur pariatur, nobis
              voluptates at vel deserunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Cum, laborum illum! Neque voluptatem itaque,
              magnam perferendis atque, vitae hic debitis porro qui alias
              aspernatur pariatur, nobis voluptates at vel deserunt!
            </p>
          </div>
        </section>

        <div>
 
          <Testimonials />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
