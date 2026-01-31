import { create } from "zustand";
import axios from "axios";

// let url = `http://${window.location.hostname}:8000/api`;

const useNotification = create((set, get) => ({
    notifications: [],
    notificationStatus: false,
    setNotificationStatus: (notificationStatus) => set({ notificationStatus }),
    getNotifications: async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/notifications/get`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            const { notifications } = response.data;
            set({notifications  });
            // console.log(notifications);
        } catch(err) {
            console.log("Couldn't fetch notifications: " + err.message);
        }
    },
    checkNotification: async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/notification/check`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            const { status } = response.data;
            set({ notificationStatus: status  });
            // console.log(status);
        } catch(err) {
            console.log("Couldn't fetch notifications: " + err.message);
        }
    },
    markAsRead: async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/notification/markasread`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            const { status } = response.data;
            if(status === 'success'){
                set({ notificationStatus: false })
            }
            // console.log(status);
        } catch(err) {
            console.log("Couldn't fetch notifications: " + err.message);
        }
    }
}));

export default useNotification;
