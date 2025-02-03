import { styled } from '../../styles/'
import * as Dialog from '@radix-ui/react-dialog'



export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100vh',
  width: '100%',
  maxWidth: 480,
  backgroundColor: '$gray800',
  border: 'none',
  padding: '3rem'
})

export const Close = styled(Dialog.Close, {
  
})
