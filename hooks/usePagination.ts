import useSWRInfinite from 'swr/infinite';
import { backUrl, fetcher } from '../config/config';

export const usePagination = <T>() => {
  const getKey = (pageIndex: number, previousPageData: T[]) => {
    if (previousPageData && !previousPageData.length) return null;
    return `${backUrl}/posts/clothes/store?lastId=${pageIndex}`;
  };

  const { data: items, error, isLoading, size, setSize } = useSWRInfinite(getKey, fetcher);

  const paginationPosts = items?.flat();

  return {
    items,
    error,
    isLoading,
    size,
    setSize,
  };
};
