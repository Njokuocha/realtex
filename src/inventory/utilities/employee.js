import { create } from 'zustand';
import axios from 'axios';

// let url = `http://${window.location.hostname}:8000/api`;

const useEmployees = create((set, get) => ({
    employeesNum: 0,
    employees: [],
    deleteMsg: null,
    currentEmployees: [],
    getEmployees: async () => {
        try{
            const response = await axios.get(process.env.REACT_APP_BACKEND_URL + `/employees`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`
                }
            });

            const { employees, num } = response.data;

            set({ employees, employeesNum: num });
            // console.log(employees);

        } catch(err) {
            console.log("Couldn't fetch employees: " + err.message);
            // alert("Couldn't fetch employees");
        }
    },
    deleteEmployee: async (id) => {
        try{
            const response = await axios.delete(process.env.REACT_APP_BACKEND_URL + `/employees/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('realtexToken')}`,
                    Accept: 'application/json'
                }
            });

            const { status, msg, newEmployees, newNum } = response.data;
            if(status) set({deleteMsg: msg, currentEmployees: newEmployees, employees: newEmployees, employeesNum: newNum});
            // alert(msg);

        } catch(err) {
            console.log("Couldn't delete employee: " + err.message);
        }
    }
}));

export default useEmployees;

