import { createFileRoute, Link } from '@tanstack/react-router';
import { SidePanel } from '../components/sidePanel';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { backendFetcher } from '../integrations/fetcher';

interface Assignment {
  id: number;
  courseID: number;
  authorId: number;
  createdAt: string;
  fileType: string;
  published: boolean;
  title: string;
  updatedAt: string;
}



export const Route = createFileRoute('/dashboard')({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(assignmentsQueryOptions),
});

const assignmentsQueryOptions = {
  queryKey: ['assignments'],
  queryFn: backendFetcher<Array< Assignment >>('/assignments'),
  initialData: [],
};


function RouteComponent() {

    const { data, refetch, error, isFetching } = useQuery(assignmentsQueryOptions);

   
   return (
           <>
               <SidePanel></SidePanel>
   
               <section>
                   <header className="flex-row" style={{minHeight: "80px", backgroundColor: "#815656",alignContent: "center", }}>
                       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", alignContent: "center"}}>
                           <h1 style={{ fontSize: "36px", color: "white" }}>Something something</h1>
                           <div style={{minHeight: "60px", minWidth: "60px",backgroundImage: "url(/Images/chihiro.jpg)" ,backgroundSize:"cover",display:"flex", marginRight:"2%", borderRadius:"100%" }}></div>
                           
                       </div>
                   </header>
   
   
               </section>
   
               <section>
                   {/* Content boxes with courses, announcements and assignments with duedates*/}
                   <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginLeft: "30px", marginRight: "20px" }}>
                       <div style={{ display: "flex", flexDirection: "column", width: "76%" }}>
                           
                           <div style={{ textAlign: "center", backgroundColor: "#f89dac", padding: "10px", height: "100vh" }}>
                               <h1 style={{ fontSize: "50px", color: "#815656" }}> Gonna add assignment lines here</h1>
                               <p style={{ fontSize: "20px", color: "#815656" }}>gonna add assignment due dates here</p>
                               <article style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'stretch', marginTop: '20px' }}>
                                    {data.map((assignment) => (
                                        <div
                                          key={assignment.id}
                                          style={{
                                            border: '2px solid #815656',
                                            backgroundColor:"#f8d8d1",
                                            padding: '16px',
                                            borderRadius: '4px',
                                            textAlign: 'left',
                                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                                          }}
                                        >
                                          <h3 style={{ margin: 0, fontSize: '20px', color: '#815656' }}>{assignment.title ?? 'Untitled'}</h3>
                                            <p style={{ margin: '8px 0 0', color: '#815656' }}>Last updated: {new Date(assignment.updatedAt).toString()}</p> 
                                        </div>

                                    ))}
                                </article>
                            
                        </div>
                    </div>
   
   
                       {/* Email and notification box */}
                       <div style={{ textAlign: "left", backgroundColor: "#f89dac", width: "20%", position: "sticky", height:"100vh"}}>
                           <div style={{border: "2px solid #815656",borderTop: "none", fontSize: "24px", color: "white", padding: "10px", backgroundColor: "#e88282ff" }}>Emails</div>
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

