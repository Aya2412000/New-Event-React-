import React from 'react'
import { Link } from './style'

export default function NavLinks({navLinks,navText,color}) {
  return (
    <div>
      <Link style={{color : color}} href={navLinks}>{navText}</Link>
    </div>
  )
}
