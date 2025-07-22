import moneyButton from '../assets/MoneyButton.png';

//component for money button with styles

function MoneyButton({ value, onClick }) {
  const style = {
    background: `url(${moneyButton}) no-repeat center center`,
    backgroundSize: '100% 100%',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    outline: 'none',
    textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
    height: '150px',
    fontSize: '60px',
  }

  //given onClick prop function should have the money value as a parameter
  return <button style={style} onClick={() => onClick(value)}>${value}</button>
}

export default MoneyButton