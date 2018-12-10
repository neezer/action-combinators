import { filter } from "@most/core";
import { curry2 } from "@most/prelude";
import { Action } from "@neezer/action";
import { Stream } from "@most/types";

function _ofType(type: string, stream: Stream<Action>): Stream<Action> {
  const typeEquals = (t: Action) => t.type === type;

  return filter(typeEquals, stream);
}

export const ofType = curry2(_ofType);
