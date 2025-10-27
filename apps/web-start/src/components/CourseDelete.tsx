import "./CourseButtons.css";
import React, { useState } from "react";
import { backendFetcher, mutateBackend } from "../integrations/fetcher";
import { useMutation } from "@tanstack/react-query";
import { DeleteCourse } from "@repo/api/courses";

interface CourseDeleteProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    
}

export function CourseDelete({ isOpen, setIsOpen}: CourseDeleteProps) {
    const [selectedCourse, setSelectedCourse] = useState<string>("");

    const mutation = useMutation({
        mutationKey: ["deleteCourse"],
        mutationFn: (payload: DeleteCourse) =>
            
        mutateBackend<DeleteCourse, void>("/courses", "DELETE", payload),
    });
    
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedCourse) return;
        // Optional confirm
        if (!window.confirm("Are you sure you want to delete this course?")) return;

        
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="inset-0 fixed w-lvw h-lvh flex items-center justify-center z-2000">
            <div
                className="p-6 rounded shadow-lg"
                style={{
                    minHeight: "30%",
                    minWidth: "40%",
                    backgroundColor: "#f8d8d1",
                    border: "2px solid #815656",
                }}
            >
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold" style={{ color: "#815656" }}>
                        Delete Course
                    </h2>
                    <button
                        onClick={handleToggle}
                        aria-label="Close"
                        style={{
                            padding: "6px 8px",
                            borderRadius: 6,
                            background: "white",
                            border: "none",
                            cursor: "pointer",
                            color: "#815656",
                        }}
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <p style={{ color: "#815656" }}>
                        Pick which Course You want to delete from the dropdown below:
                    </p>

                    <div className="flex flex-col">
                        
                    </div>

                    <div className="flex justify-end gap-3 mt-2">
                        <button
                            type="button"
                            onClick={handleToggle}
                            style={{
                                padding: "8px 12px",
                                borderRadius: 6,
                                background: "#f3f3f3",
                                border: "none",
                                cursor: "pointer",
                                color: "#815656",
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            style={{
                                padding: "8px 12px",
                                borderRadius: 6,
                                background: "#c63939",
                                color: "white",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Delete Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
