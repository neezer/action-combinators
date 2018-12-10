import { filter } from "@most/core";
import { curry2 } from "@most/prelude";
import { Stream } from "@most/types";
import { Action } from "@neezer/action";

function _withConnectionId(
  connectionId: string,
  stream: Stream<Action>
): Stream<Action> {
  return filter(action => action.meta.connectionId === connectionId, stream);
}

export const withConnectionId = curry2(_withConnectionId);
