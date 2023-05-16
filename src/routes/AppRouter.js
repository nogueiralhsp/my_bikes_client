import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import {
    APIContent,
    Content,
    Footer,
    Header,
    LandingPage
} from '../components'

const AppRouter = () => (
    <BrowserRouter>
        {'test' === 'test' ?
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
            </Switch>
            :
            <Switch>
                <div>
                    <Header />
                </div>
                <div>
                    <Content />
                </div>
                <div>
                    <APIContent />
                </div>
                <div>
                    <Footer />
                </div>

            </Switch>
        }

    </BrowserRouter>

)

export default AppRouter;