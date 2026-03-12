import HomeComponent from 'view/Home/Home'
import LoginPage from 'view/Login'
import SinglePostComponent from 'components/SinglePost'
import SignUpPage from 'view/SignUp'
import CreateMainComponent from 'view/Create'
import Feed from 'view/Feed'
import DashboardMainComponent from 'view/Dashboard'
import Profile from './view/Profile'
import SettingsComponent from 'view/Settings'

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
