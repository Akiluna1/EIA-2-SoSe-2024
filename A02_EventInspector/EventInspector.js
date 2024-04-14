"use strict";
/*
Aufgabe: L02_EventInspector
Name: Elisabeth Krumm
Matrikel:275810
Datum: 14.04.2024
Quellen:
*/

window.addEventListener('load', () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleEvent);
    document.addEventListener('keyup', handleEvent);
    document.body.addEventListener('click', handleEvent);
    document.body.addEventListener('keyup', handleEvent);
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        div.addEventListener('click', handleEvent);
        div.addEventListener('keyup', handleEvent);
    });
});
function handleMouseMove(event) {
    const rectangle = document.getElementById('rectangle');
    if (rectangle) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        rectangle.style.left = mouseX + 'px'; 
        rectangle.style.top = mouseY + 'px'; 
        rectangle.innerText = `Mouse Position: (${mouseX}, ${mouseY}), Target Element: ${event.target.tagName}`;
    }
}
function handleEvent(event) {
    console.log('Event type:', event.type);
    console.log('Event target:', event.target);
    console.log('Event current target:', event.currentTarget);
    console.log('Whole event object:', event);
}
document.getElementById('customButton')?.addEventListener('click', () => {
    const customEvent = new CustomEvent('customEvent', {
        bubbles: true, 
        cancelable: true, 
        detail: { message: 'Custom event triggered!' } 
    });
    document.dispatchEvent(customEvent); 
});
document.addEventListener('customEvent', (event) => {
    console.log('Custom event triggered:', event.detail.message);
});
//# sourceMappingURL=EventInspector.js.map
