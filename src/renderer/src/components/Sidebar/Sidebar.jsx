import Button from '../ui/button/Button'
import { IoChatbubbleEllipses } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Sidebar.css'
import SearchChats from './SearchChats'
import AIOptions from './AIOptions'
import { useStore } from '../../features/store'

const Sidebar = () => {
  const { sidebar } = useStore((state) => state)

  return !sidebar ? null : (
    <div className="side-bar">
      <div className="top-btns">
        <span style={{ display: 'flex', flex: 8 }}>
          <Button
            css={{
              backgroundColor: '#4a5d7d',
              color: '#fff',
              cursor: 'pointer'
            }}
            text="New Chat"
            icon={<IoChatbubbleEllipses />}
            onClick={() => {}}
          />
        </span>

        <span style={{ display: 'flex', flex: 2 }}>
          <Button
            css={{
              backgroundColor: '#4a5d7d',
              color: '#fff',
              cursor: 'pointer'
            }}
            icon={<GiHamburgerMenu />}
            onClick={() => {}}
          />
        </span>
      </div>
      <SearchChats />
      <AIOptions />
    </div>
  )
}

export default Sidebar
