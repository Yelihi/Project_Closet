const customMediaQuery = (maxWidth: number) => `@media screen and (min-width: ${maxWidth}px)`;
export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(1024),
  tablet: customMediaQuery(786),
  phone: customMediaQuery(320),
};
