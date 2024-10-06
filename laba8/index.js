
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const shapeSelector = document.getElementById('shape');

    let isDrawing = false;
    let startX, startY;

    canvas.addEventListener('mousedown', (event) => {
        isDrawing = true;
        startX = event.offsetX;
        startY = event.offsetY;
    });

    canvas.addEventListener('mousemove', (event) => {
        if (!isDrawing) return;

        const shape = shapeSelector.value;
        const endX = event.offsetX;
        const endY = event.offsetY;

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (shape === 'circle') {
        const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        context.beginPath();
        context.arc(startX, startY, radius, 0, Math.PI * 2);
        context.fillStyle = 'pink'; 
        context.fill(); 
        context.stroke();
        
    } else if (shape === 'rectangle') {
        const width = endX - startX;
        const height = endY - startY;
        context.fillStyle = 'pink'; 
        context.fillRect(startX, startY, width, height); 
        context.strokeRect(startX, startY, width, height);
       
    }
    });
    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
    });
})