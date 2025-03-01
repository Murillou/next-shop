import { styled } from '..';

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '5rem',
  height: 656,

  h1: {
    fontSize: '20px',
    color: '$gray100',
  },

  p: {
    fontSize: '$sm',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '1rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    fontSize: '$lg',
    marginTop: '1rem',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },

  '@media(min-width: 768px)': {
    justifyContent: 'center',
    margin: '0 auto',

    h1: {
      fontSize: '$2xl',
    },

    p: {
      fontSize: '$lg',
      marginTop: '2rem',
    },

    a: {
      marginTop: '5rem',
    },
  },
});

export const ImageSuccessContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  padding: '0.25rem',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  objectFit: 'cover',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '100%',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
  },
});
