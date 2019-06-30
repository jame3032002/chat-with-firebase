import React from 'react'
import styled from 'styled-components'
import { Comments } from 'styled-icons/fa-solid'

const ContainerEmptyNotification = styled.span`
  font-family: Sarabun;
  font-size: 1em;
  padding-top: 20px;
  padding-bottom: 30px;
`

const IconComments = styled(Comments)`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  color: rgba(20, 27, 38, 0.20);
`

/** =============================================
 * @name EmptyNotification
 * @description แสดงกล่องว่า ไม่มีข้อมูล Notification
 * label - คือคำที่แสดงกับ Icon Comments
 * @version
 * =========================================== */
const EmptyNotification = ({ label }) => {
  return (
    <ContainerEmptyNotification>
      <IconComments />
      { label }
    </ContainerEmptyNotification>
  )
}

export default EmptyNotification
