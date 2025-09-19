import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Link from "next/link";
import { SidePanel } from "../components/sidePanel";
import { Container } from "postcss";


export default function Home() {
    return (
        <>
            <SidePanel></SidePanel>

            <section>
                <header className="flex-row" style={{minHeight: "80px", backgroundColor: "#815656"}}> hi world</header>


            </section>

            <section>
                {/* Content boxes with courses, announcements, emails, due dates, etc- like canvas*/}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "50px", marginLeft: "50px", marginRight: "50px" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
                        <div style={{ textAlign: "center",flexDirection:"row", backgroundColor: "#f89dac", padding: "10px", border: "8px solid #815656", marginBottom: "20px" }}>
                            <h1 style={{ fontSize: "50px", color: "#815656" }}> Gonna add course boxes here</h1>
                        </div>
                        <div style={{ textAlign: "center", backgroundColor: "#f89dac", padding: "10px", border: "8px solid #815656" }}>
                            <h1 style={{ fontSize: "50px", color: "#815656" }}> Gonna add assignment lines here</h1>
                            <p style={{ fontSize: "20px", color: "#815656" }}>gonna add assignment due dates here</p>
                        </div>
                    </div>

                    <div style={{ textAlign: "center", backgroundColor: "#f89dac", padding: "10px", border: "4px solid #815656", width: "25%", marginRight: "20px" }}>
                        Gonna add email and notifications here vvv
                        <div style={{ marginTop: "20px", border: "2px solid #815656",fontSize: "24px", color: "white", padding: "10px", backgroundColor: "#e88282ff" }}>Emails</div>
                            <h2 style={{ fontSize: "24px", color: "white" }}></h2>
                        <div style={{ marginTop: "20px", fontSize: "24px", color: "white" ,border: "2px solid #815656", padding: "10px", backgroundColor: "#e88282ff" }}> Notifications</div>
                            <h2 style={{ fontSize: "24px", color: "white" }}></h2>
                    </div>
                </div>

            </section>
           
            
        
      
      
      </> 
    );
}
