
let score = 10;

//beroende på score
if (score >= 10) {
    tsParticles.load("tsparticles", confetti({
        particleCount: 100,
        spread: 360,
        origin: { y: 0.45 }
    }));
}