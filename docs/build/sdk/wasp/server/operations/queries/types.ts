
import {
  type _Alias,
  type _User,
  type _Report,
  type AuthenticatedQueryDefinition,
  type Payload,
} from 'wasp/server/_types'

// PUBLIC API
export type GetAliases<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQueryDefinition<
    [
      _Alias,
      _User,
    ],
    Input,
    Output
  >

// PUBLIC API
export type GetReport<Input extends Payload = never, Output extends Payload = Payload> = 
  AuthenticatedQueryDefinition<
    [
      _Report,
      _User,
    ],
    Input,
    Output
  >

