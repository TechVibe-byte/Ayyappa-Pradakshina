
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('write-canvas');
    const ctx = canvas.getContext('2d');
    const wrapper = document.getElementById('canvas-wrapper');
    const counterDisplay = document.getElementById('counter-display');
    const mantraDisplay = document.getElementById('current-mantra');

    // State
    let isDrawing = false;
    let strokeLength = 0;
    let lastX = 0;
    let lastY = 0;
    let counter = 0;
    const TOTAL_STEPS = 108;

    // Config
    const STROKE_THRESHOLD = 150; // pixels of movement required to count as a "write"
    const FADE_DELAY = 500; // ms before clearing
    const LINE_WIDTH = 5;
    const LINE_COLOR = '#ffb74d';

    // Mantras (from data.js if available, else fallback)
    // defined in data.js: saranaGhosha (English), saranaGhoshaTelugu
    let mantraList = (typeof saranaGhosha !== 'undefined') ? saranaGhosha : [];
    if (mantraList.length === 0) {
        // Fallback
        mantraList = Array(108).fill("Swamiye Saranam Ayyappa");
    }

    // Resize Canvas
    function resizeCanvas() {
        canvas.width = wrapper.clientWidth;
        canvas.height = wrapper.clientHeight;
        ctx.lineWidth = LINE_WIDTH;
        ctx.lineCap = 'round';
        ctx.strokeStyle = LINE_COLOR;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Drawing Functions
    function startDraw(e) {
        isDrawing = true;
        strokeLength = 0;
        const { x, y } = getPos(e);
        lastX = x;
        lastY = y;
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function moveDraw(e) {
        if (!isDrawing) return;
        e.preventDefault(); // Stop scrolling on touch
        const { x, y } = getPos(e);

        ctx.lineTo(x, y);
        ctx.stroke();

        // Calculate distance
        const dx = x - lastX;
        const dy = y - lastY;
        strokeLength += Math.sqrt(dx * dx + dy * dy);

        lastX = x;
        lastY = y;
    }

    function endDraw(e) {
        if (!isDrawing) return;
        isDrawing = false;
        ctx.closePath();

        // Check if stroke was long enough to count
        if (strokeLength > STROKE_THRESHOLD) {
            handleValidWrite();
        } else {
            // If too short, just fade out quickly or clear
            setTimeout(clearCanvas, 500);
        }
    }

    function getPos(e) {
        let clientX, clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const rect = canvas.getBoundingClientRect();
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    function handleValidWrite() {
        // Haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }

        // Increment Counter
        if (counter < TOTAL_STEPS) {
            counter++;
            updateUI();
        }

        // Clear canvas after delay
        setTimeout(clearCanvas, FADE_DELAY);
    }

    function clearCanvas() {
        // Simple clear for now. Could implement fade out animation later.
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function updateUI() {
        counterDisplay.textContent = counter;

        // Update mantra text (counter is 1-based for display, 0-based for array access)
        if (counter > 0 && counter <= mantraList.length) {
            mantraDisplay.textContent = mantraList[counter - 1];
        } else if (counter === 0) {
            mantraDisplay.textContent = "Start Writing...";
        } else {
            mantraDisplay.textContent = "Pradakshina Complete!";
        }
    }

    // Event Listeners
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', moveDraw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mouseout', endDraw);

    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', moveDraw, { passive: false });
    canvas.addEventListener('touchend', endDraw);

    // Initial UI
    updateUI();
});
