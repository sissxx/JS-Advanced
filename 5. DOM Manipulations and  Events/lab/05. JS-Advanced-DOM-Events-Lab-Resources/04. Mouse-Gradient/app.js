function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (e) => {
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        result.textContent = (`${percent}%`);
    });

}

// offsetX

// clientWidth

