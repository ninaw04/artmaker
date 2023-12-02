import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(16, 1fr)',
    gridTemplateColumns: 'repeat(16, 1fr)',
    width: '64vmin',
    height: '64vmin',
    border: '1px solid white',
  },
  cell: {
    cursor: 'pointer',
    border: '1px solid white',
    background: 'black',
    transition: 'all 200ms linear',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});
