function initMap() {
    const position = {lat: -29.297623762292012, lng: -51.50586697815089}; //-29.297623762292012, -51.50586697815089
    const map = new google.maps.Map(document.getElementById("g_maps"), {
        mapId: "8e0c91745eb85209",
        zoom: 14,
        center: position,
        disableDefaultUI: true,
        zoomControl: true
    });

    const markerIconSrc = "https://emagrecentrocarlosbarbosa.com.br/public/images/gmaps/icon/marker.webp";
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: position,
        icon: {
            size: new google.maps.Size(220, 220),
            scaledSize: new google.maps.Size(35, 45),
            origin: new google.maps.Point(0, 0),
            url: markerIconSrc,
            anchor: new google.maps.Point(15, 50)
        },
        map,
    });

    const infowindow = new google.maps.InfoWindow({
        pixelOffset: new google.maps.Size(-93,0)
    });

    google.maps.event.addListener(marker, "click", () => {
        openWindowInfo(infowindow, map, marker);
    });
    openWindowInfo(infowindow, map, marker);
}

window.initMap = initMap;

function openWindowInfo(infowindow, map, marker) {
    const content = document.createElement("div");

    const contentRigth = document.createElement("div");
    contentRigth.classList.add("map-info");
    const title = document.createElement("h2");
    title.textContent = 'Emagrecentro - Carlos Barbosa';
    title.classList.add("map-info-title");
    contentRigth.appendChild(title);
    const description = document.createElement("h3");
    description.textContent = 'Centro Especializado em Emagrecimento, Saúde e Estética';
    description.classList.add("map-info-description");
    contentRigth.appendChild(description);
    const address = document.createElement("a");
    address.href = 'https://goo.gl/maps/ZQYHoSjb4AyC12TP8';
    address.target = '_blank';
    address.textContent = 'R. Valter Jobim, 523 - Sala 06 - Centro, Carlos Barbosa - RS';
    address.classList.add("map-info-address");
    contentRigth.appendChild(address);

    content.appendChild(contentRigth);

    const inforWindowImgSrc = "https://emagrecentrocarlosbarbosa.com.br/public/images/gmaps/info/emagrecentro-info.webp";
    const contentLeft = document.createElement("figure");
    contentLeft.classList.add('map-info-img');
    const img = document.createElement("img");
    img.src = inforWindowImgSrc;
    contentLeft.appendChild(img);
    content.appendChild(contentLeft);

    infowindow.setContent(content);
    infowindow.open(map, marker);
}