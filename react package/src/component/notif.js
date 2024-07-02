import 'react-notifications/lib/notifications.css';

import {  NotificationManager } from 'react-notifications';


  export const createNotif = (type,title,msg, closeTime=5000) => {
    switch (type) {
      case 'info':
        NotificationManager.info(msg, title, closeTime);
        break;
      case 'success':
        NotificationManager.success(msg, title, closeTime);
        break;
      case 'warning':
        NotificationManager.warning(msg, title, closeTime);
        break;
      case 'error':
        NotificationManager.error(msg, title, closeTime);
        break;
      default:
        break;
    }
   

  };





