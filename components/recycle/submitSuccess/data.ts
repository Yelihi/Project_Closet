import Router from 'next/router';

export const Data = {
  add: {
    title: '의류를 성공적으로 저장하였습니다!',
    subTitle: '저장하신 의류의 상태를 확인하고 싶으시다면 상세보기로, 더 저장하시려면 계속 저장하기를 눌러주세요',
    buttonNamePrimary: '상세페이지로',
    buttonName: '계속 저장하기',
    primaryPage: 'details',
    otherPage: 'add',
    status: 'success',
  },
  addFailure: {
    title: '의류 저장에 실패하였습니다',
    subTitle: '알 수 없는 오류가 발생하였습니다. 다시 시도해주세요 ',
    buttonNamePrimary: '저장 페이지로',
    buttonName: '메인페이지로',
    primaryPage: 'add',
    otherPage: 'overview',
    status: 'error',
  },
} as const;

export type ResultData = typeof Data;
export type ResultDataKey = keyof ResultData;
