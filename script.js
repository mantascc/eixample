document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector(".grid-container");
    const GRID_SIZE = 16;

    // Create the grid and populate with images
    for (let x = 0; x < GRID_SIZE; x++) {
        for (let y = 0; y < GRID_SIZE; y++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            
            // Create and add the image using the segment_X_Y naming format
            const img = document.createElement('img');
            img.src = `images/segment_${x}_${y}.png`;
            img.alt = `Segment ${x},${y}`;
            
            square.appendChild(img);
            gridContainer.appendChild(square);
        }
    }
});
