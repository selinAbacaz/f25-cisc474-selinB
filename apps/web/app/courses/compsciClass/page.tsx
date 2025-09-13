"use client";
import React, { useRef } from "react";
import { SidePanel } from "../../../components/sidePanel";
import Link from "next/link";

// If using Next.js, use next/head for <Head> and next/script for scripts
// import Head from "next/head";
// import Script from "next/script";

export default function DashboardPage() {
  const imageRef = useRef<HTMLImageElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Handles the "Press Me!" button click
  const show = () => {
    if (imageRef.current && btnRef.current) {
      imageRef.current.src =
        "https://media.tenor.com/nN4erWoujAgAAAAi/toothless-cat-cat.gif";
      btnRef.current.style.display = "none";
    }
  };

  

  return (
    <>
      {/* If using Next.js, move these to _app.tsx or use <Head> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="index.css" />

      <div
        style={{
          backgroundColor: "#d15b5bff",
          minHeight: "100vh",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        <SidePanel >
        </SidePanel>

        {/* Main content */}
        <div style={{ width: "80%", margin: "0 auto" }}>
          <div
            style={{
              marginBottom: 0,
              backgroundColor: "#f89dac",
              border: "8px solid #815656",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
            }}
          >
            <br />
            <br />
            <hr
              style={{
                textAlign: "center",
                borderColor: "#815656",
                borderWidth: 2,
                borderStyle: "dashed",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  zIndex: 1,
                  fontSize: "180px",
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1555231955-348aa2312e19?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                  display: "inline-block",
                  margin: "0 40px",
                }}
              >
                <b>⟡ CompSci Class ⟡</b>
              </h1>
            </div>
            <hr
              style={{
                textAlign: "center",
                borderColor: "#815656",
                borderWidth: 2,
                borderStyle: "dashed",
              }}
            />
            <br />
            <br />
          </div>

          <div
            style={{
              marginTop: "60px",
              position: "relative",
              zIndex: 0,
              backgroundColor: "#fcd9df",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              minHeight: "450px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img id="image" ref={imageRef} src="" alt="" />
            <button
              type="button"
              ref={btnRef}
              onClick={show}
              id="btnID"
              style={{
                fontSize: "30px",
                textAlign: "center",
                justifyContent: "center",
                display: "block",
                margin: "0 auto",
                position: "relative",
                padding: "10px 20px",
                borderRadius: "5px",
                backgroundColor: "#815656",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Press Me !
            </button>
          </div>
        </div>
      </div>
    </>
  );
}