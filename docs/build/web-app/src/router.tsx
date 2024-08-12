import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Layout } from '../../../../src/Layout.jsx'

import createAuthRequiredPage from "./auth/pages/createAuthRequiredPage"

import SignupPage from '../../../../src/pages/auth/Signup.jsx'
import AliasPage from '../../../../src/pages/Alias.jsx'
import ReportPage from '../../../../src/pages/Report.jsx'
import DashboardPage from '../../../../src/pages/Dashboard.jsx'


import { routes } from 'wasp/client/router'

export const routeNameToRouteComponent = {
  SignupRoute: SignupPage,
  AliasRoute: createAuthRequiredPage(AliasPage),
  ReportRoute: createAuthRequiredPage(ReportPage),
  DashboardRoute: createAuthRequiredPage(DashboardPage),
} as const;

const router = (
  <Router basename="/">
    <Layout>
    <Switch>
      {Object.entries(routes).map(([routeKey, route]) => (
        <Route
          exact
          key={routeKey}
          path={route.to}
          component={routeNameToRouteComponent[routeKey]}
        />
      ))}
    </Switch>
    </Layout>
  </Router>
)

export default router
