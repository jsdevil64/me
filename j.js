// Live Clock with Seconds
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('live-time').textContent = `${hours}:${mins}:${secs}`;
}
setInterval(updateTime, 1000);
updateTime();

// Falling Hearts Generator
function createFallingHeart() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const heart = document.createElement('i');
    heart.classList.add('fa-solid', 'fa-heart', 'falling-heart');

    // Random positioning, size, and speed
    const randomX = Math.random() * window.innerWidth;
    const randomSize = Math.random() * 12 + 10; // 10px to 22px
    const randomDuration = Math.random() * 4 + 4; // 4s to 8s

    heart.style.left = `${randomX}px`;
    heart.style.fontSize = `${randomSize}px`;
    heart.style.animationDuration = `${randomDuration}s`;

    particlesContainer.appendChild(heart);

    // Remove element after animation finishes to prevent lag
    setTimeout(() => {
        heart.remove();
    }, randomDuration * 1000);
}

// Generate a heart every 400 milliseconds
setInterval(createFallingHeart, 400);
