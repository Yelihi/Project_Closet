import useSWRInfinite from 'swr/infinite';
import { backUrl, fetcher } from '../config/config';

export interface SWRResult<T> {
  items: T[];
  nextCursor: number;
}

// 좀더 확장하려면 url 을 인자로 넘겨주는 방식으로 처리하면 된다.
export const usePagination = <T>(categoriName: string, windowWidth: string) => {
  const getKey = (pageIndex: number, previousPageData: SWRResult<T>) => {
    if (previousPageData && !previousPageData.items) return null;
    if (pageIndex === 0) return `${backUrl}/posts/clothes/store?lastId=0&categori=${categoriName}&deviceType=${windowWidth}`;
    return `${backUrl}/posts/clothes/store?lastId=${previousPageData.nextCursor}&categori=${categoriName}&deviceType=${windowWidth}`;
  };

  const { data: items, error: postsError, size, setSize, isLoading: isItmesLoading, mutate: infinitiMutate } = useSWRInfinite<SWRResult<T>, Error>(getKey, fetcher);

  const posts = items?.map(item => item.items);
  const paginationPosts = posts?.flat();
  const loadingMore = posts && typeof posts[size - 1] === 'undefined';
  const isEmpty = posts?.[0]?.length === 0;
  const isReachedEnd = posts && posts[posts.length - 1]?.length < 9;

  return {
    items,
    paginationPosts,
    postsError,
    size,
    setSize,
    loadingMore,
    isReachedEnd,
    isItmesLoading,
    infinitiMutate,
  };
};
