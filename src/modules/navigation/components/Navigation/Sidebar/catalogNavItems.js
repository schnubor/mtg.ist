import React from 'react'
import { routes } from '../../../../../routes'
import SearchIcon from '@material-ui/icons/Search'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import BarChartIcon from '@material-ui/icons/BarChartOutlined'

const catalogNav = [
    {
        icon: <SearchIcon/>,
        text: 'Search',
        link: routes.catalog.search
    },
    {
        icon: <ViewModuleIcon/>,
        text: 'Collection',
        link: routes.catalog.main
    },
    {
        icon: <BarChartIcon/>,
        text: 'Statistics',
        link: routes.catalog.statistics
    },
]

export default catalogNav
