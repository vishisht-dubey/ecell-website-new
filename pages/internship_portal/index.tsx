import Footer from "@/components/Footer";
import Nav from "@/components/navbar/NavLayout";
import Head from "next/head";
import React from "react";
import styles from "./internship_portal.module.css";
import { Button } from "react-bootstrap";

export default function InternshipPortal() {
  return (
    <>
      <Head>
        <title>Internship Portal</title>
      </Head>
      <div>
        <Nav />
        <section>
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
                <br />
                <span style={{ fontWeight: "600", fontSize: "32px" }}>
                  Register
                </span>
                <div className={styles.button}>
                  <Button color="warning">As Recruiter</Button>
                  <Button>As Student</Button>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            ></div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
