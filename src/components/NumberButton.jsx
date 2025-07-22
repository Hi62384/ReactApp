import metal from '../assets/Metal.png'

//number button that has a red outline
function NumberButton({ number, selected = false, onClick }) {
  const backgroundStyle = {
    height: '95px',
    width: '95px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //make div container background red only if the buttons 'selected' prop is true
    ...(selected ? { backgroundColor: 'red' } : {}),
  }

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'rgb(255,255,80)',
    fontFamily: 'Impact',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '50px',
    width: '90%',
    height: '90%',
    borderStyle: 'solid',
    borderWidth: '5.5px',
    borderImageSource: `url(${metal})`,
    borderImageSlice: 30,
    borderImageRepeat: 'stretch',
  }

  return <div style={backgroundStyle}>
    <button style={buttonStyle} onClick={onClick}>{number}</button>
  </div>
}


export default NumberButton
