import { styled } from '..';

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'stretch',
  gap: '2rem',
  padding: '0 1rem',
  width: '100%',
  maxWidth: 500,
  margin: '0 auto',

  '@media (min-width: 1024px)': {
    gridTemplateColumns: '1fr 1fr',
    gap: '4.5rem',
    maxWidth: 1180,
  },
});

export const ImageContainer = styled('div', {
  width: '100%',
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',

  h1: { fontSize: '$2xl', color: '$gray300' },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    color: '$white',
    cursor: 'pointer',
    padding: '1.25rem',
    fontWeight: 'bold',
    fontSize: '$md',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
});
