import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import MyCourses from "../pages/faculty/MyCourses";
import MyStudents from "../pages/faculty/MyStudents";

export const facultyPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <FacultyDashboard/>,
    },
    {
        name: 'My Course',
        path: 'my-course',
        element: <MyCourses/>,
    },
    {
        path: 'courses/:registerSemesterId/:courseId',
        element: <MyStudents/>,
    },
]