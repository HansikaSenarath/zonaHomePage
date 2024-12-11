

const numberItems = document.querySelectorAll('.tech-land-number-item');
let activeIndex = 0;

// Filter only the indices for numbers 1 and 2
const activeIndices = [0, 1]; // Corresponds to numbers 1 and 2

function cycleActiveState() {
  // Remove active state from all items
  numberItems.forEach(item => item.classList.remove('active'));

  // Set active state for the current active index
  const currentActiveIndex = activeIndices[activeIndex];
  numberItems[currentActiveIndex].classList.add('active');

  // Increment the active index for the next cycle, loop within [0, 1]
  activeIndex = (activeIndex + 1) % activeIndices.length;
}

setInterval(cycleActiveState, 2000); // Adjust interval as needed


