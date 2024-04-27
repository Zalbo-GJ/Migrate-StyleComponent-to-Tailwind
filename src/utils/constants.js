export const isActiveLink = (link) => {
  const route = window.location.pathname;

  return route === link ? "true" : "false";
};

export const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
