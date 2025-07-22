//component that holds children in a grid
function GridContainer({ gridCount, style = {}, children }) {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${gridCount}, 1fr)`,
    ...style,
  };

  return <div style={containerStyle}>{children}</div>;
}

export default GridContainer;