import React, { useCallback } from 'react';

type Props = {
  description: string;
  onSubmit: () => void;
  onCencel: () => void;
};

const useConfirm = (description: string, onSubmit: () => void, onCencel: () => void) => {
  const confirm = useCallback(() => {
    if (window.confirm(description)) {
      onSubmit();
    } else {
      onCencel();
    }
  }, [description, onSubmit, onCencel]);

  return confirm;
};

export default useConfirm;
