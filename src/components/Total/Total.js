import React from 'react'
import Card from '../UI/Card'
import classes from "./Total.module.css"

const Total = (props) => {
  return (
    <Card className={classes.total}>
      Total Price: <span>Rs.{props.prices}</span> 
    </Card>
  )
}

export default Total
