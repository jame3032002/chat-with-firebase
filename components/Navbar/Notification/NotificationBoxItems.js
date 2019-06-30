import React from 'react'
import styled from 'styled-components'

import NotificationItem from './NotificationItem'
import data from '~/static/Mock/notification.json'

const ContainerListNotification = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  max-height: 300px;
  overflow-y: scroll;
`

/** ========================================================================
 * @name NotificationBoxItems
 * @description แสดงกล่อง Notification ที่รวมรายการ Notification Item ต่าง ๆ ไว้
 * @version
 * ====================================================================== */
const NotificationBoxItems = () => {
  return (
    <ContainerListNotification>
      { /** ============================================
         * @description วนลูปสร้างกล่อง LastMessage มาแสดง
         * ในตอนนี้ดึงค่าที่ Mock ไว้มาแสดงก่อน
         * // TODO
         * ========================================== */
        data.map(item => {
          const { messageID, unread, name, message, lastUpdated, imageURL } = item

          return (
            <NotificationItem
              key={messageID}
              unread={unread}
              name={name}
              message={message}
              lastUpdated={lastUpdated}
              imageURL={imageURL}
            />
          )
        })
      }
    </ContainerListNotification>
  )
}

export default NotificationBoxItems
