import GoldButton from '../assets/GoldButton.png'

//component for gold style buttons

/*this component is just a button element with a style which couldve been done with an external css file,
 but since its a small project and we have to use react inline styles, I just seperated it into its
 own component
 */

function UtilityButton({ children, onClick }) {
  const style = {
    background: `url(${GoldButton}) no-repeat center center`,
    backgroundSize: '100% 100%',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    outline: 'none',
    textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
    height: '120px',
    fontSize: '60px',
  }


  return <button style={style} onClick={onClick}>{children}</button>
}


export default UtilityButton
