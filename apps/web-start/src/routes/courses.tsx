import { createFileRoute, Link } from '@tanstack/react-router';
import { SidePanel } from '../components/sidePanel';
import { useMutation, useQuery } from '@tanstack/react-query';
import { backendFetcher, mutateBackend, } from '../integrations/fetcher';
import { CourseCreateIn, CourseOut, DeleteCourse, CourseUpdateIn } from '@repo/api/courses';
import { CourseAdd } from '../components/CourseAdd';
import { useState } from 'react';
import { CourseDelete } from '../components/CourseDelete';
import { CourseEdit } from '../components/CourseEdit';
import { useApiMutation, useApiQuery } from '../integrations/api';

export interface Course {
  id: number;
  name: string;
}

export const Route = createFileRoute('/courses')({
  component: RouteComponent,
});





function RouteComponent() {
  
  const [newCourse, setNewCourse] = useState<Course>({id:0, name: ""});


  
  function forEditCourse(course: Course) {
    setNewCourse(course);
    EdithandleToggle();

  }


  const [EditisOpen, EditsetIsOpen] = useState<boolean>(false);
  const EdithandleToggle = () => {
        EditsetIsOpen(!EditisOpen);
      };

  const { data, refetch, error, isFetching } = useApiQuery<Array<CourseOut>>(['courses'], '/courses');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const courses = data ?? [];

  const mutation = useApiMutation<DeleteCourse, CourseOut>({endpoint: () => ({path: `/courses`, method: 'DELETE'}),});
  
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    


  if (isFetching)
    return (
  
      
      <div
        style={{
          fontSize: '40px',
          color: '#815656',
          alignContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {' '}
        Loading...
      </div>
    );

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  
  return (
    <>
      <SidePanel></SidePanel>

      {/* Top of the site with the 'somethign something ontop'*/}
      <section>
        <header
          className="flex-row"
          style={{
            minHeight: '80px',
            backgroundColor: '#815656',
            alignContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              alignContent: 'center',
            }}
          >
            <h1 style={{ fontSize: '36px', color: 'white', paddingLeft: '2%' }}>
              Something something
            </h1>
            <div
              style={{
                minHeight: '60px',
                minWidth: '60px',
                backgroundImage: 'url(/Images/chihiro.jpg)',
                backgroundSize: 'cover',
                display: 'flex',
                marginRight: '2%',
                borderRadius: '100%',
              }}
            ></div>
          </div>
        </header>
      </section>

      {/* Content boxes with courses announcements and assignments with duedates*/}
      <section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginLeft: '30px',
            marginRight: '20px',
          }}
        >
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '76%' }}
          >
            <div
              style={{
                textAlign: 'center',
                backgroundColor: '#f89dac',
                height: '100%',
                minHeight: '100vh',
              }}
            >
              <section
                style={{
                  minHeight: '80px',
                  backgroundColor: '#e38494',
                  alignContent: 'center',
                  paddingBottom: '10px',
                }}
              >
                <button
                  onClick={() => refetch()}
                  style={{
                    marginBottom: '20px',
                    marginTop: '10px',
                    border: '2px, solid, #815656',
                    borderRadius: '5px',
                    padding: '10px',
                    color: '#815656',
                    backgroundColor: '#f8d8d1',
                    
                  }}
                >
                  Refresh Courses
                </button>

                <button
                className="bg-cream hover:bg-yellow-950/10 rounded-md p-5"
                  onClick={handleToggle}
                  style={{
                    marginBottom: '20px',
                    marginTop: '10px',
                    border: '2px, solid, #815656',
                    borderRadius: '5px',
                    padding: '10px',
                    color: '#815656',
                    backgroundColor: '#f8d8d1',
                    marginLeft: '10px',
                  }}
                >
                  Add New Course
                </button>
              </section>

              {/* Lighter Pink box area with all course boxes*/}
              <p style={{ fontSize: '20px', color: '#815656' }}>
                Add, Edit, and Delete courses here !
              </p>
              <article
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: '16px',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: '20px',
                  padding: '16px',
                  boxSizing: 'border-box',
                }}
              >
                {courses.map((course) => (
                  <div
                    key={course.id}
                    style={{
                      position: 'relative',
                      flex: '0 1 calc(33.333% - 16px)',
                      minWidth: '30svh',
                      minHeight: '30svh',
                      border: '2px solid #815656',
                      backgroundColor: '#815656b0',
                      //use to be padding here: '16px'
                      borderRadius: '4px',
                      textAlign: 'left',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div style={{ backgroundColor: '#5c3c3cb0' }}>
                      {/* three-dot menu using native <details> to very nicely and neatly tuck away edit and delete buttons :3 */}
                      <details
                        style={{
                          position: 'absolute',
                          top: '8px',
                          right: '8px',
                          zIndex: 10,
                        }}
                      >
                        {/*THE ACTUAL MENU DOT !! incase i wanna resize again*/}
                        <summary
                          className="bg-transparent hover:bg-yellow-950/30 rounded-md p-5"
                          style={{
                            listStyle: 'none',
                            margin: 0,
                            padding: '6px 8px',
                            borderRadius: 6,
                            cursor: 'pointer',
                            color: '#f8d8d1',
                            //background: 'transparent',
                            border: 'none',
                            fontSize: 30,
                            lineHeight: 1,
                          }}
                        >
                          ⋮
                        </summary>

                        <div
                          style={{
                            position: 'absolute',
                            right: 0,
                            top: 'calc(100% + 8px)',
                            backgroundColor: '#f8d8d1',
                            color: '#815656',
                            border: '1px solid #815656',
                            borderRadius: 6,
                            padding: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
                            minWidth: 140,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                          }}
                        >
                          <button 
                            onClick={() =>
                              forEditCourse(course)
                            }
                            
                            className="bg-transparent hover:bg-yellow-950/20"
                            style={{
                              border: '2px solid #815656',
                              borderRadius: '4px',
                              padding: '6px 8px',
                              color: '#815656',
                              cursor: 'pointer',
                            }}
                          >
                          
                            Edit

                          </button>
                          

                          <button
                            onClick={() =>
                              mutation.mutate(
                                { id: course.id },
                                {
                                  onSuccess: () => {
                                    refetch();
                                  },
                                }
                              )
                            }
                            className="bg-transparent hover:bg-yellow-950/20"
                            style={{
                              border: '2px solid #815656',
                              borderRadius: '4px',
                              padding: '6px 8px',
                              color: '#815656',
                              cursor: 'pointer',
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </details>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        {/** WHERE COURSE NAME IS BEING PRINTED unless I need to redesign again */}
                        <h3
                          style={{
                            marginTop: '10px',
                            fontSize: '20px',
                            color: '#f8d8d1',
                          }}
                        >
                          {course.name ?? 'Untitled'}
                        </h3>
                      </div>
                      <br />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <h4
                        style={{
                          margin: 0,
                          fontSize: '16px',
                          color: '#f8d8d1',
                        }}
                      >
                        {' '}
                        Description: Pending {course.id}
                      </h4>
                    </div>
                  </div>
                ))}
              </article>
            </div>
          </div>

          {/* Email and notification box */}
          <div
            style={{
              textAlign: 'left',
              backgroundColor: '#f89dac',
              width: '20%',
              position: 'sticky',
              height: '100%',
              minHeight: '100vh',
            }}
          >
            <div
              style={{
                border: '2px solid #815656',
                borderTop: 'none',
                fontSize: '24px',
                color: 'white',
                padding: '10px',
                backgroundColor: '#e88282ff',
              }}
            >
              Emails
            </div>
            <h3
              style={{
                fontSize: '24px',
                color: 'white',
                paddingBlockEnd: '10px',
                paddingBlockStart: '10px',
              }}
            >
              No new emails
            </h3>
            <div
              style={{
                marginTop: '20px',
                fontSize: '24px',
                color: 'white',
                border: '2px solid #815656',
                padding: '10px',
                backgroundColor: '#e88282ff',
              }}
            >
              {' '}
              Notifications
            </div>
            <h2
              style={{
                fontSize: '24px',
                color: 'white',
                paddingBlockEnd: '30px',
                paddingBlockStart: '10px',
              }}
            >
              No new Notifications
            </h2>
          </div>
        </div>
      </section>

      {/**{EditisOpen && <CourseEdit isOpen={EditisOpen} setIsOpen={EditsetIsOpen} setEditingCourse={setEditingCourse} editingCourse={editingCourse}/>}**/}

      {isOpen && <CourseAdd isOpen={isOpen} setIsOpen={setIsOpen}/>}
      {EditisOpen && <CourseEdit isOpen={EditisOpen} setIsOpen={EditsetIsOpen} OneCourse={ newCourse }/>}
    </>
  );
}
