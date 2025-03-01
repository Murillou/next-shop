import { styled } from '@/src/styles';

export const CardContainer = styled('div', {
  display: 'flex',
  paddingTop: '1.47rem',
  gap: '1.25rem',
  width: '100%',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    width: '100%',
    maxWidth: 95,
  },

  '@media (min-width: 600px)': {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
  },
});

export const CardInfoProduct = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
  width: '100%',

  p: {
    color: '$gray300',
    fontSize: '12px',
  },

  span: {
    color: '$green300',
    textAlign: 'center',
    fontSize: '$xs',
  },

  strong: {
    color: '$gray100',
    fontSize: '$sm',
    fontWeight: 'bold',
  },

  button: {
    border: 'none',
    textAlign: 'left',
    backgroundColor: 'transparent',
    color: '$green300',
    paddingTop: '0rem',
    fontSize: '$sm',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  '@media (min-width: 900px)': {
    p: {
      fontSize: '$md',
    },
    span: {
      fontSize: '$sm',
    },
    strong: {
      fontSize: '$md',
    },
    button: {
      fontSize: '$md',
    },
  },
});
