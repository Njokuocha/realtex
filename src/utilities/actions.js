// Toggle App Mode
const modeToggle = () => {
    let motherApp = document.documentElement;
     if(localStorage.theme !== 'dark') {
        localStorage.theme = 'dark'
        motherApp.classList.add('dark');
     }
     else {
        localStorage.theme = 'light'
        motherApp.classList.remove('dark');
     }
     
}

export default modeToggle;



