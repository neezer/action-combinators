import { map } from "@most/core";
import { Action, shiftType } from "@neezer/action";
import { Stream } from "@most/types";

function shiftTypes(stream: Stream<Action>): Stream<Action> {
  return map(shiftType, stream);
}

export { shiftTypes as shiftType };
