import { twc } from 'react-twc'

const StyledSettingsMenuButton = twc.button.attrs({
  type: 'button',
})`rounded-sm p-2 last:mr-0 mr-1 hover:bg-tf2_settings-label/40 active:bg-tf2_settings-label/60`

export default StyledSettingsMenuButton
