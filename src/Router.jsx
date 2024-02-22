import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Project/Projects";
const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />, 
        children: [
            {
                index: true, 
                element: <Projects />
            },
            {
                path: "resume", 
                element: <Resume />
            }, 
            {
                path: "projects", 
                element: <Projects />
            }
        ]
    }
])
export default function Router() {
    return(
        <RouterProvider router={router} />
    )
}