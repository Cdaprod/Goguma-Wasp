import {
  type _User,
  type _Alias,
  type _Report,
  type AuthenticatedActionDefinition,
  type Payload,
} from 'wasp/server/_types'

// PUBLIC API
export type CreateAlias<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedActionDefinition<
    [
      _User,
      _Alias,
    ],
    Input,
    Output
  >

// PUBLIC API
export type CreateReport<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedActionDefinition<
    [
      _User,
      _Report,
      _Alias,
    ],
    Input,
    Output
  >

// PUBLIC API
export type DeleteAlias<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedActionDefinition<
    [
      _User,
      _Alias,
    ],
    Input,
    Output
  >

// PUBLIC API
export type UpdateReport<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedActionDefinition<
    [
      _User,
      _Report,
    ],
    Input,
    Output
  >

