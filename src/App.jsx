import React, { useState } from 'react'
import Header from './components/Header'
import GridContainer from './components/GridContainer'
import LotteryBalls from './assets/LotteryBalls.png'
import MoneyButton from './components/MoneyButton'
import NumberButton from './components/NumberButton'
import UtilityButton from './components/UtilityButton'
import Notification from './components/Notification'



function App() {
  //notification states
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationColor, setNotificationColor] = useState('');

  //selected numbers and price
  const [numbersSelected, setNumbersSelected] = useState([])
  const [price, setPrice] = useState(0)

  const numberButtons = 20
  const maxNumbers = 5



  //function to display the notification with a message and color
  const displayNotification = (message, color) => {
    setShowNotification(true)
    setNotificationMessage(message)
    setNotificationColor(color)
  }



  //removes a number from numbersSelected array
  const removeNumber = (number) => {
    setNumbersSelected(prev => prev.filter(num => num !== number));
  };



  //function to select a number
  const selectNumber = (number) => {
    //if the number to be selected is already selected, then deselect it
    if (numbersSelected.includes(number)) {
      removeNumber(number)
      return
    }

    //if max numbers have been selected, display notification
    if (numbersSelected.length >= maxNumbers) {
      displayNotification("Max Numbers Selected!", 'red')
      return
    }

    //if no errors, add the number to numbersSelected
    setNumbersSelected(prev => [...prev, number]);
  }



  //adds money to the final price
  const addMoney = (amount) => {
    //if max numbers are not selected, display notification
    if (numbersSelected.length < maxNumbers) {
      displayNotification(`First Select ${maxNumbers} Numbers!`, 'red')
      return
    }

    //if no errors, increase price by amount
    setPrice(price + amount)
  }



  //resets price and numbers selected
  const reset = () => {
    setPrice(0)
    setNumbersSelected([])
  }



  //gets a random number that doesnt already exist in selected numbers array
  const getRandUniqueNum = (excludedArray) => {
    //get the possible numbers that can be chosen in an array
    const possibleNumbers = [];
    for (let i = 1; i <= 20; i++) {
      if (!excludedArray.includes(i)) {
        possibleNumbers.push(i);
      }
    }

    //get a random index from the array
    const randomIndex = Math.floor(Math.random() * possibleNumbers.length);

    return possibleNumbers[randomIndex];
  }



  //selects random numbers based on how many numbers are already selected
  const selectRandomNumbers = () => {
    //the amount of numbers left to be picked before max numbers is reached
    const amountOfNumbersToPick = maxNumbers - numbersSelected.length
    //temp array because states dont update instantly
    const tempArray = [...numbersSelected]

    for (let i = 0; i < amountOfNumbersToPick; i++) {
      //get random unique number, and select it
      const randomNum = getRandUniqueNum(tempArray)
      tempArray.push(randomNum)
      selectNumber(randomNum)
    }
  }



  //function to cash out when the cash button is pressed
  const cashOut = () => {
    //if max numbers not selected, display notification
    if (numbersSelected.length < maxNumbers) {
      displayNotification(`First Select ${maxNumbers} Numbers, Then Set Price Before Cashing Out!`, 'red')
      return
    }

    //if price is not set, display notification
    if (price === 0) {
      displayNotification('The Lottery Ticket Isnt Being Given Out For Free!', 'red')
      return
    }

    //if no errors, display numbers selected and price selected as notification
    const numbersAsString = numbersSelected.join(', ');
    const message = `Numbers Selected: ${numbersAsString} - Final Price: $${price - 0.01}`
    displayNotification(message, '#ffb026')
  }




  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  }}>
    <Header>WHE WHE on D' Avenue</Header>
    <GridContainer style={{ backgroundColor: '#e2bb52', flex: 1 }} gridCount={3}>
      <div style={{ width: "300px" }}>
        <img src={LotteryBalls} alt="" style={{ width: "300px" }} />
        <GridContainer gridCount={2}>
          <MoneyButton value={1} onClick={addMoney} />
          <MoneyButton value={5} onClick={addMoney} />
          <MoneyButton value={10} onClick={addMoney} />
          <MoneyButton value={20} onClick={addMoney} />
        </GridContainer>
      </div>
      <div style={{
        backgroundColor: '#4da7e9',
        width: '600px',
        height: '400px'
      }}>
        <GridContainer gridCount={6}>
          {[...Array(numberButtons)].map((_, i) => (
            <NumberButton number={i + 1} key={i} selected={numbersSelected.includes(i + 1)} onClick={() => selectNumber(i + 1)} />
          ))}
        </GridContainer>
        <GridContainer style={{
          backgroundColor: '#4da7e9',
          width: '600px',
          height: '125px'
        }} gridCount={3}>
          <UtilityButton onClick={cashOut}>Cash</UtilityButton>
          <UtilityButton onClick={reset}>Clear</UtilityButton>
          <UtilityButton onClick={selectRandomNumbers}>RNG</UtilityButton>
        </GridContainer>
      </div>
      <div style={{
        background: 'linear-gradient(to bottom, #ff8a4e, #dcbc63)',
        border: '12px solid #64d9f6',
        marginLeft: '40px',
        flex: 1,
      }}>
        <h2>Numbers Selected</h2>
        <ul style={{ height: '450px' }}>
          {numbersSelected.map((item, index) => (
            <li key={index}>Mark: {item}</li>
          ))}
        </ul>
        <h2>Total: ${price}.00</h2>
      </div>
    </GridContainer>
    {showNotification && <Notification color={notificationColor} onClose={() => setShowNotification(false)}>{notificationMessage}</Notification>}
  </div >
}


export default App
