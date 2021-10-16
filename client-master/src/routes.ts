import ExperimentalComponent from 'components/Experiement/ExperimentalComponent'
import HomeComponent from 'components/Home'
import LoginPage from 'components/Login'
import SinglePostComponent from 'components/Shared/SinglePost'
import SignUpPage from 'components/SignUp'
import CreateMainComponent from 'view/Create'
import Feed from 'view/Feed'
import DashboardMainComponent from 'view/Dashboard'
import Profile from './components/Profile'
import SettingsComponent from 'components/Settings'
const Routes = [
    {
        path: '/',
        component: HomeComponent,
        isPrivate: false,
    },
    {
        path: '/login',
        component: LoginPage,
        isPrivate: false,
    },
    {
        path: '/signup',
        component: SignUpPage,
        isPrivate: false,
    },
    {
        path: '/create',
        component: CreateMainComponent,
        isPrivate: true,
    },
    {
        path: '/feed',
        component: Feed,
        isPrivate: true,
    },
    {
        path: '/dashboard',
        component: DashboardMainComponent,
        isPrivate: true,
    },
    {
        path: '/profile',
        component: Profile,
        isPrivate: true,
    },
    {
        path: '/singlepost',
        component: SinglePostComponent,
        isPrivate: true,
    },
    {
        path: '/test',
        component: ExperimentalComponent,
        isPrivate: true,
    },
    {
        path: '/settings',
        component: SettingsComponent,
        isPrivate: true,
    },
]

export default Routes
