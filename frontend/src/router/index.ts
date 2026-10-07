import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },

    // Authentication
    {
      path: '/auth',
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/LoginView.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('../views/auth/RegisterView.vue'),
        },
      ],
    },

    // Dashboard
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'),
    },

    // Tournaments
    {
      path: '/tournaments',
      children: [
        {
          path: '',
          name: 'tournaments',
          component: () =>
            import('../views/tournaments/TournamentsView.vue'),
        },
        {
          path: ':id',
          name: 'tournament-details',
          component: () =>
            import('../views/tournaments/TournamentDetailsView.vue'),
        },
      ],
    },

    // Teams
    {
      path: '/teams',
      name: 'teams',
      component: () => import('../views/teams/TeamsView.vue'),
    },

    // Matches
    {
      path: '/matches',
      name: 'matches',
      component: () => import('../views/matches/MatchesView.vue'),
    },

    // Standings
    {
      path: '/standings',
      name: 'standings',
      component: () => import('../views/standings/StandingsView.vue'),
    },

    // Analytics
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../views/analytics/AnalyticsView.vue'),
    },
  ],
})

export default router
