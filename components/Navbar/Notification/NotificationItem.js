import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

import CircleImage from '../../CircleImage';

const ItemNotification = styled.li`
  cursor: pointer;
  display: flex;
  list-style: none;
  padding-left: 10px;
  padding-right: 10px;
  height: 60px;
  width: 430px;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  :hover {
    background: rgba(29, 33, 41, .04)
  }
  &.unread {
    background: #edf2fa
  }
`

const ItemLabel = styled.div`
  font-family: Sarabun;
  font-size: 0.7em;
  color: rgba(29, 33, 41, 0.60);
  padding-top: 1px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const ContainerMessage = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  overflow: hidden;
`

const ContainerName = styled.h5`
  font-family: SarabunBold;
  font-size: 0.8em;
  margin: 0;
`

const ContainerTimeAgo = styled.span`
  font-family: Sarabun;
  font-size: 0.4em;
  color: rgba(29, 33, 41, 0.60);
  width: 80px;
  text-align: right;
`

/** ===========================================================================
 * @name NotificationItem
 * @description เป็น ItemNotification แสดงในส่วน Notification ที่แสดง Message ล่าสุด
 * @param unread - รับข้อมูลเช็คว่ายังไม่ได้อ่านหรือเปล่า
 * @param imageURL - รูป Profile ของคนส่ง Message
 * @param name - ชื่อของคนส่ง Message
 * @param message - แสดง Message
 * @param lastUpdated - timestamp เวลาล่าสุดที่ส่ง (เป็น Timestamp เป็น milliseconds)
 * @version
 * ========================================================================= */
const NotificationItem = ({ unread, imageURL, name, message, lastUpdated }) => {
  return (
    <ItemNotification className={unread ? 'unread' : null}>
      <CircleImage src={imageURL} size={48} style={{ marginRight: 12 }} />

      <ContainerMessage>
        <ContainerName>{name}</ContainerName>
        <ItemLabel>{message}</ItemLabel>
      </ContainerMessage>

      <ContainerTimeAgo>
        { moment(lastUpdated).fromNow() }
      </ContainerTimeAgo>
    </ItemNotification>
  )
}

export default NotificationItem
