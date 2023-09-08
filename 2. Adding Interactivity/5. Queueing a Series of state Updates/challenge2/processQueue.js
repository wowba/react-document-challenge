export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (const setFunction of queue) {
    if (typeof setFunction === "number") {
      finalState = setFunction
    } else {
      finalState = setFunction(finalState)
    }
  }

  return finalState;
}
