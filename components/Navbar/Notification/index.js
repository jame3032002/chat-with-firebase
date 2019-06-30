import React, { useState } from 'react'
import styled from 'styled-components'

import NotificationIcon from './NotificationIcon'
import NotificationList from './NotificationList'

const ContainerNotification = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`

const Shadow = styled.div`
  &.active {
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    position: fixed;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
  }
`

/** ===================================================================
 * @name Notification
 * @description เป็น Notification บน Navbar ที่แสดงเป็น Icon Notification
 * ซึ่งเมื่อกดที่ปุ่ม จะแสดงรายการ Notification ขึ้นมา
 * ประกอบด้วยหลาย ๆ Component
 * @version
 * ================================================================= */
const Notification = () => {
  const [active, toggleActive] = useState(false)
  const badgeContent = 1

  return (
    <ContainerNotification>
      <Shadow
        onClick={() => toggleActive(false)}
        className={active ? 'active' : null}
      />
      <NotificationIcon
        badgeContent={badgeContent}
        onClick={() => toggleActive(true)}
        active={active || badgeContent > 0}
      />
      <NotificationList active={active} />
    </ContainerNotification>
  )
}

export default Notification
