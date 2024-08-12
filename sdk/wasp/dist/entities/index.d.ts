import { type User, type Alias, type Report } from "@prisma/client";
export { type User, type Alias, type Report, type Auth, type AuthIdentity, } from "@prisma/client";
export type Entity = User | Alias | Report | never;
export type EntityName = "User" | "Alias" | "Report" | never;
