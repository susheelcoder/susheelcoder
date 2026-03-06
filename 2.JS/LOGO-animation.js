// (function() {
//     // स्टाइल एलिमेंट बनाओ
//     const style = document.createElement('style');
//     style.textContent = `
//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }

//         body {
//             background: linear-gradient(135deg, #0f0c29, #1a1a2e, #16213e);
//             min-height: 100vh;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             font-family: 'Arial Black', sans-serif;
//             opacity: 0;
//             animation: bodyFadeIn 0.5s ease-in forwards;
//         }

//         @keyframes bodyFadeIn {
//             to { opacity: 1; }
//         }

//         .logo-section {
//             text-align: center;
//             padding: 30px;
//             animation: sectionFade 1s ease-out;
//         }

//         .logo-mark {
//             width: 180px;
//             height: 180px;
//             margin: 0 auto 30px;
//             filter: drop-shadow(0 0 30px #4facfe);
//             animation: logoFloat 3s ease-in-out infinite;
//             cursor: pointer;
//         }

//         .hex {
//             fill: none;
//             stroke: url(#gradient);
//             stroke-width: 4;
//             stroke-linecap: round;
//             stroke-linejoin: round;
//             animation: hexGlow 2s infinite, hexRotate 10s linear infinite;
//             transform-origin: center;
//         }

//         .code {
//             fill: none;
//             stroke: #4facfe;
//             stroke-width: 4;
//             stroke-linecap: round;
//             stroke-linejoin: round;
//             animation: codePulse 1.5s infinite;
//         }

//         .slash {
//             fill: none;
//             stroke: #ff6b6b;
//             stroke-width: 4;
//             stroke-linecap: round;
//             stroke-dasharray: 5 5;
//             animation: slashMove 2s linear infinite;
//         }

//         .gradient-defs {
//             position: absolute;
//             width: 0;
//             height: 0;
//         }

//         .logo {
//             display: flex;
//             justify-content: center;
//             flex-wrap: wrap;
//             gap: 5px;
//             margin-top: 20px;
//             perspective: 500px;
//         }

//         .logo span {
//             font-size: 36px;
//             font-weight: 900;
//             color: white;
//             text-shadow: 0 0 15px #4facfe,
//                          0 0 30px #ff6b6b;
//             display: inline-block;
//             animation: letterWave 2s ease-in-out infinite;
//             cursor: default;
//             transition: all 0.3s ease;
//         }

//         .logo span:nth-child(1) { animation-delay: 0.0s; }
//         .logo span:nth-child(2) { animation-delay: 0.1s; }
//         .logo span:nth-child(3) { animation-delay: 0.2s; }
//         .logo span:nth-child(4) { animation-delay: 0.3s; }
//         .logo span:nth-child(5) { animation-delay: 0.4s; }
//         .logo span:nth-child(6) { animation-delay: 0.5s; }
//         .logo span:nth-child(7) { animation-delay: 0.6s; }
//         .logo span:nth-child(8) { animation-delay: 0.7s; }
//         .logo span:nth-child(9) { animation-delay: 0.8s; }
//         .logo span:nth-child(10) { animation-delay: 0.9s; }
//         .logo span:nth-child(11) { animation-delay: 1.0s; }
//         .logo span:nth-child(12) { animation-delay: 1.1s; }

//         @keyframes sectionFade {
//             from {
//                 opacity: 0;
//                 transform: scale(0.9);
//             }
//             to {
//                 opacity: 1;
//                 transform: scale(1);
//             }
//         }

//         @keyframes logoFloat {
//             0%, 100% {
//                 transform: translateY(0);
//             }
//             50% {
//                 transform: translateY(-15px);
//                 filter: drop-shadow(0 0 50px #4facfe);
//             }
//         }

//         @keyframes hexGlow {
//             0%, 100% {
//                 stroke: #4facfe;
//                 filter: drop-shadow(0 0 10px #4facfe);
//             }
//             50% {
//                 stroke: #ff6b6b;
//                 filter: drop-shadow(0 0 20px #ff6b6b);
//             }
//         }

//         @keyframes hexRotate {
//             from {
//                 transform: rotate(0deg);
//             }
//             to {
//                 transform: rotate(360deg);
//             }
//         }

//         @keyframes codePulse {
//             0%, 100% {
//                 stroke: #4facfe;
//                 stroke-width: 4;
//             }
//             50% {
//                 stroke: #ff6b6b;
//                 stroke-width: 6;
//             }
//         }

//         @keyframes slashMove {
//             0% {
//                 stroke-dashoffset: 0;
//                 stroke: #ff6b6b;
//             }
//             50% {
//                 stroke-dashoffset: 10;
//                 stroke: #4facfe;
//             }
//             100% {
//                 stroke-dashoffset: 20;
//                 stroke: #ff6b6b;
//             }
//         }

//         @keyframes letterWave {
//             0%, 100% {
//                 transform: translateY(0) rotate(0deg);
//                 text-shadow: 0 0 15px #4facfe;
//             }
//             25% {
//                 transform: translateY(-12px) rotate(5deg);
//                 text-shadow: 0 0 30px #ff6b6b, 0 0 50px #4facfe;
//             }
//             50% {
//                 transform: translateY(0) rotate(-5deg);
//                 text-shadow: 0 0 40px #4facfe, 0 0 70px #ff6b6b;
//             }
//             75% {
//                 transform: translateY(-8px) rotate(3deg);
//                 text-shadow: 0 0 25px #ff6b6b, 0 0 45px #4facfe;
//             }
//         }

//         .logo-mark:hover {
//             animation: logoFloat 1s ease-in-out infinite;
//         }

//         .logo-mark:hover .hex {
//             animation: hexGlow 1s infinite, hexRotate 3s linear infinite;
//         }

//         .logo-mark:hover .code {
//             animation: codePulse 0.5s infinite;
//         }

//         .logo-mark:hover .slash {
//             animation: slashMove 0.5s linear infinite;
//         }

//         .logo span:hover {
//             transform: scale(1.4) rotate(10deg);
//             color: #ff6b6b;
//             text-shadow: 0 0 30px #4facfe,
//                          0 0 60px #ff6b6b;
//             transition: all 0.2s ease;
//             z-index: 10;
//         }

//         .coding-tagline {
//             margin-top: 30px;
//             color: rgba(255, 255, 255, 0.8);
//             font-size: 16px;
//             letter-spacing: 4px;
//             text-transform: uppercase;
//             animation: fadeInUp 1s ease-out 1.2s forwards;
//             opacity: 0;
//         }

//         @keyframes fadeInUp {
//             from {
//                 opacity: 0;
//                 transform: translateY(20px);
//             }
//             to {
//                 opacity: 1;
//                 transform: translateY(0);
//             }
//         }

//         .particles {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             pointer-events: none;
//             z-index: -1;
//         }

//         .particle {
//             position: absolute;
//             width: 2px;
//             height: 2px;
//             background: #4facfe;
//             border-radius: 50%;
//             animation: particleFloat 3s infinite;
//         }

//         @keyframes particleFloat {
//             0% {
//                 transform: translateY(0) translateX(0);
//                 opacity: 1;
//             }
//             100% {
//                 transform: translateY(-100px) translateX(50px);
//                 opacity: 0;
//             }
//         }

//         @media (max-width: 500px) {
//             .logo-mark {
//                 width: 140px;
//                 height: 140px;
//             }
            
//             .logo span {
//                 font-size: 28px;
//             }
            
//             .coding-tagline {
//                 font-size: 12px;
//                 letter-spacing: 2px;
//             }
//         }
//     `;
//     document.head.appendChild(style);

//     // HTML स्ट्रक्चर बनाओ
//     const container = document.createElement('div');
//     container.innerHTML = `
//         <!-- ग्रेडिएंट डेफिनिशन -->
//         <svg class="gradient-defs">
//             <defs>
//                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stop-color="#4facfe">
//                         <animate attributeName="stop-color" values="#4facfe;#ff6b6b;#4facfe" dur="3s" repeatCount="indefinite" />
//                     </stop>
//                     <stop offset="50%" stop-color="#ff6b6b">
//                         <animate attributeName="stop-color" values="#ff6b6b;#4facfe;#ff6b6b" dur="3s" repeatCount="indefinite" />
//                     </stop>
//                     <stop offset="100%" stop-color="#4facfe">
//                         <animate attributeName="stop-color" values="#4facfe;#ff6b6b;#4facfe" dur="3s" repeatCount="indefinite" />
//                     </stop>
//                 </linearGradient>
//             </defs>
//         </svg>

//         <!-- पार्टिकल्स कंटेनर -->
//         <div class="particles"></div>

//         <!-- मुख्य लोगो सेक्शन -->
//         <section class="logo-section">
//             <!-- CODING STYLE LOGO -->
//             <svg class="logo-mark" viewBox="0 0 200 200">
//                 <polygon class="hex" points="100,15 175,55 175,145 100,185 25,145 25,55" />
//                 <polyline class="code" points="90,70 60,100 90,130" />
//                 <polyline class="code" points="110,70 140,100 110,130" />
//                 <line class="slash" x1="95" y1="70" x2="105" y2="130" />
//             </svg>

//             <!-- Brand Name -->
//             <div class="logo">
//                 <span>S</span>
//                 <span>u</span>
//                 <span>s</span>
//                 <span>h</span>
//                 <span>e</span>
//                 <span>e</span>
//                 <span>l</span>
//                 <span>C</span>
//                 <span>o</span>
//                 <span>d</span>
//                 <span>e</span>
//                 <span>r</span>
//             </div>

//             <!-- टैगलाइन -->
//             <div class="coding-tagline">
//                 &lt;code&gt; विद स्टाइल &lt;/code&gt;
//             </div>
//         </section>
//     `;

//     // बॉडी में एलिमेंट्स ऐड करो
//     while (container.firstChild) {
//         document.body.appendChild(container.firstChild);
//     }

//     // पार्टिकल्स जेनरेट करो
//     function createParticles() {
//         const particles = document.querySelector('.particles');
//         if (!particles) return;
        
//         for (let i = 0; i < 50; i++) {
//             const particle = document.createElement('div');
//             particle.className = 'particle';
            
//             particle.style.left = Math.random() * 100 + '%';
//             particle.style.top = Math.random() * 100 + '%';
            
//             const size = Math.random() * 3 + 1;
//             particle.style.width = size + 'px';
//             particle.style.height = size + 'px';
            
//             particle.style.animationDelay = Math.random() * 2 + 's';
            
//             const colors = ['#4facfe', '#ff6b6b', '#ffffff'];
//             particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
//             particles.appendChild(particle);
//         }
//     }

//     // एनिमेशन शुरू करो
//     createParticles();
    
//     setInterval(() => {
//         const particles = document.querySelector('.particles');
//         if (particles) {
//             particles.innerHTML = '';
//             createParticles();
//         }
//     }, 5000);

//     // लेटर एनिमेशन रीसेट
//     const letters = document.querySelectorAll('.logo span');
//     letters.forEach((letter) => {
//         letter.style.animation = 'none';
//         setTimeout(() => {
//             letter.style.animation = 'letterWave 2s ease-in-out infinite';
//         }, 10);
//     });
// })();













// (function() {
//     // पहले से मौजूद कंटेंट को छुपाओ
//     const originalBodyContent = document.body.innerHTML;
//     const originalOverflow = document.body.style.overflow;
//     document.body.style.overflow = 'hidden';
    
//     // एनिमेशन कंटेनर बनाओ
//     const animContainer = document.createElement('div');
//     animContainer.id = 'susheelcoder-animation';
//     animContainer.style.cssText = `
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background: linear-gradient(135deg, #0f0c29, #1a1a2e, #16213e);
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         z-index: 999999;
//         opacity: 1;
//         transition: opacity 0.3s ease;
//     `;

//     // स्टाइल एलिमेंट बनाओ
//     const style = document.createElement('style');
//     style.textContent = `
//         #susheelcoder-animation * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }

//         #susheelcoder-animation .logo-section {
//             text-align: center;
//             padding: 20px;
//         }

//         #susheelcoder-animation .logo-mark {
//             width: 120px;
//             height: 120px;
//             margin: 0 auto 20px;
//             filter: drop-shadow(0 0 20px #4facfe);
//             animation: floatAnim 0.8s ease-in-out infinite;
//         }

//         #susheelcoder-animation .hex {
//             fill: none;
//             stroke: url(#gradient);
//             stroke-width: 4;
//             animation: glowAnim 1s infinite;
//         }

//         #susheelcoder-animation .code {
//             fill: none;
//             stroke: #4facfe;
//             stroke-width: 4;
//             animation: pulseAnim 0.8s infinite;
//         }

//         #susheelcoder-animation .slash {
//             fill: none;
//             stroke: #ff6b6b;
//             stroke-width: 4;
//             stroke-dasharray: 5 5;
//             animation: moveAnim 1s linear infinite;
//         }

//         #susheelcoder-animation .logo {
//             display: flex;
//             justify-content: center;
//             flex-wrap: wrap;
//             gap: 3px;
//         }

//         #susheelcoder-animation .logo span {
//             font-size: 28px;
//             font-weight: 900;
//             color: white;
//             text-shadow: 0 0 10px #4facfe;
//             display: inline-block;
//             animation: waveAnim 1s ease-in-out infinite;
//         }

//         #susheelcoder-animation .logo span:nth-child(1) { animation-delay: 0.00s; }
//         #susheelcoder-animation .logo span:nth-child(2) { animation-delay: 0.05s; }
//         #susheelcoder-animation .logo span:nth-child(3) { animation-delay: 0.10s; }
//         #susheelcoder-animation .logo span:nth-child(4) { animation-delay: 0.15s; }
//         #susheelcoder-animation .logo span:nth-child(5) { animation-delay: 0.20s; }
//         #susheelcoder-animation .logo span:nth-child(6) { animation-delay: 0.25s; }
//         #susheelcoder-animation .logo span:nth-child(7) { animation-delay: 0.30s; }
//         #susheelcoder-animation .logo span:nth-child(8) { animation-delay: 0.35s; }
//         #susheelcoder-animation .logo span:nth-child(9) { animation-delay: 0.40s; }
//         #susheelcoder-animation .logo span:nth-child(10) { animation-delay: 0.45s; }
//         #susheelcoder-animation .logo span:nth-child(11) { animation-delay: 0.50s; }
//         #susheelcoder-animation .logo span:nth-child(12) { animation-delay: 0.55s; }

//         @keyframes floatAnim {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-8px); }
//         }

//         @keyframes glowAnim {
//             0%, 100% { stroke: #4facfe; }
//             50% { stroke: #ff6b6b; }
//         }

//         @keyframes pulseAnim {
//             0%, 100% { stroke: #4facfe; stroke-width: 4; }
//             50% { stroke: #ff6b6b; stroke-width: 6; }
//         }

//         @keyframes moveAnim {
//             0% { stroke-dashoffset: 0; stroke: #ff6b6b; }
//             100% { stroke-dashoffset: 20; stroke: #4facfe; }
//         }

//         @keyframes waveAnim {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-6px); text-shadow: 0 0 20px #ff6b6b; }
//         }
//     `;
//     document.head.appendChild(style);

//     // ग्रेडिएंट SVG
//     const gradientSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     gradientSvg.style.cssText = 'position: absolute; width: 0; height: 0;';
//     gradientSvg.innerHTML = `
//         <defs>
//             <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stop-color="#4facfe">
//                     <animate attributeName="stop-color" values="#4facfe;#ff6b6b;#4facfe" dur="1.2s" repeatCount="indefinite" />
//                 </stop>
//                 <stop offset="100%" stop-color="#ff6b6b">
//                     <animate attributeName="stop-color" values="#ff6b6b;#4facfe;#ff6b6b" dur="1.2s" repeatCount="indefinite" />
//                 </stop>
//             </linearGradient>
//         </defs>
//     `;
//     animContainer.appendChild(gradientSvg);

//     // मुख्य लोगो सेक्शन
//     const section = document.createElement('div');
//     section.className = 'logo-section';
//     section.innerHTML = `
//         <svg class="logo-mark" viewBox="0 0 200 200">
//             <polygon class="hex" points="100,15 175,55 175,145 100,185 25,145 25,55" />
//             <polyline class="code" points="90,70 60,100 90,130" />
//             <polyline class="code" points="110,70 140,100 110,130" />
//             <line class="slash" x1="95" y1="70" x2="105" y2="130" />
//         </svg>

//         <div class="logo">
//             <span>S</span><span>u</span><span>s</span><span>h</span><span>e</span><span>e</span>
//             <span>l</span><span>C</span><span>o</span><span>d</span><span>e</span><span>r</span>
//         </div>
//     `;
//     animContainer.appendChild(section);

//     // एनिमेशन को बॉडी में ऐड करो
//     document.body.appendChild(animContainer);

//     // 1.2 सेकंड बाद एनिमेशन हटाओ
//     setTimeout(() => {
//         animContainer.style.opacity = '0';
//         setTimeout(() => {
//             document.body.removeChild(animContainer);
//             document.head.removeChild(style);
//             document.body.style.overflow = originalOverflow;
//         }, 300);
//     }, 1200); // 1.2 सेकंड
// })();



































(function() {
    // पहले से मौजूद कंटेंट को सेव करो
    const originalBodyContent = document.body.innerHTML;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    // एनिमेशन कंटेनर बनाओ - पूरा स्क्रीन कवर करेगा
    const animContainer = document.createElement('div');
    animContainer.id = 'susheelcoder-animation';
    animContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0f0c29, #1a1a2e, #16213e);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999999;
        opacity: 1;
        transition: opacity 0.3s ease;
    `;

    // स्टाइल एलिमेंट बनाओ - पूरा स्टाइल के साथ
    const style = document.createElement('style');
    style.textContent = `
        #susheelcoder-animation * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        #susheelcoder-animation .logo-section {
            text-align: center;
            padding: 30px;
            animation: sectionFade 1s ease-out;
        }

        #susheelcoder-animation .logo-mark {
            width: 180px;
            height: 180px;
            margin: 0 auto 30px;
            filter: drop-shadow(0 0 30px #4facfe);
            animation: logoFloat 3s ease-in-out infinite;
            cursor: pointer;
        }

        #susheelcoder-animation .hex {
            fill: none;
            stroke: url(#gradient);
            stroke-width: 4;
            stroke-linecap: round;
            stroke-linejoin: round;
            animation: hexGlow 2s infinite;
            transform-origin: center;
        }

        #susheelcoder-animation .code {
            fill: none;
            stroke: #4facfe;
            stroke-width: 4;
            stroke-linecap: round;
            stroke-linejoin: round;
            animation: codePulse 1.5s infinite;
        }

        #susheelcoder-animation .slash {
            fill: none;
            stroke: #ff6b6b;
            stroke-width: 4;
            stroke-linecap: round;
            stroke-dasharray: 5 5;
            animation: slashMove 2s linear infinite;
        }

        #susheelcoder-animation .logo {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5px;
            margin-top: 20px;
            perspective: 500px;
        }

        #susheelcoder-animation .logo span {
            font-size: 36px;
            font-weight: 900;
            color: white;
            text-shadow: 0 0 15px #4facfe,
                         0 0 30px #ff6b6b;
            display: inline-block;
            animation: letterWave 2s ease-in-out infinite;
            cursor: default;
            transition: all 0.3s ease;
        }

        /* हर लेटर के लिए अलग-अलग एनिमेशन डिले */
        #susheelcoder-animation .logo span:nth-child(1) { animation-delay: 0.00s; }
        #susheelcoder-animation .logo span:nth-child(2) { animation-delay: 0.08s; }
        #susheelcoder-animation .logo span:nth-child(3) { animation-delay: 0.16s; }
        #susheelcoder-animation .logo span:nth-child(4) { animation-delay: 0.24s; }
        #susheelcoder-animation .logo span:nth-child(5) { animation-delay: 0.32s; }
        #susheelcoder-animation .logo span:nth-child(6) { animation-delay: 0.40s; }
        #susheelcoder-animation .logo span:nth-child(7) { animation-delay: 0.48s; }
        #susheelcoder-animation .logo span:nth-child(8) { animation-delay: 0.56s; }
        #susheelcoder-animation .logo span:nth-child(9) { animation-delay: 0.64s; }
        #susheelcoder-animation .logo span:nth-child(10) { animation-delay: 0.72s; }
        #susheelcoder-animation .logo span:nth-child(11) { animation-delay: 0.80s; }
        #susheelcoder-animation .logo span:nth-child(12) { animation-delay: 0.88s; }

        @keyframes sectionFade {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes logoFloat {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-15px);
                filter: drop-shadow(0 0 50px #4facfe);
            }
        }

        @keyframes hexGlow {
            0%, 100% {
                stroke: #4facfe;
                filter: drop-shadow(0 0 10px #4facfe);
            }
            50% {
                stroke: #ff6b6b;
                filter: drop-shadow(0 0 20px #ff6b6b);
            }
        }

        @keyframes codePulse {
            0%, 100% {
                stroke: #4facfe;
                stroke-width: 4;
            }
            50% {
                stroke: #ff6b6b;
                stroke-width: 6;
            }
        }

        @keyframes slashMove {
            0% {
                stroke-dashoffset: 0;
                stroke: #ff6b6b;
            }
            50% {
                stroke-dashoffset: 10;
                stroke: #4facfe;
            }
            100% {
                stroke-dashoffset: 20;
                stroke: #ff6b6b;
            }
        }

        @keyframes letterWave {
            0%, 100% {
                transform: translateY(0) rotate(0deg);
                text-shadow: 0 0 15px #4facfe;
            }
            25% {
                transform: translateY(-12px) rotate(5deg);
                text-shadow: 0 0 30px #ff6b6b, 0 0 50px #4facfe;
            }
            50% {
                transform: translateY(0) rotate(-5deg);
                text-shadow: 0 0 40px #4facfe, 0 0 70px #ff6b6b;
            }
            75% {
                transform: translateY(-8px) rotate(3deg);
                text-shadow: 0 0 25px #ff6b6b, 0 0 45px #4facfe;
            }
        }

        /* पार्टिकल इफेक्ट */
        #susheelcoder-animation .particles {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        #susheelcoder-animation .particle {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #4facfe;
            border-radius: 50%;
            animation: particleFloat 3s infinite;
        }

        @keyframes particleFloat {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) translateX(50px);
                opacity: 0;
            }
        }

        /* रिस्पॉन्सिव डिज़ाइन */
        @media (max-width: 500px) {
            #susheelcoder-animation .logo-mark {
                width: 140px;
                height: 140px;
            }
            
            #susheelcoder-animation .logo span {
                font-size: 28px;
            }
        }
    `;
    document.head.appendChild(style);

    // ग्रेडिएंट SVG
    const gradientSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    gradientSvg.style.cssText = 'position: absolute; width: 0; height: 0;';
    gradientSvg.innerHTML = `
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#4facfe">
                    <animate attributeName="stop-color" values="#4facfe;#ff6b6b;#4facfe" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stop-color="#ff6b6b">
                    <animate attributeName="stop-color" values="#ff6b6b;#4facfe;#ff6b6b" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stop-color="#4facfe">
                    <animate attributeName="stop-color" values="#4facfe;#ff6b6b;#4facfe" dur="3s" repeatCount="indefinite" />
                </stop>
            </linearGradient>
        </defs>
    `;
    animContainer.appendChild(gradientSvg);

    // पार्टिकल्स कंटेनर
    const particlesDiv = document.createElement('div');
    particlesDiv.className = 'particles';
    animContainer.appendChild(particlesDiv);

    // मुख्य लोगो सेक्शन
    const section = document.createElement('div');
    section.className = 'logo-section';
    section.innerHTML = `
        <svg class="logo-mark" viewBox="0 0 200 200">
            <polygon class="hex" points="100,15 175,55 175,145 100,185 25,145 25,55" />
            <polyline class="code" points="90,70 60,100 90,130" />
            <polyline class="code" points="110,70 140,100 110,130" />
            <line class="slash" x1="95" y1="70" x2="105" y2="130" />
        </svg>

        <div class="logo">
            <span>S</span><span>u</span><span>s</span><span>h</span><span>e</span><span>e</span>
            <span>l</span><span>C</span><span>o</span><span>d</span><span>e</span><span>r</span>
        </div>
    `;
    animContainer.appendChild(section);

    // एनिमेशन को बॉडी में ऐड करो
    document.body.appendChild(animContainer);

    // पार्टिकल्स जेनरेट करो
    function createParticles() {
        const particles = document.querySelector('#susheelcoder-animation .particles');
        if (!particles) return;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            particle.style.animationDelay = Math.random() * 2 + 's';
            
            const colors = ['#4facfe', '#ff6b6b', '#ffffff'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particles.appendChild(particle);
        }
    }

    createParticles();

    // 1.5 सेकंड बाद एनिमेशन हटाओ
    setTimeout(() => {
        animContainer.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(animContainer);
            document.head.removeChild(style);
            document.body.style.overflow = originalOverflow;
        }, 300);
    }, 1500); // 1.5 सेकंड
})();