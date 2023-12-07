import React from "react";
import styles from "./card.module.css";
import { ArrowBigUp } from "lucide-react";
export default function Card() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "white",
        width: "400px",
        height: "400px",
        borderRadius: "40px",
      }}
    >
    <div style={{ display: "flex", justifyContent: "center" }}>
        <ArrowBigUp size={40} />
      </div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Hello Guys</h1>
      
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        lorem ij oifincwe f hd ffn nvrhrfounfnr rfcnqirbnfuqf cubhebfuhiu4bfc
        bubfcubufbubcub ce iubcubfbcwerurcbc frrb rufb ueOIBFBU43 UEBU UFBQOOU
        VAUBRE IB IUIBRBFUIBFB BFIU{" "}
      </p>
    </div>
  );
}
