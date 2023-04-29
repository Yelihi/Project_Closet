import { enableES5, produce } from 'immer';

export default <T, U = T>(...args: Parameters<typeof produce>) => {
  enableES5();
  return produce(...args) as (...args: Parameters<typeof produce>) => Promise<unknown>;
};
