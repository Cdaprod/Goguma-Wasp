import { type Entity, type EntityName, type User, type Alias, type Report } from 'wasp/entities';
export type _User = WithName<User, "User">;
export type _Alias = WithName<Alias, "Alias">;
export type _Report = WithName<Report, "Report">;
export type _Entity = _User | _Alias | _Report | never;
type WithName<E extends Entity, Name extends EntityName> = E & {
    _entityName: Name;
};
export {};
