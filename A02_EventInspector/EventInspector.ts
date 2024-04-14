/*
Aufgabe: L02_EventInspector
Name: Elisabeth Krumm
Matrikel:275810
Datum: 14.04.2024
Quellen: 
*/


// script.ts
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

function handleMouseMove(event: MouseEvent) {
    const rectangle = document.getElementById('rectangle');
    if (rectangle) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        rectangle.style.left = mouseX + 'px'; // Setze die linke Position basierend auf der Maus-X-Position
        rectangle.style.top = mouseY + 'px'; // Setze die obere Position basierend auf der Maus-Y-Position
        rectangle.innerText = `Mouse Position: (${mouseX}, ${mouseY}), Target Element: ${event.target.tagName}`;
    }
}

function handleEvent(event: Event) {
    console.log('Event type:', event.type);
    console.log('Event target:', event.target);
    console.log('Event current target:', event.currentTarget);
    console.log('Whole event object:', event);
}

document.getElementById('customButton')?.addEventListener('click', () => {
    const customEvent = new CustomEvent('customEvent', {
        bubbles: true, // Erlaubt das Aufsteigen des Events im DOM
        cancelable: true, // Erlaubt das Abbrechen des Events
        detail: { message: 'Custom event triggered!' } // Zusätzliche Daten für das Event
    });
    document.dispatchEvent(customEvent); // Auslösen des benutzerdefinierten Events
});


document.addEventListener('customEvent', (event: CustomEvent) => {
    console.log('Custom event triggered:', event.detail.message);
});