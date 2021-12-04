import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './admin.module.scss'
const Topbar = () => {
    return (
        <div className={styles.topbar}>
              <h1>Admin</h1>
             <div className={styles.topbar_icons}>
                <NotificationsIcon />
                <SettingsIcon />
             </div>
        </div>
    )
}

export default Topbar
