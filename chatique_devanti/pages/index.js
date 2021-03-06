
// import Image  from 'next/image';
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'
import ConversationList from '../components/ConversationList';
import logo from '../assets/icons/logo.png'
import ChatView from '../components/ChatView';


export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* Sidebar */}
      
      <Sidebar />

      <div className={styles.main}>
        {/* ConversationList */}
        <ConversationList />
        {/* ChatView */}
        <ChatView />

      </div>
      
    </div>
  )
}
