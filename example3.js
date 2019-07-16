var map = L.map('map', {
    zoom: 5,
    zoomDelta: 0.5,
    zoomSnap: 0.5,    
    fullscreenControl: true,
    timeDimension: true,
    timeDimensionControl: true,
    center: [15.46,106.64],
});
//106.64,15.46

// https://ogcie.iblsoft.com/metocean/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities
//http://girs.vn:8081/geoserver15/test/wms?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities

var atlas_vietnamWMS = "http://dev.dothanhlong.org:8080/geoserver/atlas_vietnam/wms";
var testWMS = "https://ogcie.iblsoft.com/metocean/wms";

var baseLayer=L.tileLayer.wms(testWMS, {
    layers: 'foreground-lines',
    format: 'image/png',
    transparent: true,
    crs: L.CRS.EPSG4326
});
var vn_ub=L.tileLayer.wms(atlas_vietnamWMS, {
    layers: 'atlas_vietnam:1vn_ub',
    format: 'image/png',
    transparent: true,
    crs: L.CRS.EPSG4326
});
var vn_tinh_hsts=L.tileLayer.wms(atlas_vietnamWMS, {
    layers: 'atlas_vietnam:1vn_tinh_hsts',
    format: 'image/png',
    transparent: true,
    crs: L.CRS.EPSG4326
});
var vn_tinh=L.tileLayer.wms(atlas_vietnamWMS, {
    layers: 'atlas_vietnam:vn_tinh',
    format: 'image/png',
    transparent: true,
    crs: L.CRS.EPSG4326
});


var testLayer = L.tileLayer.wms(atlas_vietnamWMS, {
        layers: 'timeline_georeferencer',
    format: 'image/png',
    transparent: true,
	crs: L.CRS.EPSG4326,
    time: '0001-01-01T00:00:00'
    //opacity: 0.3,
    //attribution: 'hahahaha'
});


var proxy = 'proxy.php';
var testTimeLayer = L.timeDimension.layer.wms(testLayer, {
    proxy: proxy,
    updateTimeDimension: true,
});
testTimeLayer.addTo(map);

baseLayer.addTo(map);

var baseMaps = {
    "Lớp nền": baseLayer
};

var overlayMaps = {
    "Lãnh thổ Việt Nam": testTimeLayer,
    "Tỉnh thành":vn_tinh_hsts,
    "Ranh giớiTỉnh":vn_tinh,
    "Ủy ban":vn_ub
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

/*
var testLegend = L.control({
    position: 'topright'
});
testLegend.onAdd = function(map) {
    var src = testWMS + "?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetLegendGraphic&LAYER=timeline_georeferencer&style=test:bentre_wmst&FORMAT=image/png";
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML +=
        '<img src="' + src + '" alt="legend">';
    return div;
};
testLegend.addTo(map);
*/