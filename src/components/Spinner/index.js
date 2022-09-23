import React from 'react'
import { pokeBlack } from '../../styles/colors'
import { SvgPath } from './styles'

const Spinner = ({ color = pokeBlack, width = '3rem', height = '3rem' }) => {
  return (
    <SvgPath viewBox="0 0 50 50" width={width} height={height}>
      <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" stroke={color}></circle>
    </SvgPath>
  )
}

export default Spinner