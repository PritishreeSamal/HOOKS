import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

function ParentComponent() {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  },[age])
  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000)
  },[salary])
  return (
    <div className='text-center mt-5'>
      <Title />
      <Count text="Age" count={age}></Count>
      &nbsp;
      &nbsp;
      <Button handleClick={incrementAge}>Increment Age</Button>
      <br />
      <br />
      <Count text="Salary" count={salary}></Count>
      &nbsp;
      &nbsp;
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent