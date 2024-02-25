import Button from '../../ui/button/Button'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { BsLayoutSidebarInset } from 'react-icons/bs'
import './MainNav.css'
import { useStore } from '../../../features/store'

const MainNav = () => {
  const toggleSidebar = useStore((state) => state.toggleSidebar)
  console.log(toggleSidebar)

  return (
    <nav>
      <span>
        <Button
          css={{
            fontSize: '1.8em'
          }}
          icon={<BsLayoutSidebarInset />}
          onClick={() => toggleSidebar()}
        />
      </span>
      <span>
        <Button
          css={{
            fontSize: '1.8em'
          }}
          icon={<IoIosInformationCircleOutline />}
        />
      </span>
    </nav>
  )
}

export default MainNav
