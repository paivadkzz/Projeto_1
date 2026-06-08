// Modo Escuro - salva a preferência do usuário
const btnTema = document.getElementById('btn-tema');
const html = document.documentElement;

// Carregar preferência salva
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
    html.setAttribute('data-theme', 'dark');
    btnTema.textContent = '☀️ Modo Claro';
}

btnTema.addEventListener('click', () => {
    const atual = html.getAttribute('data-theme');
    if (atual === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.setItem('tema', 'light');
        btnTema.textContent = '🌙 Modo Escuro';
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('tema', 'dark');
        btnTema.textContent = '☀️ Modo Claro';
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Pequeno delay escalonado para cada elemento
            setTimeout(() => {
                entry.target.classList.add('visivel');
            }, i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-scroll').forEach(el => {
    observer.observe(el);
});
