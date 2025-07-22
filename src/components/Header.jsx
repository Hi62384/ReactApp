//component for h1 header with styles

/*this component is just a h1 element with a style which couldve been done with an external css file,
 but since its a small project and we have to use react inline styles, I just seperated it into its
 own component
 */
function Header({ children }) {
  const style = {
    color: 'rgb(255,255,80)',
    background: 'linear-gradient(to right, #2058df, #00f2fe)',
    textAlign: "center",
    fontFamily: "'Baloo 2', cursive",
    fontSize: '120px',
    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.9)',
    margin: 0,
  }
  return <h1 style={style}>{children}</h1>
}

export default Header