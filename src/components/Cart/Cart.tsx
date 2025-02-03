import { Overlay } from '@/src/styles/cart'
import * as Dialog from '@radix-ui/react-dialog'

export default function Cart(){
  return(
    <Dialog.Root>
      <Overlay />

      <Dialog.Portal>

      </Dialog.Portal>
    </Dialog.Root>
  )
} 