import HomeComponent from './pages/Home/Home'
import LoginPage from './pages/Login'
import SinglePostComponent from 'components/SinglePost'
import SignUpPage from './pages/SignUp'
import CreateMainComponent from './pages/Create'
import Feed from './pages/Feed'
import DashboardMainComponent from './pages/Dashboard'
import Profile from './pages/Profile'
import SettingsComponent from './pages/Settings'

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
        path: '/settings',
        component: SettingsComponent,
        isPrivate: true,
    },
]

export default Routes
