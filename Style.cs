/* --- Falling Text Background --- */
.falling-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.falling-text {
  position: absolute;
  color: rgba(255,255,255,0.15);
  font-size: 24px;
  font-weight: bold;
  animation: fall linear infinite;
}

@keyframes fall {
  0% { transform: translateY(-10%); opacity: 1; }
  100% { transform: translateY(110%); opacity: 0; }
}

/* Put site content above background */
header, section, footer {
  position: relative;
  z-index: 1;
}
