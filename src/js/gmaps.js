function initMap() {
    const position = {lat: -29.297623762292012, lng: -51.50586697815089}; //-29.297623762292012, -51.50586697815089
    const map = new google.maps.Map(document.getElementById("g_maps"), {
        mapId: "8e0c91745eb85209",
        zoom: 14,
        center: position,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_BOTTOM
        }
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


    const contentAddress = document.createElement("div");
    contentAddress.classList.add("row");

    const contentAddr1 = document.createElement("div");
    contentAddr1.classList.add("col-md-6");
    contentAddr1.classList.add("col-sm-12");
    const address = document.createElement("a");
    address.href = 'https://goo.gl/maps/ZQYHoSjb4AyC12TP8';
    address.target = '_blank';
    address.textContent = "R. Valter Jobim, 523 - Sala 06";
    address.classList.add("map-info-address");
    contentAddr1.appendChild(address);
    contentAddress.appendChild(contentAddr1);
    const contentAddr2 = document.createElement("div");
    contentAddr2.classList.add("col-md-6");
    contentAddr2.classList.add("col-sm-12");
    const address2 = document.createElement("a");
    address2.href = 'https://goo.gl/maps/ZQYHoSjb4AyC12TP8';
    address2.target = '_blank';
    address2.textContent = "Centro - Carlos Barbosa - RS";
    address2.classList.add("map-info-address");
    contentAddr2.appendChild(address2);
    contentAddress.appendChild(contentAddr2);

    contentRigth.appendChild(contentAddress);

    const phone = document.createElement("a");
    phone.href = 'tel:54981630905';
    phone.target = '_blank';
    phone.textContent = "(54) 98163-0905";
    phone.ariaLabel = "Ligar para (54) 98163-0905";
    phone.classList.add("map-info-phone");
    contentRigth.appendChild(phone);

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