import { interpolatePath } from './linkHelpers';
// PUBLIC API
export const routes = {
    SignupRoute: {
        to: "/signup",
        build: (options) => interpolatePath("/signup", undefined, options === null || options === void 0 ? void 0 : options.search, options === null || options === void 0 ? void 0 : options.hash),
    },
    AliasRoute: {
        to: "/alias",
        build: (options) => interpolatePath("/alias", undefined, options === null || options === void 0 ? void 0 : options.search, options === null || options === void 0 ? void 0 : options.hash),
    },
    ReportRoute: {
        to: "/report/:reportId",
        build: (options) => interpolatePath("/report/:reportId", options.params, options === null || options === void 0 ? void 0 : options.search, options === null || options === void 0 ? void 0 : options.hash),
    },
    DashboardRoute: {
        to: "/",
        build: (options) => interpolatePath("/", undefined, options === null || options === void 0 ? void 0 : options.search, options === null || options === void 0 ? void 0 : options.hash),
    },
};
// PUBLIC API
export { Link } from './Link';
//# sourceMappingURL=index.js.map