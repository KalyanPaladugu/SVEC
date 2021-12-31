import React from 'react'
import AndhraBank from './AndhraBank'
import CorporationBank from './CorporationBank'

export default function UnionBank() {
    return (
        <div>
            <h1>UnionBank</h1>
            <AndhraBank  location="Vijayawada" />
            <CorporationBank location="Tirupati" />
        </div>
    )
}

