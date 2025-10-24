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
                <div style={{ padding: "50px" }}>
                    {(() => {
                        const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
                        const makeStyle = (path: string) => ({
                            marginBottom: "20px",
                            padding: "8px 30%",
                            borderRadius: "6px",
                            backgroundColor: currentPath === path ? "#f8d8d16b" : "transparent",
                            border: "none",
                            cursor: "pointer",
                        });

                        return (
                            <>
                                <h3 style={{ textAlign: "left", fontSize: "20px" }}>Welcome,</h3>
                                <h2 style={{ textAlign: "left", fontSize: "30px", marginBottom: "10px" }}>Selin Bacaz ! ✩</h2>
                                <hr style={{ backgroundColor: "#f8d8d1", border: "1px solid #f8d8d1" }} />
                                <br />
                                <button style={makeStyle("/dashboard")}><Link to="/dashboard">Dashboard</Link></button>
                                <br />
                                <button style={makeStyle("/")}> <Link to="/"> Home </Link></button>
                                <br />
                                <button style={makeStyle("/courses")}><Link to="/courses">Courses</Link></button>
                                <br />
                                <button style={makeStyle("/gradePage")}><Link to="/gradePage"> Grades </Link></button>
                                <br />
                            </>
                        );
                    })()}
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
