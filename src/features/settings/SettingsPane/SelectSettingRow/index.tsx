import type { StyledFormControlSettingRowProps } from '../StyledFormControlSettingRow'
import StyledFormControlSettingRow from '../StyledFormControlSettingRow'

export type SelectOption = {
  value: string
  label: string
}

// TODO(wait4 radix): change to radix
// FIXME: fix onSelectValueType to make T[number]['value'] not need as const
export type SelectSettingRowProps<T extends Array<SelectOption>> = {
  value: T[number]['value']
  availableValues: T
  onSelectValue: (value: T[number]['value']) => void
} & Omit<StyledFormControlSettingRowProps, 'children'>

// const SelectSettingRow:T = ({
//   availableValues,
//   onSelectValue,
//   value,
//   ...drillProps
// }: SelectSettingRowProps<T>) => {
//   function handleValueChange(event: React.ChangeEvent<HTMLSelectElement>) {
//     onSelectValue(event.target.value)
//   }
//   return (
//     <StyledFormControlSettingRow {...drillProps}>
//       <select value={value} onChange={handleValueChange}>
//         {availableValues.map(({ label, value }) => (
//           <option value={value}>{label}</option>
//         ))}
//       </select>
//     </StyledFormControlSettingRow>
//   )
// }

function SelectSettingRow<T extends Array<SelectOption>>({
  availableValues,
  onSelectValue,
  value,
  ...drillProps
}: SelectSettingRowProps<T>) {
  function handleValueChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onSelectValue(event.target.value as T[number]['value'])
  }
  return (
    <StyledFormControlSettingRow {...drillProps}>
      <select
        className="w-32 bg-tf2_settings-title"
        value={value}
        onChange={handleValueChange}
      >
        {availableValues.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </StyledFormControlSettingRow>
  )
}

export default SelectSettingRow
