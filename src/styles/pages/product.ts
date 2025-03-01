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

  '@media (min-width: 768px)': {
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    maxWidth: 1180,
  },
  '@media (min-width: 1280px)': {
    gap: '4.5rem',
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

  h1: { fontSize: '20px', color: '$gray300' },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '20px',
    color: '$green300',
    fontWeight: 'bold',
  },

  p: {
    marginTop: '1rem',
    fontSize: '16px',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    margin: '1rem 0',
    backgroundColor: '$green500',
    border: 0,
    borderRadius: 8,
    color: '$white',
    cursor: 'pointer',
    padding: '1.25rem',
    fontWeight: 'bold',
    fontSize: '16px',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },

  '@media (min-width: 768px)': {
    h1: { fontSize: '$2xl' },

    span: {
      fontSize: '$2xl',
    },

    p: {
      fontSize: '$md',
      marginTop: '2.5rem',
    },
  },
});
