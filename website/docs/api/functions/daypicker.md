---
id: "daypicker"
title: "Function: DayPicker"
sidebar_label: "DayPicker"
custom_edit_url: null
hide_title: true
---

# Function: DayPicker

▸ **DayPicker**(`props`: [*DayPickerProps*](../interfaces/daypickerprops.md)): JSX.Element

Render a date picker component.

**Example**

```jsx showOutput
function Example() {
  const [selected, setSelected] = useState();

  const handleDayClick = (day, { selected }) => {
    if (!selected) setSelected(day);
    else setSelected();
  };

  return <DayPicker selected={selected} onDayClick={handleDayClick} />;
}
```

#### Parameters:

Name | Type |
:------ | :------ |
`props` | [*DayPickerProps*](../interfaces/daypickerprops.md) |

**Returns:** JSX.Element
