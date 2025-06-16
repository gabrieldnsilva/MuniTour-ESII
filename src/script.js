// =======================================================
// MOCK DATA COMPLETO PARA PROTÓTIPO
// =======================================================

const MOCK_DATA = {
	touristPoints: [
		{
			id: 1,
			name: "Igreja Matriz de São José",
			category: "Centro Histórico",
			description:
				"Construída no século XIX, a Igreja Matriz de São José é um marco da arquitetura neoclássica na região. Sua história se entrelaça com a fundação da cidade, servindo como centro comunitário e espiritual por gerações.",
			image: "https://www.mogimirim.sp.gov.br/uploads/turismo/12769/maior_LlHhXk5aWxEzwIg_DjGedY4sCkUcFBXt.JPG",
			latitude: -22.4339,
			longitude: -46.9567,
			timeline: [
				{
					year: "1880",
					title: "Pedra Fundamental",
					description:
						"Início da construção com recursos da comunidade local.",
				},
				{
					year: "1895",
					title: "Inauguração",
					description:
						"A igreja é aberta ao público, ainda sem a torre principal.",
				},
				{
					year: "1920",
					title: "Conclusão da Torre",
					description:
						"A icônica torre do sino é finalizada, tornando-se um símbolo da cidade.",
				},
				{
					year: "2010",
					title: "Restauração",
					description:
						"Grande reforma preserva características originais e adiciona acessibilidade.",
				},
			],
			gallery: [
				"https://placehold.co/200x150/8B5CF6/FFFFFF?text=Antiga+1880",
				"https://placehold.co/200x150/10B981/FFFFFF?text=Interior+1920",
				"https://placehold.co/200x150/F59E0B/FFFFFF?text=Torre+Sino",
				"https://placehold.co/200x150/EF4444/FFFFFF?text=Atual+2024",
				"https://placehold.co/200x150/3B82F6/FFFFFF?text=Altar+Mor",
				"https://placehold.co/200x150/EC4899/FFFFFF?text=Vitral",
			],
			has360: true,
			hasAR: true,
		},
		{
			id: 2,
			name: "Museu Histórico e Pedagógico",
			category: "Cultura e História",
			description:
				"Casa histórica do século XIX transformada em museu, preserva acervo de documentos, fotografias e objetos que contam a história da cidade e região.",
			image: "https://www.olaviajantes.tur.br/wp-content/uploads/2023/12/IMG_20231205_133739-scaled.jpg",
			latitude: -22.4355,
			longitude: -46.955,
			timeline: [
				{
					year: "1890",
					title: "Construção da Casa",
					description: "Residência da família tradicional da cidade.",
				},
				{
					year: "1970",
					title: "Doação para o Município",
					description: "Família doa imóvel para criação do museu.",
				},
				{
					year: "1975",
					title: "Inauguração do Museu",
					description:
						"Abertura oficial com acervo inicial de 500 peças.",
				},
				{
					year: "2020",
					title: "Digitalização",
					description:
						"Projeto de digitalização do acervo e tours virtuais.",
				},
			],
			gallery: [
				"https://placehold.co/200x150/DC2626/FFFFFF?text=Fachada+Original",
				"https://placehold.co/200x150/059669/FFFFFF?text=Sala+Principal",
				"https://placehold.co/200x150/7C3AED/FFFFFF?text=Acervo+Antigo",
				"https://placehold.co/200x150/EA580C/FFFFFF?text=Documentos",
			],
			has360: true,
			hasAR: false,
		},
		{
			id: 3,
			name: "Praça Central",
			category: "Espaços Públicos",
			description:
				"Coração da cidade, a praça central é palco de eventos culturais e ponto de encontro tradicional dos moradores desde 1920.",
			image: "https://vault.pulsarimagens.com.br/file/preview/22MS265.jpg",
			latitude: -22.4345,
			longitude: -46.9575,
			timeline: [
				{
					year: "1920",
					title: "Criação da Praça",
					description: "Área central é designada como praça pública.",
				},
				{
					year: "1950",
					title: "Jardins e Coreto",
					description:
						"Instalação do coreto e paisagismo com jardins.",
				},
				{
					year: "2000",
					title: "Revitalização",
					description:
						"Modernização com nova iluminação e playground.",
				},
			],
			gallery: [
				"https://placehold.co/200x150/F97316/FFFFFF?text=Coreto+1950",
				"https://placehold.co/200x150/06B6D4/FFFFFF?text=Jardins",
				"https://placehold.co/200x150/84CC16/FFFFFF?text=Playground",
				"https://placehold.co/200x150/8B5CF6/FFFFFF?text=Eventos",
			],
			has360: false,
			hasAR: true,
		},
		{
			id: 4,
			name: "Mercado Municipal",
			category: "Comércio Histórico",
			description:
				"Tradicional mercado de 1960, oferece produtos locais, artesanato e gastronomia típica da região.",
			image: "https://spnews.net.br/wp-content/uploads/2023/08/117_29_-Mercadao-165-anos-3.jpg",
			latitude: -22.435,
			longitude: -46.958,
			timeline: [
				{
					year: "1960",
					title: "Inauguração",
					description: "Abertura do mercado municipal com 30 boxes.",
				},
				{
					year: "1990",
					title: "Ampliação",
					description:
						"Expansão para 50 boxes e área de alimentação.",
				},
				{
					year: "2015",
					title: "Modernização",
					description:
						"Reforma geral com melhoria da infraestrutura.",
				},
			],
			gallery: [
				"https://placehold.co/200x150/F59E0B/FFFFFF?text=Feirantes",
				"https://placehold.co/200x150/EF4444/FFFFFF?text=Produtos+Locais",
				"https://placehold.co/200x150/10B981/FFFFFF?text=Artesanato",
			],
			has360: false,
			hasAR: false,
		},
	],

	establishments: [
		{
			id: 1,
			name: "Restaurante Sabor da Terra",
			type: "restaurant",
			category: "Culinária Regional",
			description:
				"Especializado em pratos típicos da região, com ingredientes frescos e receitas tradicionais passadas por gerações.",
			rating: 4.8,
			reviews: 156,
			distance: 750,
			address: "Rua das Flores, 123 - Centro",
			phone: "(19) 99876-5432",
			whatsapp: "(19) 99876-5432",
			hours: {
				opening: "11:00",
				closing: "22:00",
				days: "Ter-Dom",
			},
			image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
			menu: [
				"Feijoada Completa - R$ 32,00",
				"Virado à Paulista - R$ 28,00",
				"Moqueca de Peixe - R$ 35,00",
				"Frango Caipira - R$ 25,00",
				"Costela na Brasa - R$ 42,00",
			],
			specialties: [
				"Culinária Caipira",
				"Pratos Regionais",
				"Carnes Grelhadas",
			],
			validated: true,
			validatedDate: "2024-01-15",
		},
		{
			id: 2,
			name: "Café do Ponto",
			type: "cafe",
			category: "Cafeteria Artesanal",
			description:
				"Café especial com grãos selecionados, ambiente aconchegante e opções de lanches caseiros.",
			rating: 4.9,
			reviews: 98,
			distance: 450,
			address: "Praça Central, 45 - Centro",
			phone: "(19) 98765-4321",
			whatsapp: "(19) 98765-4321",
			hours: {
				opening: "07:00",
				closing: "19:00",
				days: "Seg-Sáb",
			},
			image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2070&auto=format&fit=crop",
			menu: [
				"Café Expresso - R$ 4,50",
				"Cappuccino - R$ 7,00",
				"Pão na Chapa - R$ 6,00",
				"Bolo Caseiro - R$ 8,00",
				"Sanduíche Natural - R$ 12,00",
			],
			specialties: [
				"Café Especial",
				"Bolos Caseiros",
				"Ambiente Aconchegante",
			],
			validated: true,
			validatedDate: "2024-02-01",
		},
		{
			id: 3,
			name: "Loja de Artesanato Local",
			type: "shop",
			category: "Artesanato e Souvenirs",
			description:
				"Produtos artesanais feitos por artistas locais, souvenirs únicos e lembranças da cidade.",
			rating: 4.7,
			reviews: 67,
			distance: 900,
			address: "Rua do Comércio, 78 - Centro",
			phone: "(19) 97654-3210",
			whatsapp: "(19) 97654-3210",
			hours: {
				opening: "09:00",
				closing: "18:00",
				days: "Seg-Sáb",
			},
			image: "https://www.guiaviagensbrasil.com/imagens/fachada-loja-embu-das-artes-sp.jpg",
			menu: [
				"Cerâmica Decorativa - R$ 25,00",
				"Tecidos Regionais - R$ 35,00",
				"Bordados à Mão - R$ 45,00",
				"Móveis de Madeira - R$ 150,00",
				"Joias Artesanais - R$ 60,00",
			],
			specialties: ["Cerâmica", "Bordados", "Madeira", "Tecidos"],
			validated: true,
			validatedDate: "2024-01-20",
		},
		{
			id: 4,
			name: "Pousada Vila Histórica",
			type: "hotel",
			category: "Hospedagem Boutique",
			description:
				"Pousada charmosa em casarão histórico restaurado, quartos aconchegantes e café da manhã regional.",
			rating: 4.6,
			reviews: 134,
			distance: 1200,
			address: "Rua Histórica, 200 - Centro",
			phone: "(19) 96543-2109",
			whatsapp: "(19) 96543-2109",
			hours: {
				opening: "24h",
				closing: "24h",
				days: "Todos",
			},
			image: "https://images.trvl-media.com/lodging/32000000/31830000/31829800/31829766/0239cae6.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium",
			menu: [
				"Quarto Standard - R$ 120,00/noite",
				"Quarto Superior - R$ 150,00/noite",
				"Suíte Master - R$ 200,00/noite",
				"Café da Manhã - Incluso",
				"Estacionamento - Gratuito",
			],
			specialties: [
				"Casarão Histórico",
				"Café Regional",
				"Wi-Fi Gratuito",
			],
			validated: true,
			validatedDate: "2024-02-10",
		},
		{
			id: 5,
			name: "Sorveteria Gelatto",
			type: "cafe",
			category: "Sorveteria Artesanal",
			description:
				"Sorvetes artesanais com sabores únicos e ingredientes naturais, perfeito para os dias quentes.",
			rating: 4.8,
			reviews: 89,
			distance: 650,
			address: "Avenida Principal, 156 - Centro",
			phone: "(19) 95432-1098",
			whatsapp: "(19) 95432-1098",
			hours: {
				opening: "14:00",
				closing: "22:00",
				days: "Todos",
			},
			image: "https://placehold.co/600x400/fce7f3/ec4899?text=Sorveteria",
			menu: [
				"Sorvete Tradicional - R$ 6,00",
				"Sorvete Premium - R$ 8,00",
				"Açaí Completo - R$ 12,00",
				"Milkshake - R$ 10,00",
				"Casquinha Especial - R$ 15,00",
			],
			specialties: [
				"Sabores Únicos",
				"Ingredientes Naturais",
				"Açaí Premium",
			],
			validated: true,
			validatedDate: "2024-02-05",
		},
	],

	routes: [
		{
			id: 1,
			name: "Rota Histórica",
			stops: [
				{
					id: 1,
					name: "Igreja Matriz de São José",
					type: "tourist",
					time: 15,
				},
				{ id: 2, name: "Museu Histórico", type: "tourist", time: 20 },
				{
					id: 1,
					name: "Restaurante Sabor da Terra",
					type: "restaurant",
					time: 45,
				},
			],
			totalDistance: 2.1,
			totalTime: 80,
			description:
				"Conheça a história da cidade visitando seus principais marcos históricos.",
		},
		{
			id: 2,
			name: "Rota Gastronômica",
			stops: [
				{ id: 2, name: "Café do Ponto", type: "cafe", time: 20 },
				{ id: 4, name: "Mercado Municipal", type: "tourist", time: 30 },
				{
					id: 1,
					name: "Restaurante Sabor da Terra",
					type: "restaurant",
					time: 60,
				},
			],
			totalDistance: 1.8,
			totalTime: 110,
			description:
				"Saboreie o melhor da gastronomia local nesta rota especial.",
		},
	],

	userStats: {
		visitedPlaces: 12,
		createdRoutes: 3,
		capturedPhotos: 18,
		favoriteSpots: 7,
		totalDistance: 15.4,
		totalTime: 320,
	},

	arMarkers: [
		{
			id: 1,
			name: "Igreja Matriz",
			type: "tourist",
			description: "Construída em 1880",
			x: 25,
			y: 30,
		},
		{
			id: 2,
			name: "Café do Ponto",
			type: "restaurant",
			description: "⭐ 4.9 • 350m",
			x: 75,
			y: 45,
		},
		{
			id: 3,
			name: "Mercado Municipal",
			type: "shop",
			description: "Produtos locais desde 1960",
			x: 50,
			y: 60,
		},
		{
			id: 4,
			name: "Pousada Vila",
			type: "hotel",
			description: "Hospedagem histórica",
			x: 30,
			y: 70,
		},
		{
			id: 5,
			name: "Sorveteria",
			type: "cafe",
			description: "Gelatos artesanais",
			x: 60,
			y: 40,
		},
	],
};

// =======================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
	lucide.createIcons();

	initializeDarkMode();

	initializeApp();

	setupEventListeners();

	loadNearbyLocations();

	loadUserStats();

	initializeDarkMode();
});

function initializeApp() {
	const splashScreen = document.getElementById("splash-screen");
	setTimeout(() => {
		if (splashScreen) {
			splashScreen.classList.add("opacity-0");
			splashScreen.addEventListener(
				"transitionend",
				() => {
					splashScreen.style.display = "none";
					showScreen("screen-login");
				},
				{ once: true }
			);
		} else {
			showScreen("screen-login");
		}
	}, 1500);
}

function setupEventListeners() {
	const establishmentForm = document.getElementById("establishment-form");
	if (establishmentForm) {
		establishmentForm.addEventListener("submit", handleEstablishmentSubmit);
	}

	const mainSearchInput = document.getElementById("main-search-input");
	if (mainSearchInput) {
		mainSearchInput.addEventListener("keyup", handleMainSearch);
	}

	const searchStopInput = document.getElementById("search-stop-input");
	if (searchStopInput) {
		searchStopInput.addEventListener("keyup", searchStops);
	}

	const photoInput = document.getElementById("photo-input");
	if (photoInput) {
		photoInput.addEventListener("change", handlePhotoUpload);
	}
}

// =======================================================
// NAVEGAÇÃO E LÓGICA PRINCIPAL
// =======================================================

let screenHistory = ["screen-main"]; // Histórico de telas para navegação
let map;
let userLocation = null;
let placesService;
let markers = [];
let currentTouristPoint = null;
let currentEstablishment = null;
let currentRoute = [];
let establishmentFilters = {
	type: "all", // 'all', 'restaurant', 'cafe', 'shop', 'hotel'
	distance: "all", // 'all', 500, 1000, 2000 (em metros)
};

function showScreen(screenId, isGoingBack = false) {
	const allScreens = document.querySelectorAll(
		'#app-container > div[id^="screen-"], #bottom-nav'
	);
	allScreens.forEach((screen) => screen.classList.add("hidden"));

	const targetScreen = document.getElementById(screenId);
	if (targetScreen) {
		targetScreen.classList.remove("hidden");
	}

	// Mostra a barra de navegação inferior se a tela não for de login/splash
	if (!["screen-login", "screen-welcome-splash"].includes(screenId)) {
		document.getElementById("bottom-nav").classList.remove("hidden");
	}

	if (!isGoingBack) {
		if (screenHistory[screenHistory.length - 1] !== screenId) {
			screenHistory.push(screenId);
		}
	}

	document.getElementById("app-container").scrollTop = 0;

	handleScreenSpecificLogic(screenId);
	updateNavigationState(screenId);

	lucide.createIcons();
}

function goBack() {
	if (screenHistory.length > 1) {
		screenHistory.pop();
		const previousScreenId = screenHistory[screenHistory.length - 1];
		showScreen(previousScreenId, true);
	}
}

function handleScreenSpecificLogic(screenId) {
	switch (screenId) {
		case "screen-tourist-point-list":
			loadTouristPointsList();

			break;

		case "screen-establishments-list":
			renderEstablishments();

			break;

		case "screen-route-planner":
			loadCurrentRoute();

			break;

		case "screen-add-stop":
			loadAvailableStops();

			break;

		case "screen-ar-view":
			initializeAR();

			break;

		case "screen-user-profile":
			loadUserStats();

			break;
	}
}

function updateNavigationState(screenId) {
	document.querySelectorAll("#bottom-nav button").forEach((button) => {
		button.classList.remove("active");
		if (button.dataset.screen === screenId) {
			button.classList.add("active");
		}
	});

	const navMap = {
		"screen-main": "nav-home",
		"screen-route-planner": "nav-route-planner",
		"screen-ar-view": "nav-ar",
		"screen-register-establishment": "nav-register",
		"screen-user-profile": "nav-profile",
	};

	const activeNav = navMap[screenId];
	if (activeNav) {
		document.getElementById(activeNav).classList.add("active");
	} else {
		document.querySelectorAll("#bottom-nav button").forEach((btn) => {
			btn.classList.remove("active");
		});
	}
}

function setupNavigationState() {
	updateNavigationState(screenHistory[screenHistory.length - 1]);
}

function handleLogin() {
	showScreen("screen-welcome-splash");
}

function startApp() {
	screenHistory = []; // Reseta o histórico para não voltar para o login
	showScreen("screen-main");
}

function showNotification(message, type = "info") {
	const notification = document.createElement("div");
	const bgColor =
		type === "success"
			? "bg-green-600"
			: type === "error"
			? "bg-red-600"
			: type === "warning"
			? "bg-yellow-600"
			: "bg-[#F24E1E]"; // Cor primária para notificações 'info'

	notification.className = `fixed top-4 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-4 py-2 rounded-lg shadow-lg z-50`;
	notification.textContent = message;

	document.body.appendChild(notification);

	setTimeout(() => {
		notification.style.opacity = "1";
		notification.style.transform = "translate(-50%, 0)";
	}, 10);

	setTimeout(() => {
		if (document.body.contains(notification)) {
			notification.style.opacity = "0";
			notification.style.transform = "translate(-50%, -20px)";
			setTimeout(() => {
				if (document.body.contains(notification)) {
					document.body.removeChild(notification);
				}
			}, 300);
		}
	}, 3000);
}

// =======================================================
// 			CARREGAMENTO DE CONTEÚDO DINÂMICO
// =======================================================

function loadNearbyLocations() {
	const container = document.getElementById("nearby-locations");
	if (!container) return;

	container.innerHTML = "";

	const allLocations = [
		...MOCK_DATA.touristPoints.slice(0, 2).map((point) => ({
			...point,
			type: "tourist",
			distance: Math.floor(Math.random() * 1000) + 100,
		})),
		...MOCK_DATA.establishments.slice(0, 2).map((est) => ({
			...est,
			type: "establishment",
		})),
	];

	allLocations.forEach((location) => {
		const div = document.createElement("div");
		div.className =
			"location-card flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow";

		const clickHandler =
			location.type === "tourist"
				? () => showTouristPointDetail(location.id)
				: () => showEstablishmentDetail(location.id);

		div.onclick = clickHandler;

		div.innerHTML = `
			<img 
				src="${location.image}" 
				alt="${location.name}" 
				class="w-16 h-16 rounded-md object-cover mr-4"
			/>
			<div class="flex-1">
				<h3 class="font-semibold text-gray-800">${location.name}</h3>
				<p class="text-sm text-gray-500">
					${location.category} • ${location.distance}m
				</p>
				${
					location.rating
						? `
					<div class="flex items-center text-sm text-yellow-500 mt-1">
						<i data-lucide="star" class="w-4 h-4 fill-current"></i>
						<span class="ml-1 font-bold">${location.rating}</span>
						<span class="text-gray-400 ml-1">(${location.reviews})</span>
					</div>
				`
						: ""
				}
			</div>
			<i data-lucide="chevron-right" class="w-5 h-5 text-gray-400 ml-auto"></i>
		`;

		container.appendChild(div);
	});

	lucide.createIcons();
}

function loadTouristPointsList() {
	const container = document.getElementById("tourist-points-container");
	if (!container) return;

	container.innerHTML = "";

	MOCK_DATA.touristPoints.forEach((point) => {
		const div = document.createElement("div");
		div.className =
			"location-card flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow";
		div.onclick = () => showTouristPointDetail(point.id);

		div.innerHTML = `
			<img 
				src="${point.image}" 
				alt="${point.name}" 
				class="w-16 h-16 rounded-md object-cover mr-4"
			/>
			<div class="flex-1">
				<h3 class="font-semibold text-gray-800">${point.name}</h3>
				<p class="text-sm text-gray-500">${point.category}</p>
				<div class="flex items-center mt-1 space-x-2">
					${
						point.has360
							? '<span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">360°</span>'
							: ""
					}
					${
						point.hasAR
							? '<span class="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">AR</span>'
							: ""
					}
				</div>
			</div>
			<i data-lucide="chevron-right" class="w-5 h-5 text-gray-400 ml-auto"></i>
		`;

		container.appendChild(div);
	});

	lucide.createIcons();
}

function showTouristPointDetail(pointId) {
	const point = MOCK_DATA.touristPoints.find((p) => p.id === pointId);
	if (!point) return;

	currentTouristPoint = point;

	document.getElementById("detail-image").src = point.image;
	document.getElementById("detail-title").textContent = point.name;
	document.getElementById("detail-category").textContent = point.category;
	document.getElementById("detail-description").textContent =
		point.description;

	loadTimeline(point.timeline);
	loadPhotoGallery(point.gallery);

	showScreen("screen-tourist-point-detail");
}

function loadTimeline(timeline) {
	const container = document.getElementById("timeline-container");
	if (!container) return;

	container.innerHTML = "";

	timeline.forEach((item) => {
		const div = document.createElement("div");
		div.className = "timeline-item mb-4";
		div.innerHTML = `
			<p class="font-bold text-[#F24E1E] mb-1">${item.year} - ${item.title}</p>
                <p class="text-gray-500">${item.description}</p>
		`;
		container.appendChild(div);
	});
}

function loadPhotoGallery(gallery) {
	const container = document.getElementById("photo-gallery");
	if (!container) return;

	container.innerHTML = "";

	gallery.forEach((photo) => {
		const img = document.createElement("img");
		img.src = photo;
		img.className =
			"photo-gallery-item rounded-md object-cover w-full h-24 cursor-pointer hover:scale-105 transition-transform";
		img.onclick = () => openPhotoModal(photo);
		container.appendChild(img);
	});
}

function openPhotoModal(photoUrl) {
	showNotification("Foto ampliada (recurso em desenvolvimento)");
}

// =======================================================
//  			RENDERIZAR ESTABELECIMENTOS
// =======================================================

function renderEstablishments() {
	const container = document.getElementById("establishments-container");
	if (!container) return;

	container.innerHTML = "";

	const filtered = MOCK_DATA.establishments.filter((est) => {
		const typeMatch =
			establishmentFilters.type === "all" ||
			est.type === establishmentFilters.type;
		const distanceMatch =
			establishmentFilters.distance === "all" ||
			est.distance <= establishmentFilters.distance;
		return typeMatch && distanceMatch;
	});

	if (filtered.length === 0) {
		container.innerHTML = `
			<div class="text-center py-8">
				<i data-lucide="search-x" class="w-12 h-12 mx-auto text-gray-400 mb-2"></i>
				<p class="text-gray-500">Nenhum estabelecimento encontrado</p>
				<p class="text-sm text-gray-400">Tente ajustar os filtros</p>
			</div>
		`;
		lucide.createIcons();
		return;
	}

	filtered.forEach((est) => {
		const div = document.createElement("div");
		div.className =
			"establishment-card flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow";
		div.onclick = () => showEstablishmentDetail(est.id);

		div.innerHTML = `
			<img 
				src="${est.image}" 
				alt="${est.name}" 
				class="w-16 h-16 rounded-md object-cover mr-4"
			/>
			<div class="flex-1">
				<h3 class="font-semibold text-gray-800">${est.name}</h3>
				<p class="text-sm text-gray-500">${est.category} • ${est.distance}m</p>
				<div class="flex items-center text-sm text-yellow-500 mt-1">
					<i data-lucide="star" class="w-4 h-4 fill-current"></i>
					<span class="ml-1 font-bold">${est.rating}</span>
					<span class="text-gray-400 ml-1">(${est.reviews})</span>
				</div>
				${
					est.validated
						? '<span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mt-1 inline-block">Validado</span>'
						: ""
				}
			</div>
			<i data-lucide="chevron-right" class="w-5 h-5 text-gray-400 ml-auto"></i>
		`;

		container.appendChild(div);
	});

	lucide.createIcons();
}

function showEstablishmentDetail(establishmentId) {
	const establishment = MOCK_DATA.establishments.find(
		(e) => e.id === establishmentId
	);
	if (!establishment) return;

	currentEstablishment = establishment;

	document.getElementById("establishment-image").src = establishment.image;
	document.getElementById("establishment-title").textContent =
		establishment.name;
	document.getElementById("establishment-category").textContent =
		establishment.category;

	const infoContainer = document.getElementById("establishment-info");
	if (infoContainer) {
		infoContainer.innerHTML = `
			<div class="flex items-center">
				<i data-lucide="map-pin" class="w-5 h-5 mr-3 text-gray-500"></i>
				<span>${establishment.address}</span>
			</div>
			<div class="flex items-center">
				<i data-lucide="clock" class="w-5 h-5 mr-3 text-gray-500"></i>
				<span>Aberto ${establishment.hours.opening} às ${
			establishment.hours.closing
		} (${establishment.hours.days})</span>
			</div>
			<div class="flex items-center">
				<i data-lucide="phone" class="w-5 h-5 mr-3 text-gray-500"></i>
				<span>${establishment.phone}</span>
			</div>
			${
				establishment.whatsapp
					? `
				<div class="flex items-center">
					<i data-lucide="message-circle" class="w-5 h-5 mr-3 text-gray-500"></i>
					<span>WhatsApp: ${establishment.whatsapp}</span>
				</div>
			`
					: ""
			}
			<div class="flex items-center">
				<i data-lucide="star" class="w-5 h-5 mr-3 text-yellow-500"></i>
				<span>${establishment.rating} ⭐ (${establishment.reviews} avaliações)</span>
			</div>
		`;
	}

	const detailsContainer = document.getElementById("establishment-details");
	if (detailsContainer) {
		detailsContainer.innerHTML = `
			<h2 class="text-lg font-semibold text-gray-700 mb-3">${getDetailsTitle(
				establishment.type
			)}</h2>
			<div class="space-y-2">
				${establishment.menu
					.map(
						(item) => `
					<div class="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
						<span class="text-gray-700">${item}</span>
					</div>
				`
					)
					.join("")}
			</div>
			<div class="mt-4">
				<h3 class="font-semibold text-gray-700 mb-2">Especialidades</h3>
				<div class="flex flex-wrap gap-2">
					${establishment.specialties
						.map(
							(spec) => `
						<span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">${spec}</span>
					`
						)
						.join("")}
				</div>
			</div>
		`;
	}

	lucide.createIcons();
}

function getDetailsTitle(type) {
	const titles = {
		restaurant: "Cardápio (Destaques)",
		cafe: "Menu de Bebidas e Lanches",
		shop: "Produtos Disponíveis",
		hotel: "Acomodações e Serviços",
	};
	return titles[type] || "Produtos e Serviços";
}

function filterEstablishments(type, element) {
	establishmentFilters.type = type;
	document
		.querySelectorAll(".filter-btn")
		.forEach(
			(btn) =>
				btn.classList.replace("bg-[#F24E1E]", "bg-gray-200") ||
				btn.classList.replace("text-white", "text-gray-700")
		);
	element.classList.replace("bg-gray-200", "bg-[#F24E1E]");
	element.classList.replace("text-gray-700", "text-white");
	renderEstablishments();
}

function filterByDistance(maxDistance, element) {
	establishmentFilters.distance = maxDistance;
	document
		.querySelectorAll(".distance-filter")
		.forEach(
			(btn) =>
				btn.classList.replace("bg-amber-100", "bg-gray-100") ||
				btn.classList.replace("text-amber-800", "text-gray-700")
		);
	element.classList.replace("bg-gray-100", "bg-amber-100");
	element.classList.replace("text-gray-700", "text-amber-800");
	renderEstablishments();
}

// =======================================================
// 						SISTEMA DE ROTAS
// =======================================================

function ensureCurrentRoute() {
	if (!Array.isArray(currentRoute)) currentRoute = [];
}

function loadCurrentRoute() {
	ensureCurrentRoute();
	const stopsContainer = document.getElementById("route-stops");
	const totalDistanceSpan = document.getElementById("total-distance");
	const totalTimeSpan = document.getElementById("total-time");

	if (!stopsContainer) return;

	if (currentRoute.length === 0) {
		currentRoute = [...MOCK_DATA.routes[0].stops];
	}

	stopsContainer.innerHTML = "";
	let totalDistance = 0;
	let totalTime = 0;

	currentRoute.forEach((stop, index) => {
		totalDistance += 0.5;
		totalTime += stop.time;

		const div = document.createElement("div");
		div.className = "route-stop flex items-center mb-4";
		div.innerHTML = `
			<div class="flex flex-col items-center mr-4">
				<span class="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
					${index + 1}
				</span>
				${
					index < currentRoute.length - 1
						? '<div class="w-px h-12 bg-blue-300 mt-2"></div>'
						: ""
				}
			</div>
			<div class="flex-1">
				<p class="font-semibold text-gray-700">${stop.name}</p>
				<p class="text-sm text-gray-500">${getStopTypeLabel(stop.type)} • ${
			stop.time
		} min</p>
			</div>
			<button onclick="removeRouteStop(${index})" class="p-2 text-red-500 hover:bg-red-50 rounded-full">
				<i data-lucide="x" class="w-4 h-4"></i>
			</button>
		`;
		stopsContainer.appendChild(div);
	});

	if (totalDistanceSpan)
		totalDistanceSpan.textContent = `${totalDistance.toFixed(1)} km`;
	if (totalTimeSpan) totalTimeSpan.textContent = `${totalTime} min`;

	lucide.createIcons();
}

function removeRouteStop(index) {
	ensureCurrentRoute();
	if (index >= 0 && index < currentRoute.length) {
		currentRoute.splice(index, 1);
		loadCurrentRoute();
		showNotification(`Parada removida da rota`, "success");
	}
}

function getStopTypeLabel(type) {
	const labels = {
		tourist: "Ponto Turístico",
		restaurant: "Restaurante",
		cafe: "Café",
		shop: "Loja",
		hotel: "Hotel",
	};
	return labels[type] || "Local";
}

function startRoute() {
	if (currentRoute.length === 0) {
		showNotification("Adicione pelo menos uma parada à rota", "error");
		return;
	}
	showNotification("Iniciando navegação da rota... 🗺️", "success");
}

function loadAvailableStops() {
	const container = document.getElementById("available-stops");
	if (!container) return;

	container.innerHTML = "";

	const allStops = [
		...MOCK_DATA.touristPoints.map((point) => ({
			...point,
			type: "tourist",
		})),
		...MOCK_DATA.establishments.map((est) => ({ ...est, type: est.type })),
	];

	allStops.forEach((stop) => {
		const div = document.createElement("div");
		div.className =
			"flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors";
		div.setAttribute("data-category", stop.type);

		div.onclick = () => addStopToRoute(stop);

		div.innerHTML = `
			<img 
				src="${stop.image}" 
				alt="${stop.name}" 
				class="w-12 h-12 rounded-md object-cover mr-3"
			/>
			<div class="flex-1">
				<h4 class="font-semibold text-gray-800">${stop.name}</h4>
				<p class="text-sm text-gray-500">${stop.category} • ${
			stop.distance || Math.floor(Math.random() * 1000) + 100
		}m</p>
			</div>
			<button class="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
				<i data-lucide="plus" class="w-4 h-4"></i>
			</button>
		`;

		container.appendChild(div);
	});

	lucide.createIcons();
}

function addStopToRoute(stop) {
	ensureCurrentRoute();
	const exists = currentRoute.some(
		(routeStop) => routeStop.name === stop.name
	);
	if (exists) {
		showNotification("Esta parada já está na sua rota", "error");
		return;
	}

	const newStop = {
		id: stop.id,
		name: stop.name,
		type: stop.type,
		time: getEstimatedTime(stop.type),
	};

	currentRoute.push(newStop);
	showNotification(`${stop.name} adicionado à rota!`, "success");

	setTimeout(() => {
		showScreen("screen-route-planner");
	}, 1000);
}

function getEstimatedTime(type) {
	const times = {
		tourist: 20,
		restaurant: 45,
		cafe: 15,
		shop: 10,
		hotel: 5,
	};
	return times[type] || 15;
}

function searchStops() {
	const query = document
		.getElementById("search-stop-input")
		.value.toLowerCase();
	const stops = document.querySelectorAll("#available-stops > div");

	stops.forEach((stop) => {
		const name = stop.querySelector("h4").textContent.toLowerCase();
		if (name.includes(query)) {
			stop.classList.remove("hidden");
		} else {
			stop.classList.add("hidden");
		}
	});
}

function filterAddStops(category) {
	const stops = document.querySelectorAll("#available-stops > div");

	document.querySelectorAll(".category-filter-btn").forEach((btn) => {
		btn.classList.remove("ring-2", "ring-blue-500", "ring-offset-2");
	});

	event.currentTarget.classList.add(
		"ring-2",
		"ring-blue-500",
		"ring-offset-2"
	);

	stops.forEach((stop) => {
		if (
			category === "all" ||
			stop.getAttribute("data-category") === category
		) {
			stop.classList.remove("hidden");
		} else {
			stop.classList.add("hidden");
		}
	});

	showNotification(`Filtro aplicado: ${category}`);
}

function addToCurrentRoute() {
	if (currentTouristPoint) {
		addStopToRoute(currentTouristPoint);
	}
}

// =======================================================
// 		GOOGLE MAPS & GEOLOCATION (RF04, RF09)
// =======================================================

function initMap() {
	const defaultCenter = { lat: -22.4339, lng: -46.9567 };

	try {
		map = new google.maps.Map(document.getElementById("google-map"), {
			zoom: 15,
			center: defaultCenter,
			styles: [
				{ featureType: "poi", stylers: [{ visibility: "simplified" }] },
				{ featureType: "transit", stylers: [{ visibility: "off" }] },
			],
			disableDefaultUI: true,
			gestureHandling: "greedy",
		});

		placesService = new google.maps.places.PlacesService(map);
		addTouristPointMarkers();
		getCurrentLocation();

		showNotification("Mapa carregado com sucesso!", "success");
	} catch (error) {
		console.error("Erro ao inicializar Google Maps:", error);
		document.getElementById("map-fallback").classList.remove("hidden");
		document.getElementById("google-map").classList.add("hidden");
		showNotification(
			"Erro ao carregar mapa. Usando modo offline.",
			"error"
		);
	}
}

function getCurrentLocation() {
	if (!navigator.geolocation) {
		showNotification(
			"Geolocalização não suportada neste navegador",
			"error"
		);
		return;
	}

	navigator.geolocation.getCurrentPosition(
		(position) => {
			userLocation = {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			};

			if (map) {
				map.setCenter(userLocation);
				new google.maps.Marker({
					position: userLocation,
					map: map,
					title: "Sua localização",
					icon: {
						path: google.maps.SymbolPath.CIRCLE,
						scale: 8,
						fillColor: "#F24E1E",
						fillOpacity: 1,
						strokeColor: "white",
						strokeWeight: 3,
					},
				});
			}

			updateDistancesFromUserLocation();
			showNotification("📍 Localização obtida com sucesso!", "success");
		},
		(error) => {
			let message = "Erro ao obter localização: ";
			switch (error.code) {
				case error.PERMISSION_DENIED:
					message += "Permissão negada";
					break;
				case error.POSITION_UNAVAILABLE:
					message += "Localização indisponível";
					break;
				case error.TIMEOUT:
					message += "Tempo esgotado";
					break;
				default:
					message += "Erro desconhecido";
					break;
			}
			showNotification(message, "error");
		}
	);
}

function addTouristPointMarkers() {
	if (!map) return;

	MOCK_DATA.touristPoints.forEach((point) => {
		const marker = new google.maps.Marker({
			position: { lat: point.latitude, lng: point.longitude },
			map: map,
			title: point.name,
			icon: {
				url: "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
			},
		});

		const infoWindow = new google.maps.InfoWindow({
			content: `
				<div class="p-2">
					<h3 class="font-bold">${point.name}</h3>
					<p class="text-sm text-gray-600">${point.category}</p>
					<button onclick="showTouristPointDetail(${point.id})" class="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm">
						Ver Detalhes
					</button>
				</div>
			`,
		});

		marker.addListener("click", () => {
			infoWindow.open(map, marker);
		});

		markers.push(marker);
	});
}

function updateDistancesFromUserLocation() {
	if (!userLocation) return;

	MOCK_DATA.establishments.forEach((est) => {
		est.distance = Math.floor(Math.random() * 1500) + 100;
	});

	MOCK_DATA.touristPoints.forEach((point) => {
		point.distance = Math.floor(Math.random() * 1000) + 100;
	});

	const currentScreen = screenHistory[screenHistory.length - 1];
	if (currentScreen === "screen-establishments-list") {
		renderEstablishments();
	} else if (currentScreen === "screen-main") {
		loadNearbyLocations();
	}
}

// =======================================================
// VISUALIZAÇÃO 360º E AR(RF01)
// =======================================================

function zoom360(direction) {
	const img = document.getElementById("image-360");
	if (!img) return;

	const currentScale = img.style.transform.match(/scale\(([^)]+)\)/) || [
		null,
		"1",
	];
	let scale = parseFloat(currentScale[1]);

	if (direction === "in") {
		scale = Math.min(scale + 0.2, 3);
	} else {
		scale = Math.max(scale - 0.2, 0.5);
	}

	img.style.transform = `scale(${scale}) rotate(0deg)`;
	showNotification(`Zoom ${direction === "in" ? "aproximado" : "afastado"}`);
}

function reset360View() {
	const img = document.getElementById("image-360");
	if (img) {
		img.style.transform = "scale(1) rotate(0deg)";
	}
	showNotification("Visualização 360° resetada");
}

function toggle360Fullscreen() {
	const viewDiv = document.getElementById("screen-360-view");
	if (!document.fullscreenElement) {
		viewDiv.requestFullscreen().catch((err) => {
			showNotification(
				"Erro ao entrar em tela cheia: " + err.message,
				"error"
			);
		});
	} else {
		document.exitFullscreen();
	}
}

function share360View() {
	if (navigator.share) {
		navigator.share({
			title: "MuniTour - Visualização 360°",
			text: "Confira esta visualização 360° no MuniTour!",
			url: window.location.href,
		});
	} else {
		navigator.clipboard
			.writeText(window.location.href)
			.then(() =>
				showNotification(
					"Link copiado para a área de transferência!",
					"success"
				)
			)
			.catch(() => showNotification("Erro ao copiar link", "error"));
	}
}

function initializeAR() {
	const overlayContainer = document.getElementById("ar-overlays");
	if (!overlayContainer) return;

	overlayContainer.innerHTML = "";

	MOCK_DATA.arMarkers.forEach((marker) => {
		const markerDiv = document.createElement("div");
		markerDiv.className = "ar-marker absolute group";
		markerDiv.style.left = `${marker.x}%`;
		markerDiv.style.top = `${marker.y}%`;
		markerDiv.style.transform = "translate(-50%, -100%)";
		markerDiv.tabIndex = 0;
		markerDiv.setAttribute("role", "button");
		markerDiv.setAttribute("aria-label", marker.name);

		// Miniatura: busca imagem real do ponto turístico ou placeholder
		let thumb = "";
		const tourist = MOCK_DATA.touristPoints.find((p) =>
			p.name.includes(marker.name)
		);
		const estab = MOCK_DATA.establishments.find((e) =>
			e.name.includes(marker.name)
		);
		if (tourist && tourist.image) thumb = tourist.image;
		else if (estab && estab.image) thumb = estab.image;
		else thumb = "https://placehold.co/80x80/EEE/888?text=AR";

		markerDiv.innerHTML = `
			<div class="ar-marker-card w-20 h-20 rounded-full bg-white/90 shadow-xl border-4 border-white flex flex-col items-center justify-center relative cursor-pointer transition-transform hover:scale-110 focus:scale-110 outline-none">
				<img src="${thumb}" alt="${
			marker.name
		}" class="w-14 h-14 rounded-full object-cover border-2 border-gray-200 mb-1" />
				<i data-lucide="${getARIcon(marker.type)}" class="w-5 h-5 ${getARIconColor(
			marker.type
		)} absolute top-1 right-1 bg-white rounded-full p-1 shadow"></i>
			</div>
			<div class="ar-marker-tooltip opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 mt-2 z-10 bg-black/80 text-white text-xs rounded px-2 py-1 pointer-events-auto whitespace-nowrap">
				<strong>${marker.name}</strong><br/>
				<span>${marker.description}</span>
			</div>
		`;

		markerDiv.addEventListener("click", () => showARDetails(marker.id));
		markerDiv.addEventListener("keydown", (e) => {
			if (e.key === "Enter" || e.key === " ") showARDetails(marker.id);
		});

		overlayContainer.appendChild(markerDiv);
	});

	lucide.createIcons();
}

function getARIcon(type) {
	const icons = {
		tourist: "landmark",
		restaurant: "utensils-crossed",
		shop: "shopping-bag",
		cafe: "coffee",
		hotel: "bed",
	};
	return icons[type] || "map-pin";
}

function getARIconColor(type) {
	const colors = {
		tourist: "text-orange-600",
		restaurant: "text-green-600",
		shop: "text-purple-600",
		cafe: "text-yellow-600",
		hotel: "text-red-600",
	};
	return colors[type] || "text-gray-600";
}

function showARDetails(markerId) {
	const marker = MOCK_DATA.arMarkers.find((m) => m.id == markerId);
	if (!marker) return;

	if (marker.type === "tourist") {
		showTouristPointDetail(marker.id);
	} else {
		showEstablishmentDetail(marker.id);
	}
}

// =======================================================
// LÓGICA DA TELA AR (RF08)
// =======================================================

function toggleARFilters() {
	const panel = document.getElementById("ar-filters-panel");
	if (panel) {
		panel.classList.toggle("hidden");
	}
}

function setARFilter(type, event) {
	document.querySelectorAll(".ar-filter-btn").forEach((btn) => {
		btn.classList.remove(
			"ring-2",
			"ring-blue-500",
			"ring-offset-2",
			"scale-105"
		);
	});

	if (event && event.currentTarget) {
		event.currentTarget.classList.add(
			"ring-2",
			"ring-blue-500",
			"ring-offset-2",
			"scale-105"
		);
	}

	const markers = document.querySelectorAll(".ar-marker");
	MOCK_DATA.arMarkers.forEach((marker, index) => {
		const markerElement = markers[index];
		if (!markerElement) return;

		if (type === "all" || marker.type === type) {
			markerElement.classList.remove("hidden");
		} else {
			markerElement.classList.add("hidden");
		}
	});

	showNotification(`Filtro AR '${type}' aplicado`);
}

function captureARScene() {
	const userStats = JSON.parse(
		localStorage.getItem("munitour_user_stats") || "{}"
	);
	userStats.capturedPhotos = (userStats.capturedPhotos || 0) + 1;
	localStorage.setItem("munitour_user_stats", JSON.stringify(userStats));

	showNotification("📸 Cena AR capturada! Foto salva na galeria.", "success");
}

// =======================================================
// PERFIL DO USUÁRIO E ESTATÍSTICAS
// =======================================================

function loadUserStats() {
	const statsContainer = document.getElementById("user-stats");
	if (!statsContainer) return;

	const stats = JSON.parse(
		localStorage.getItem("munitour_user_stats") ||
			JSON.stringify(MOCK_DATA.userStats)
	);

	statsContainer.innerHTML = `
		<div class="stat-card bg-blue-50 p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
			<div class="text-2xl font-bold text-blue-600">${stats.visitedPlaces}</div>
			<div class="text-sm text-blue-800">Locais Visitados</div>
		</div>
		<div class="stat-card bg-green-50 p-4 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
			<div class="text-2xl font-bold text-green-600">${stats.createdRoutes}</div>
			<div class="text-sm text-green-800">Rotas Criadas</div>
		</div>
		<div class="stat-card bg-purple-50 p-4 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
			<div class="text-2xl font-bold text-purple-600">${stats.capturedPhotos}</div>
			<div class="text-sm text-purple-800">Fotos 360°</div>
		</div>
	`;
}

function showFavorites() {
	showNotification("Seus locais favoritos (Em desenvolvimento)", "info");
}

function showUserRoutes() {
	showScreen("screen-route-planner");
}

function showCapturedPhotos() {
	showNotification("Suas fotos capturadas (Em desenvolvimento)", "info");
}

function showSettings() {
	showNotification("Configurações (Em desenvolvimento)", "info");
}

function showHelp() {
	showNotification("Central de Ajuda (Em desenvolvimento)", "info");
}

function toggleNotifications(checkbox) {
	const enabled = checkbox.checked;
	showNotification(
		`Notificações ${enabled ? "ativadas" : "desativadas"}`,
		"success"
	);
}

function toggleDarkMode(checkbox) {
	const body = document.body;
	const isDark = checkbox.checked;

	if (isDark) {
		body.classList.add("dark");
		localStorage.setItem("munitour_dark_mode", "true");
		showNotification("Modo escuro ativado", "success");
	} else {
		body.classList.remove("dark");
		localStorage.setItem("munitour_dark_mode", "false");
		showNotification("Modo claro ativado", "success");
	}
}

function initializeDarkMode() {
	const darkMode = localStorage.getItem("munitour_dark_mode");
	const toggle = document.getElementById("dark-mode-toggle");

	if (darkMode === "true") {
		document.body.classList.add("dark");
		if (toggle) toggle.checked = true;
	}
}

// Inicializa o dark mode no carregamento da página
document.addEventListener("DOMContentLoaded", () => {
	initializeDarkMode();
});

function toggleLocation(checkbox) {
	const enabled = checkbox.checked;
	showNotification(
		`Localização ${enabled ? "ativada" : "desativada"}`,
		"success"
	);
	if (enabled) {
		getCurrentLocation();
	}
}

// =======================================================
// FORMULÁRIOS E UPLOADS
// =======================================================

function handleEstablishmentSubmit(e) {
	e.preventDefault();

	const formData = new FormData(e.target);
	const establishmentData = {
		name: formData.get("name"),
		type: formData.get("type"),
		address: formData.get("address"),
		phone: formData.get("phone"),
		whatsapp: formData.get("whatsapp"),
		description: formData.get("description"),
	};

	setTimeout(() => {
		showNotification(
			"✅ Solicitação enviada com sucesso! Aguarde a análise da prefeitura.",
			"success"
		);
		e.target.reset();
		document.getElementById("photo-preview").classList.add("hidden");
		setTimeout(() => goBack(), 1500);
	}, 1000);
}

function handlePhotoUpload(input) {
	const file = input.files[0];
	if (!file) return;

	if (file.size > 5 * 1024 * 1024) {
		showNotification("Arquivo muito grande. Máximo 5MB.", "error");
		return;
	}

	if (!file.type.startsWith("image/")) {
		showNotification("Apenas imagens são permitidas.", "error");
		return;
	}

	const reader = new FileReader();
	reader.onload = function (e) {
		const preview = document.getElementById("photo-preview");
		const img = document.getElementById("preview-image");

		if (preview && img) {
			img.src = e.target.result;
			preview.classList.remove("hidden");
		}
	};
	reader.readAsDataURL(file);

	showNotification("Foto carregada com sucesso!", "success");
}

function handleMainSearch(e) {
	if (e.key === "Enter" && e.target.value.trim()) {
		const query = e.target.value.trim();
		showNotification(`🔍 Buscando por: "${query}"`);

		setTimeout(() => {
			showNotification(
				`Encontrados 3 resultados para "${query}"`,
				"success"
			);
		}, 1000);
	}
}

// =======================================================
// INICIALIZAÇÃO E VARIÁVEIS GLOBAIS
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
	const splashScreen = document.getElementById("splash-screen");
	if (splashScreen) {
		setTimeout(() => {
			splashScreen.classList.add("opacity-0");
			splashScreen.addEventListener(
				"transitionend",
				() => {
					splashScreen.style.display = "none";
					showScreen("screen-login");
				},
				{ once: true }
			);
		}, 3000);
	} else {
		// Fallback caso a splash não exista
		showScreen("screen-login");
	}

	lucide.createIcons();

	initializeApp();

	setupEventListeners();

	loadNearbyLocations();

	loadUserStats();
});
