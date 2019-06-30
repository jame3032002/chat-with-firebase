import styled from 'styled-components'

import LogoWebsite from './LogoWebsite'
import ProfileMenu from '../ProfileMenu'
import Notification from './Notification'

const NavbarBg = styled.div`
  width: 100%;
  height: 55px;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 3px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background: border-box #1d2637;
  position: relative;
`

const Container = styled.div`
  display: flex;
  height: 55px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`

const ContainerMenu = styled.div`
  display: flex;
  justify-content: flex-start;
`

/** ===========================================================================
 * @name Navbar
 * @description เป็น Navbar ที่ประกอบไปด้วย LogoWebsite, Notification, ProfileMenu
 * @version
 * ========================================================================= */
const Navbar = () => {
  return (
    <NavbarBg>
      <Container>
        <LogoWebsite title='Chat Tutorial' />
        
        <ContainerMenu>
          <Notification />
          <ProfileMenu
            imageURL={'https://graph.facebook.com/2136181586399863/picture?width=250&height=250'}
            name={'อิสราพงษ์ สังฆะมงคลกิจ'}
          />
        </ContainerMenu>
      </Container>
    </NavbarBg>
  )
}

export default Navbar