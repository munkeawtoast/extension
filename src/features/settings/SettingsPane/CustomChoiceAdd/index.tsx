import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { Icon } from '@iconify/react'
import { twc } from 'react-twc'
import StyledSettingsMenuButton from '../StyledSettingsMenuButton'
import type { CustomFilterMerged } from '../CustomChoice'

const CustomChoiceButton = twc(
  DropdownMenuItem
)`bg-tf2_settings-label select-none outline-none px-2 py-1 rounded
data-[highlighted]:bg-tf2_colors-red-dark data-[highlighted]:text-tf2_settings-title
`

type CustomChoiceAddProps = {
  onSelect: (type: CustomFilterMerged['name']) => void
}

const CustomChoiceAdd: React.FC<CustomChoiceAddProps> = () => {
  function handleSelect(type: CustomFilterMerged['name']) {
    return () => {}
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <StyledSettingsMenuButton
          className="text-tf2_settings-title"
          aria-label="Choose type of filter to add."
        >
          <Icon className="w-4 h-4" icon="ph:plus-bold" />
        </StyledSettingsMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          className="rounded overflow-clip w-72 text-base font-sans mr-2"
          side="top"
        >
          <div className="bg-tf2_colors-red text-tf2_settings-title px-2 py-1">
            Select a filter type to add.
          </div>
          <div className="flex flex-wrap gap-1 bg-stone-400 p-1">
            <CustomChoiceButton onSelect={}>Quality</CustomChoiceButton>
            {/* <CustomChoiceButton>Quality</CustomChoiceButton>
            <CustomChoiceButton>Quality</CustomChoiceButton>
            <CustomChoiceButton>Quality</CustomChoiceButton>
            <CustomChoiceButton>Quality</CustomChoiceButton> */}
          </div>
          <DropdownMenuArrow className="fill-tf2_settings-label" />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  )
}

export default CustomChoiceAdd
