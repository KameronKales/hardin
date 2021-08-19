import { ChangeFuncs } from "../core/changeFunc";
import { ValueFuncs } from "../core/valueFunc";

class FallBackClass {}

export const CompositeMixins = (coreClass) => {
  if (coreClass) {
    return ChangeFuncs(ValueFuncs(coreClass));
  }
  return ChangeFuncs(ValueFuncs(FallBackClass));
};
