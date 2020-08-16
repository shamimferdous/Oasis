//sidebarTrigger definition
let count = 0;
const sidebarTrigger = () => {

    if (count % 2 === 0) {
        document.getElementById('sidebar').className = 'sidebar--closed';
        document.getElementById('hotel-view').className = 'hotel-view--full';
    } else {
        document.getElementById('sidebar').className = 'sidebar';
        document.getElementById('hotel-view').className = 'hotel-view';
    }

    count++;
}