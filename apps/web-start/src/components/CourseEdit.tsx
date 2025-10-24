import "./CourseButtons.css";
import React, { useState } from "react";
import { backendFetcher, mutateBackend } from "../integrations/fetcher";
import { useMutation } from "@tanstack/react-query";
import { Course } from "../routes/courses";
import { CourseCreateIn, CourseOut, DeleteCourse, CourseUpdateIn } from '@repo/api/courses';

interface CourseEditProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    setEditingCourse: (course: Course) => void;
    editingCourse?: Course | null;
}

export function CourseEdit({ isOpen, setIsOpen, setEditingCourse, editingCourse }: CourseEditProps) {
    const [selectedCourse, setSelectedCourse] = useState<string>(editingCourse?.name ?? "");


    const mutation = useMutation({
        mutationKey: ["editCourse"],
        mutationFn: (payload: CourseUpdateIn) =>
            
        mutateBackend<CourseUpdateIn, void>("/courses", "UPDATE", payload),
    });
    
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    
    if (!isOpen) return null;

    return (
        <div className="inset-0 fixed w-lvw h-lvh flex items-center justify-center z-2000">
           <div
            className="p-6 rounded shadow-lg"
            style={{ minHeight: "50%", minWidth: "40%", backgroundColor: '#f8d8d1',border: '2px, solid, #815656',}}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold" style={{color: "#815656"}}>Edit Course</h2>
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

            <form
                
                className="space-y-4"
            >
                <div className="flex flex-col">
                    <label htmlFor="courseName" className="mb-1 font-medium" style={{color: "#815656"}}>
                        Change Course Name:
                    </label>
                    <input
                        id="courseName"
                        name="courseName"
                        type="text"
                        placeholder="Write new Course Name here"
                        required
                        className="p-2 border rounded"
                        onChange={(e) => setSelectedCourse(e.target.value)}>

                    </input>
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
                        type="button"
                        
                        style={{
                            padding: "8px 12px",
                            borderRadius: 6,
                            background: "#815656",
                            color: "white",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Save Course
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
