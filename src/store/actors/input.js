export function teste(state, dispatch) {
  const inputState = state.inputState;

  const event = new CustomEvent("change-hello-name", { detail: inputState.value });
  this.dispatchEvent(event);
}