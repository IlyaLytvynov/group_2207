export default () => ({
  grid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '0 15px',
    gridAutoRows: '11px',
  }
});
