import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.div`
  color: white;
  margin-right: 15px;
  font-weight: bold;
  font-family: Sarabun;
  font-size: 1.5em;
`

/** ==========================================
 * @name LogoWebsite
 * @description เป็น style ที่เป็น Logo ของเว็บไซต์
 * @version
 * ======================================== */
const LogoWebsite = ({ title }) => {
  return (
    <LogoStyle>{title}</LogoStyle>
  )
}

export default LogoWebsite