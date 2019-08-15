export const routes = {
    dashboard: {
        home: '/',
    },
    auth: {
        login: '/login',
        signup: '/signup'
    },
    catalog: {
        main: '/catalog',
        search: '/catalog/search',
        statistics: '/catalog/statistics'
    },
    decks: {
        main: '/decks',
        add: '/decks/add'
    },
    card: {
        main: '/card/:id'
    }
}
