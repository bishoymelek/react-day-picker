import React from 'react';

/**
 * Represent the value of a [[NavigationContext]].
 */
export interface NavigationContextValue {
  /** The month coming before the current one */
  prevMonth?: Date;
  /** The month coming after the current one */
  nextMonth?: Date;
  /** The currently displayed month. When multiple months, is the first. */
  currentMonth: Date;
  /** The day that should focus when rendering. Used for keyboard navigation */
  focusedDay?: Date;
}

export const defaultNavigationContext: NavigationContextValue = {
  currentMonth: new Date()
};

/**
 * Context to consume navigation values (such as the current month) in the
 * DayPicker internal components.
 */
export const NavigationContext = React.createContext(defaultNavigationContext);
