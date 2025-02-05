import { styled } from '../../styles/';
import * as Dialog from '@radix-ui/react-dialog';

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  height: '110vh',
  width: '25vw',
  minWidth: '250px',
  backgroundColor: '$gray800',
  border: 'none',
  padding: '4rem 3rem 3rem 3rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    div: {
      display: 'flex',
      justifyContent: 'space-between',

      p: {
        color: '$gray300',
        fontSize: '$md',
      },

      strong: {
        fontSize: '$lg',
        color: '$gray100',
      },

      span: {
        fontSize: '$xl',
        color: '$gray100',
        fontWeight: 'bold',
      },
    },

    button: {
      backgroundColor: '$green500',
      border: 'none',
      borderRadius: 8,
      marginTop: '3.5rem',
      padding: '1.25rem 2rem',
      color: '#fff',
      cursor: 'pointer',
      transition: 'border 0.6s',
      fontSize: '$lg',
      fontWeight: 'bold',

      '&:hover': {
        backgroundColor: '$green300',
      },
    },
  },

  '@media (min-width: 1232px)': {
    height: '100vh',
  },
});

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  cursor: 'pointer',
});

export const ProductBag = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  h1: {
    fontSize: '$lg',
    color: '$gray100',
  },
});

export const CartEmpty = styled('div', {
  color: '$green300',
  fontSize: '2xl',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',

  h1: {
    color: '$green300',
  },
});
