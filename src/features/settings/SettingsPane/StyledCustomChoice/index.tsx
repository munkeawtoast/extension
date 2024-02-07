import type { TwcComponentProps } from 'react-twc'
import { twc } from 'react-twc'

export type CustomChoiceProps = TwcComponentProps<'div'>

const StyledCustomChoice = twc.div`p-2`

export default StyledCustomChoice
