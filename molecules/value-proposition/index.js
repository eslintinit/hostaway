import { ValuePropositionFullscreen } from './fullscreen'
import { ValuePropositionColumnItem } from './column-item'

export const ValueProposition = ({ feature, fullscreen, ...props }) => {
  if (fullscreen) return <ValuePropositionFullscreen {...props} />

  return <ValuePropositionColumnItem feature={feature} />
}
