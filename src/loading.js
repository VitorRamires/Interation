// Total number of segments in the loading circle
let totalSegments = 12;

// Radius of the circle where segments are drawn
let radius = 60;

// Angle each segment occupies (in degrees)
let segmentAngle;

// Accumulated rotation angle to animate continuous rotation
let rotationAngle = 0;

// Total loading duration in milliseconds (5 seconds)
let loadingDuration = 5000;

// Time when the current loading cycle started
let startTime;

// Loading state: false = loading, true = load complete (show slide)
let loaded = false;

// Variables para animación de slide y popup
let slideY;       // posición vertical del slide
let popupScale;   // escala del texto

function easeOutCubic(t) {
  return 1 - pow(1 - t, 3);
}

function setup() {
  createCanvas(300, 300);       // Create a 300x300 pixel canvas
  angleMode(DEGREES);           // Use degrees for angles instead of radians
  noStroke();                   // No stroke for shapes (segments)
  startTime = millis();         // Record start time of the cycle
  segmentAngle = 360 / totalSegments; // Calculate angle per segment

  slideY = -height;             // Empezamos con el slide fuera de la pantalla
  popupScale = 0;               // Escala inicial del texto popup
}

function draw() {
  background(0);                // Black background
  translate(width / 2, height / 2);  // Center the coordinate system

  let elapsed = millis() - startTime;  // Elapsed time since cycle started

  if (!loaded) {
    // Normalize progress between 0 and 1 based on elapsed time and duration
    let progress = constrain(elapsed / loadingDuration, 0, 1);

    rotationAngle += 3;  // Increase rotation angle for continuous spinning

    // Calculate how many segments should be active based on progress
    let activeSegments = floor(totalSegments * progress);

    // Draw each segment of the loader
    for (let i = 0; i < totalSegments; i++) {
      // Calculate angle for this segment including rotation offset
      let angle = i * segmentAngle + rotationAngle;

      // Determine opacity: active segments fade in, inactive are faint
      let alpha;
      if (i < activeSegments) {
        // Map progress to fade in alpha for active segments
        let segProgress = map(i, 0, activeSegments - 1, 0, 1);
        alpha = lerp(50, 255, segProgress);  // interpolate opacity from 50 to 255
      } else {
        alpha = 50; // inactive segments are dim
      }

      fill(10, 132, 255, alpha);  // Blue color with calculated opacity
      push();                     // Save current transformation state
      rotate(angle);              // Rotate to segment position
      rect(radius, -8, 15, 16, 6); // Draw rounded rectangle segment
      pop();                      // Restore transformation state
    }

    // Update loading text with current percentage
    document.getElementById('loadingText').textContent = `Loading... ${floor(progress * 100)}%`;

    // When loading reaches 100%
    if (progress >= 1) {
      loaded = true;            // Change state to loaded (start slide)
      startTime = millis();     // Reset timer for slide animation
      slideY = -height;         // Start slide from above canvas
      popupScale = 0;           // Reset popup scale

      // Hide the loading percentage text
      document.getElementById('loadingText').textContent = "";
    }

  } else {
    // Draw black background (still centered)
    background(0);

    // Calculate how much time has passed since slide started
    let slideElapsed = millis() - startTime;
    let slideDuration = 1000; // 1 second slide animation

    // Calculate normalized progress for slide (0 to 1)
    let slideProgress = constrain(slideElapsed / slideDuration, 0, 1);

    // Apply easing for smooth slide down
    slideY = lerp(-height, 0, easeOutCubic(slideProgress));

    // Draw sliding black rectangle
    fill(0);
    rect(-width / 2, slideY - height / 2, width, height);

    // Popup scale animation starts después de que slide haya bajado un poco
    if (slideProgress > 0.5) {
      let popupElapsed = slideElapsed - slideDuration * 0.5;
      let popupDuration = 500; // 0.5 seconds popup animation
      let popupProgress = constrain(popupElapsed / popupDuration, 0, 1);
      popupScale = lerp(0, 1, easeOutCubic(popupProgress));
    }

    // Draw the "Loading completed" text with popup scale effect
    push();
    translate(0, slideY);
    scale(popupScale);
    fill(10, 132, 255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Loading completed", 0, 0);
    pop();

    // After slide and popup complete, wait 3 seconds then reset
    if (slideProgress === 1 && popupScale === 1 && slideElapsed > slideDuration + 3000) {
      loaded = false;           // Reset to loading state
      startTime = millis();     // Reset loading timer
      document.getElementById('loadingText').textContent = "Loading... 0%";
      // rotationAngle stays continuous for smooth spinning
    }
  }
}