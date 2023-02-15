import { HomePage, TasksPage, ProfilePage } from './pages';
import { withNavigationWatcher } from './contexts/navigation';
import DrInfo from './pages/DrInfo/DrInfo';
import EmployeeInfo from './pages/EmployeeInfo/EmployeeInfo';
import PatientInfo from './pages/PatientInfo/PatientInfo';

const routes = [
    {
        path: '/drInfo',
        element: DrInfo
    },
    {
        path: '/employee',
        element: EmployeeInfo
    },
       {
        path: '/patient',
        element: PatientInfo
    },
    {
        path: '/tasks',
        element: TasksPage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
