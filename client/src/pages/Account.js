import React, { useEffect } from 'react';

export default function AccountInfo(){
    useEffect(() => {
        document.title = 'Paradise - Account'
    })
    return (
        <div>
            <h1>THIS IS THE ACCOUNT PAGE</h1>
        </div>
    )
}