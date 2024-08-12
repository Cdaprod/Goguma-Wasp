import { interpolatePath } from './linkHelpers'
import type {
  RouteDefinitionsToRoutes,
  OptionalRouteOptions,
  ParamValue,
} from './types'

// PUBLIC API
export const routes = {
  SignupRoute: {
    to: "/signup",
    build: (
      options?: OptionalRouteOptions,
    ) => interpolatePath("/signup", undefined, options?.search, options?.hash),
  },
  AliasRoute: {
    to: "/alias",
    build: (
      options?: OptionalRouteOptions,
    ) => interpolatePath("/alias", undefined, options?.search, options?.hash),
  },
  ReportRoute: {
    to: "/report/:reportId",
    build: (
      options: {
        params: {reportId: ParamValue;}
      } & OptionalRouteOptions,
    ) => interpolatePath("/report/:reportId", options.params, options?.search, options?.hash),
  },
  DashboardRoute: {
    to: "/",
    build: (
      options?: OptionalRouteOptions,
    ) => interpolatePath("/", undefined, options?.search, options?.hash),
  },
} as const;

// PRIVATE API
export type Routes = RouteDefinitionsToRoutes<typeof routes>

// PUBLIC API
export { Link } from './Link'
