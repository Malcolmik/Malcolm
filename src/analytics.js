export const track = (name, data) => {
  if (window.va) {
    window.va('event', { name, data });
  }
};
