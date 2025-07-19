const tab_buttons = [
    document.getElementById('tab-button1'),
    document.getElementById('tab-button2'),
    document.getElementById('tab-button3')
];
        
const tabs = [
    document.querySelector('.file-tab'),
    document.querySelector('.url-tab'),
    document.querySelector('.search-tab')
];
        
function select_tab(index) {
    tabs.forEach(tab => tab.style.display = 'none');
    tab_buttons.forEach(button => button.classList.remove('tab-button-active'));
    
    tab_buttons[index].classList.add('tab-button-active');
    
    tabs[index].style.display = 'flex';
}
        
function init() {
    tab_buttons.forEach((button, index) => {
        button.addEventListener('click', () => select_tab(index));
    });
    select_tab(0);
}
        
document.addEventListener('DOMContentLoaded', init);


//------------------------------------------------------------------------------------------//

const sidepanelbtn = document.getElementById('tb_sidepanel');

let openpanel = false;

sidepanelbtn.addEventListener('click', function() {
    if(!openpanel){
        document.querySelector('.sidepanel').style.width = '100vw';
        document.querySelector('.sidepanel').style.display = 'flex';
        openpanel = true;
    }
    else {
        document.querySelector('.sidepanel').style.width = '0px';
        document.querySelector('.sidepanel').style.display = 'none';
        openpanel = false;
    }
});





