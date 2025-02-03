import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content } from './style'
import { X } from 'phosphor-react'

export default function Cart(){
  return(

      <Dialog.Portal>
        <Close asChild>
          <X size={32}/>
      
        </Close>
        
        <Content>
          <h1>oi</h1>
        </Content>

      </Dialog.Portal>
  )
} 