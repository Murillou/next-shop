import { styled } from '@/src/styles';

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '1.47rem',
  gap: '1.25rem',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },
});

export const CardInfoProduct = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',

  span: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    color: '$gray100',
    fontSize: '$md',
    fontWeight: 'bold',
  },

  button: {
    border: 'none',
    textAlign: 'left',
    backgroundColor: 'transparent',
    color: '$green300',
    paddingTop: '0.7rem',
    fontSize: '$md',
    fontWeight: 'bold',
  },
});
