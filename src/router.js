import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage'
import CalendarPage from './views/CalendarPage'
import CalculatorPage from './views/CalculatorPage'
import ApplicationForm from './views/ApplicationForm'
import AboutPage from './views/AboutPage'

const routes = [{
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/CalendarPage',
        name: 'CalendsrPage',
        component: CalendarPage,
    },

    {
        path: '/CalculatorPage',
        name: 'CalculatorPage',
        component: CalculatorPage,
    },
    {
        path: '/ApplicationForm',
        name: 'ApplicationForm',
        component: ApplicationForm,
    },
    {
        path: '/AboutPage',
        name: 'AboutPage',
        component: AboutPage
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
