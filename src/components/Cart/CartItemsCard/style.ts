import { styled } from '@/src/styles';

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  img: {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
  },
});

export const CardInfoProduct = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
});
