import React from 'react'
import { useState } from 'react'

export default function () {
    const [name,setName]=useState({firstName:'',lastName:''})
    function FirstNameChanged(e) {
        setName({...name,firstName:e.target.value})
    }
    function LastNameChanged(e) {
        setName({...name,lastName:e.target.value})
    }
    return (
        <>
            <div className='ms-5 mt-5'>
                <dl>
                    <dt>First Name</dt>
                    <dd><input type="text" onChange={FirstNameChanged} /></dd>
                    <dt>Last Name</dt>
                    <dd><input type="text" onChange={LastNameChanged} /></dd>
                </dl>
                <dl className="row">
                    <dd className="col-10">{name.firstName}</dd>
                    <dd className="col-10">{name.lastName}</dd>
                </dl>
            </div>
        </>
    )
}
