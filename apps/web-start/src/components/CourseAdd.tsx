
import "./CourseButtons.css";
import { useState } from 'react';
import { CourseCreateIn, CourseOut } from '@repo/api/courses';
import { useApiMutation } from "../integrations/api";

interface CourseAddProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function CourseAdd( {isOpen, setIsOpen}: CourseAddProps) {
    const mutation = useApiMutation<CourseCreateIn, CourseOut>({endpoint: () => ({path: '/courses', method: 'POST'})});

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

    const [newCourseName, setNewCourseName] = useState<string>("");

    return (


    <div className="inset-0 fixed w-lvw h-lvh flex items-center justify-center z-2000">
        <div
            className="p-6 rounded shadow-lg"
            style={{ minHeight: "50%", minWidth: "40%", backgroundColor: '#f8d8d1',border: '2px, solid, #815656',}}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold" style={{color: "#815656"}}>Add Course</h2>
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
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const fd = new FormData(form);
                    const payload = {
                        name: fd.get("courseName") as string | null,
                        code: fd.get("courseCode") as string | null,
                        instructor: fd.get("instructor") as string | null,
                        credits: fd.get("credits") as string | null,
                        description: fd.get("description") as string | null,
                    };
                    // TODO: replace console.log with API call / parent callback
                    console.log("Course submit payload:", payload);
                    setIsOpen(false);
                }}
                className="space-y-4"
            >
                <div className="flex flex-col">
                    <label htmlFor="courseName" className="mb-1 font-medium" style={{color: "#815656"}}>
                        Course Name
                    </label>
                    <input
                        id="courseName"
                        name="courseName"
                        type="text"
                        placeholder="Add Course Name here"
                        required
                        className="p-2 border rounded"
                        onChange={(e) => setNewCourseName(e.target.value)}>

                    </input>
                </div>
            {/* 
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="courseCode" className="mb-1 font-medium">
                            Course Code
                        </label>
                        <input
                            id="courseCode"
                            name="courseCode"
                            type="text"
                            placeholder="CISC 474"
                            required
                            className="p-2 border rounded"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="credits" className="mb-1 font-medium">
                            Credits
                        </label>
                        <input
                            id="credits"
                            name="credits"
                            type="number"
                            min={0}
                            step={1}
                            placeholder="3"
                            className="p-2 border rounded"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="instructor" className="mb-1 font-medium">
                        Instructor
                    </label>
                    <input
                        id="instructor"
                        name="instructor"
                        type="text"
                        placeholder="Dr. Smith"
                        className="p-2 border rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="mb-1 font-medium">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Brief course description..."
                        rows={4}
                        className="p-2 border rounded"
                    />
                </div>

                */}

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
                        onClick={() => {
                            mutation.mutate(
                                { name: newCourseName },
                                {
                                    onSuccess: () => {
                                        setIsOpen(false);
                                        // Full page reload:
                                        window.location.reload();
                                    },
                                }
                            );
                        }}
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