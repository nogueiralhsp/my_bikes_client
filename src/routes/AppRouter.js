import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import {
    APIContent,
    Content,
    Footer,
    Header,
    LandingPage,
    SignupPage
} from '../components'

const AppRouter = () => (
    <BrowserRouter>
        {'test' === 'test' ?
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/signup" component={SignupPage} exact={true}/>
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