import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
});

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ButtonCart = styled(Dialog.Trigger, {
  backgroundColor: '$gray800',
  padding: '0.75rem',
  borderRadius: 6,
  border: 'none',
  width: 48,
  height: 48,
  cursor: 'pointer',
  position: 'relative',

  span: {
    color: '#fff',
    backgroundColor: '$green300',
    borderRadius: '100%',
    padding: '0.2rem 0.5rem',
    position: 'absolute',
    top: '-0.2rem',
    right: '-0.65rem',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.07)',
  },
});
