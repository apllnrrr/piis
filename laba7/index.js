
document.addEventListener('DOMContentLoaded', () => {

const canvas = document.getElementById('canvas');
const shapeSelector = document.getElementById('shape');
const clearBtn = document.getElementById('clear-btn')
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

    if (shape === 'circle') {
        const radius = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', startX);
        circle.setAttribute('cy', startY);
        circle.setAttribute('r', radius);
        circle.setAttribute('stroke', 'black');
        circle.setAttribute('fill', 'pink');
        canvas.appendChild(circle);
    } else if (shape === 'rectangle') {
        const width = endX - startX;
        const height = endY - startY;
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', startX);
        rect.setAttribute('y', startY);
        rect.setAttribute('width', Math.abs(width));
        rect.setAttribute('height', Math.abs(height));
        rect.setAttribute('stroke', 'black');
        rect.setAttribute('fill', 'green');
        canvas.appendChild(rect);
    }
})
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});
clearBtn.addEventListener('click', ()=>{
    const existingShapes = canvas.querySelectorAll('circle, rect');
    existingShapes.forEach(shape => shape.remove()); 
})

})