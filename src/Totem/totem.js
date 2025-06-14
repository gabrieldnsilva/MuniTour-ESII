document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os ícones
    lucide.createIcons();

    // Dados dos locais
    const places = [
        {
            name: "Museu Histórico e Pedagógico",
            category: "Cultura e História",
            image: "https://www.mogimirim.sp.gov.br/storage/image/2022-08/16-08-22-b-museu.jpg"
        },
        {
            name: "Restaurante Sabor da Terra",
            category: "Culinária Regional",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "Café do Ponto",
            category: "Cafeteria",
            image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "Loja de Artesanato Local",
            category: "Artesanato",
            image: "https://images.unsplash.com/photo-1506800742593-c3b418a1a3a6?q=80&w=1974&auto=format&fit=crop"
        },
         {
            name: "Praça Rui Barbosa",
            category: "Lazer e Natureza",
            image: "https://lh5.googleusercontent.com/p/AF1QipM5Qc8u_Xy1x9xY-2I1T3J0G6P2H8t6I5O7V7Cg=w540-h312-n-k-no"
        }
    ];

    // Popula a lista de locais
    const placesListContainer = document.getElementById('places-list');
    places.forEach(place => {
        const placeElement = document.createElement('div');
        placeElement.className = 'flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors';
        placeElement.innerHTML = `
            <img src="${place.image}" alt="${place.name}" class="w-24 h-24 rounded-lg object-cover">
            <div class="flex-grow">
                <h4 class="text-2xl font-bold text-gray-800">${place.name}</h4>
                <p class="text-lg text-gray-500">${place.category}</p>
            </div>
            <i data-lucide="chevron-right" class="w-10 h-10 text-gray-400"></i>
        `;
        placesListContainer.appendChild(placeElement);
    });
    // Renderiza ícones novamente após adicionar elementos
    lucide.createIcons();


    // Atualiza o relógio
    function updateClock() {
        const now = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        document.getElementById('current-time').textContent = now.toLocaleTimeString('pt-BR', timeOptions);
        document.getElementById('current-date').textContent = new Intl.DateTimeFormat('pt-BR', dateOptions).format(now);
    }
    updateClock();
    setInterval(updateClock, 1000); // Atualiza a cada segundo


    // Gera o QR Code
    const qrCodeImg = document.getElementById('qr-code');
    const qrData = encodeURIComponent("https://www.google.com/maps/search/?api=1&query=Igreja+Matriz+de+São+José+Mogi+Mirim");
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`;

});
