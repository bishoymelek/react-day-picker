import { isAfter, isBefore, isSameDay } from 'date-fns';

import { DaysRange } from '../../types';

/**
 * Add a day to an existing range.
 *
 * The returned range takes in account the `undefined` values and if the added
 * day is already present in the range.
 */
export function addToRange(range: DaysRange, day: Date): DaysRange {
  const { from, to } = range;
  if (!from) {
    return { from: day };
  }
  if (!to && isSameDay(from, day)) {
    return { from: undefined, to: undefined };
  }
  if (!to && isBefore(day, from)) {
    return { from: day, to: from };
  }
  if (!to) {
    return { from, to: day };
  }
  if (isSameDay(to, day)) {
    return { from: to };
  }
  if (isAfter(from, day)) {
    return { from: day, to };
  }
  return { from, to: day };
}
