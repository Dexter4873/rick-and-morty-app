function Grid({ columns, children }) {
  const gridTemplateColumns = '1fr '.repeat(columns).trim();
  return (
    <div style={{ display: 'grid', gridTemplateColumns, gridGap: '1rem' }}>
      {children}
    </div>
  );
}

export default Grid;
