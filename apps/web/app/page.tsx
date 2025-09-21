import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Link from "next/link";
import { SidePanel } from "../components/sidePanel";
import { Container } from "postcss";
import { SideGallery } from "../components/SideGallery";

export default function Home() {
    return (
        <>
            <SidePanel></SidePanel>

            <section>
                <header className="flex-row" style={{minHeight: "80px", backgroundColor: "#815656"}}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <h1 style={{ fontSize: "36px", color: "white" }}>Something something</h1>
                        <Image
                            src="/Images/chihiro.jpg"
                            alt="Profile Picture"
                            width={90}
                            height={90}
                            style={{ borderRadius: "50%", objectFit: "cover"}}

                            
                        ></Image>
                    </div>
                </header>


            </section>

            <section>
                {/* Content boxes with courses, announcements and assignments with duedates*/}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "50px", marginLeft: "30px", marginRight: "20px" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "76%" }}>
                        <div style={{ textAlign: "center",flexDirection:"row", backgroundColor: "#f89dac", padding: "10px", border: "2px solid #815656", marginBottom: "20px" }}>
                            <h1 style={{ fontSize: "50px", color: "#815656" }}> Gonna add course boxes here</h1>
                            <SideGallery></SideGallery>
                        </div>
                        <div style={{ textAlign: "center", backgroundColor: "#f89dac", padding: "10px", border: "8px solid #815656" }}>
                            <h1 style={{ fontSize: "50px", color: "#815656" }}> Gonna add assignment lines here</h1>
                            <p style={{ fontSize: "20px", color: "#815656" }}>gonna add assignment due dates here</p>
                        </div>
                    </div>


                    {/* Email and notification box */}
                    <div style={{ textAlign: "left", backgroundColor: "#f89dac", width: "20%", position: "sticky" }}>
                        <div style={{border: "2px solid #815656",fontSize: "24px", color: "white", padding: "10px", backgroundColor: "#e88282ff" }}>Emails</div>
                            <h3 style={{ fontSize: "24px", color: "white", paddingBlockEnd: "10px", paddingBlockStart: "10px" }}>
                                No new emails
                            </h3>
                        <div style={{ marginTop: "20px", fontSize: "24px", color: "white" ,border: "2px solid #815656", padding: "10px", backgroundColor: "#e88282ff" }}> Notifications</div>
                            <h2 style={{ fontSize: "24px", color: "white", paddingBlockEnd: "30px", paddingBlockStart: "10px" }}>
                                No new Notifications

                            </h2>
                    </div>
                </div>

            </section>
           
            
        
      
      
      </> 
    );
}
