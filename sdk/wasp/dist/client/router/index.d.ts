import type { RouteDefinitionsToRoutes, OptionalRouteOptions, ParamValue } from './types';
export declare const routes: {
    readonly SignupRoute: {
        readonly to: "/signup";
        readonly build: (options?: OptionalRouteOptions) => string;
    };
    readonly AliasRoute: {
        readonly to: "/alias";
        readonly build: (options?: OptionalRouteOptions) => string;
    };
    readonly ReportRoute: {
        readonly to: "/report/:reportId";
        readonly build: (options: {
            params: {
                reportId: ParamValue;
            };
        } & OptionalRouteOptions) => string;
    };
    readonly DashboardRoute: {
        readonly to: "/";
        readonly build: (options?: OptionalRouteOptions) => string;
    };
};
export type Routes = RouteDefinitionsToRoutes<typeof routes>;
export { Link } from './Link';
