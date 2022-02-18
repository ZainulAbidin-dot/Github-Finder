import React from 'react'
import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Alert = () => {

    const { alert } = useContext(AlertContext);
    console.log(alert);
    return (
         alert !== null && (
                <p className="flex-1 text-red-500 text-base font semibold leading-7 text-white">
                    <strong>{alert.msg}</strong>
                </p>
      )
  )
}

export default Alert