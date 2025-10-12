import { useState } from "react";
import "./sidePanel.css";
import { Link } from "@tanstack/react-router";



export function SidePanel() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <div
                className="sidepanel"
                style={{
                    zIndex: 1000,
                    position: "fixed",
                    
                    height: "100vh",
                    width: "340px",
                    marginLeft: collapsed ? "-340px" : "0",
                    transition: "margin-left 0.3s",
                    
                    
                }}
            >
                <div style={{ padding: "50px"}}>
                    <h3 style={{textAlign: "left", fontSize: "20px"}}>Welcome,</h3>
                    <h2 style={{textAlign: "left",fontSize:"30px", marginBottom: "10px"}}>Selin Bacaz ! ✩</h2>
                    <hr style={{backgroundColor: "#f8d8d1", border:"1px solid #f8d8d1"}}></hr>
                    <br></br>
                    <button style={{marginBottom: "20px"}}><Link to="/dashboard">Dashboard</Link></button>
                    <br></br>
                    <button style={{marginBottom: "20px"}}><Link to="/"> Home </Link></button>
                    <br></br>
                    <button style={{marginBottom: "20px"}}><Link to="/courses">Courses</Link></button>
                    <br></br>
                    <button style={{marginBottom: "20px"}}><Link to="/gradePage"> Grades </Link></button>
                    <br></br>

                </div>
            </div>
            <div
                className="circle"
                style={{
                    position: "fixed",
                    left: collapsed ? "0px" : "340px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    transition: "left 0.3s",
                    cursor: "pointer",
                    zIndex: 2100,
                    background: "#e88282ff", // ensure contrast for white arrow
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                }}
                onClick={() => setCollapsed((c: boolean) => !c)}
            >
                {/* White arrow using SVG */}
                {collapsed ? (
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <polyline
                            points="7,5 13,10 7,15"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <polyline
                            points="13,5 7,10 13,15"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </div>
        </>
    );
}
