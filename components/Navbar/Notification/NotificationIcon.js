import React from 'react'
import styled from 'styled-components'
import { Bell } from 'styled-icons/fa-solid'

const Icon = styled(Bell)`
  width: 24px;
  height: 24px;
  margin-right: 15px;
  color: ${props => props.active ? "white" : "#0d0f15"};
  :hover {
    color: #000000;
  }
  &.active:hover {
    color: white;
  }
  :active {
    color: white;
  }
`

const Badges = styled.div`
  font-family: SarabunBold;
  font-size: 0.3em;
  background-color: #fa3e3e;
  border-radius: 2px;
  color: #fff;
  padding: 1px 3px 3px 3px;
  position: absolute;
  top: 0px;
  right: 12px;
`

const ContainerNotificationIcon = styled.div`
  cursor: pointer;
`

/** ===================================================================
 * @name NotificationIcon
 * @description เป็น Components ที่แสดง Icon ที่เป็นกระดึ่ง และมีเลขจำนวนบอกว่ามี
 * Notification เท่าไร
 * badgeContent - [props] จำนวน Notification หากใส่ จะแสดงเป็น Badges
 * active - [props] ถ้าหากเป็น true จะแสดงเป็น Notification ที่แสดงแบบ Active
 * @version
 * ================================================================= */
const NotificationIcon = ({ badgeContent, active, onClick }) => {
  const hasBadge = parseInt(badgeContent) > 0

  return (
    <ContainerNotificationIcon onClick={onClick}>
      { /** ================================================
         * @description เช็คว่า badgeContent มากกว่า 0 หรือเปล่า
         * ============================================== */
        hasBadge &&
          <Badges>
            {badgeContent}
          </Badges>
      }

      <Icon
        active={active}
        className={active ? 'active': null}
      />
    </ContainerNotificationIcon>
  )
}

NotificationIcon.defaultProps = {
  onClick: () => {},
  active: false
}

export default NotificationIcon
