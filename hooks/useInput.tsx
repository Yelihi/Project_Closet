import React, { useEffect } from 'react';

interface UseInputProps<T extends Object> {
  value: T;
  setValue: (v: { [key in keyof T]: Record<key, T[key]> }[keyof T]) => void;
  error: { [key in keyof T]: string | undefined };
  setError: (e: { [key in keyof T]: Record<key, 'string' | 'undefined'> }[keyof T]) => void;
  source: keyof T;
  validate: any;
  connectType: keyof T;
}

const useInput = <T extends Object>({
  value,
  setValue,
  error,
  setError,
  source,
  validate,
  connectType,
}: UseInputProps<T>) => {
  useEffect(() => {
    const errors: { [key in keyof T]: string | undefined }[] = validate.map((validFunc: any) => {
      if (connectType) {
        if (value[source] !== undefined && value[connectType] !== undefined) {
          return validFunc(value[connectType], value[source]);
        }
      } else {
        if (value[source] !== undefined) {
          return validFunc(value[source]);
        }
      }
    });
    const err = errors.find(error => error);
    setError({ [source]: err } as { [key in keyof T]: Record<key, 'string' | 'undefined'> }[keyof T]);
  }, [value[source]]);

  const onChange = (v: any) => {
    setValue({ [source]: v } as { [key in keyof T]: Record<key, T[key]> }[keyof T]);
  };

  return { error: error[source], value: value[source], onChange };
};

export default useInput;

// export default useInput;

// type UserInputProps = [string, React.Dispatch<React.SetStateAction<string>>, (event: React.ChangeEvent<HTMLInputElement>) => void];

// const useInput = (initialState: string): UserInputProps => {
//   const [value, setValue] = useState(initialState);
//   const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   }, []);
//   return [value, setValue, onChangeValue];
// };

// export default useInput;
