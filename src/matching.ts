import { filter, map } from "@most/core";
import { curry2 } from "@most/prelude";
import { Stream } from "@most/types";
import { Action } from "@neezer/action";

function _matching(pattern: string, stream: Stream<Action>): Stream<Action> {
  const regexp = new RegExp(`^${pattern}\\..+$`);

  return filter(action => regexp.test(action.type), stream);
}

const matching = curry2(_matching);

export { matching };
