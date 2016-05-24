import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export default function BlockedNavigation() {
  return <DayPicker canChangeMonth={false} />;
}