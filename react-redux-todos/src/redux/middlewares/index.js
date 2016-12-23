export const crashReporter = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (err) {
    console.group('carshReporter');
    console.error('error happen with action == ', action);
    console.error(err);
    console.groupEnd('carshReporter');
  }
}
