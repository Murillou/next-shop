import * as Dialog from '@radix-ui/react-dialog'
import { Overlay } from './style'

export default function Cart(){
  return(
    <Dialog.Root>
      <Overlay />

      <Dialog.Portal>

      </Dialog.Portal>
    </Dialog.Root>
  )
} 