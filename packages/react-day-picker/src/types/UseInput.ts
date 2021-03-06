import * as React from 'react';

import { DayPickerProps } from '../components/DayPicker/DayPickerProps';

export type UseInput = {
  setMonth: React.Dispatch<React.SetStateAction<Date>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  dayPickerProps: Partial<DayPickerProps>;
  inputProps: Partial<JSX.IntrinsicElements['input']>;
};
