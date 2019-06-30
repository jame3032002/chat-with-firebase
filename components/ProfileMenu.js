import React from 'react'
import styled from 'styled-components'

import CircleImage from './CircleImage'

const ContainerProfileMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const LabelName = styled.div`
  color: white;
  font-size: 0.8em;
  font-family: 'Sarabun';
  margin-left: 10px;
`

/** ============================================
 * @name ProfileMenu
 * @description เป็นกล่องที่แสดงรูป Profile และ name
 * @version
 * ========================================== */
const ProfileMenu = ({ imageURL, name }) => {
  return (
    <ContainerProfileMenu>
      <CircleImage imageURL={imageURL} />
      <LabelName>{name}</LabelName>
    </ContainerProfileMenu>
  )
}

export default ProfileMenu
