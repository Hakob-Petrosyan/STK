$(function () {
    var map,
        markers = [
            {latLng: [67.15, 74.40], name: 'Ямало-Ненецкий автономный округ'},
            {latLng: [61.032, 73, 69.214, 85], name: 'Ханты-Максийский автономный округ'},
            {latLng: [58.42, 61.20], name: 'Свердловская область'},
            {latLng: [59.14, 56.08], name: 'Пермский край'},
            {latLng: [57.50, 69.00], name: 'Тюменская область'},
            {latLng: [64.17, 54.28], name: 'Республика коми'},
            {latLng: [54.28, 56.16], name: 'Республика Башкортостан'},
            {latLng: [68.50, 54.50], name: 'Ненецкий автономный округ'},
            {latLng: [55.37, 39, 37.44, 20], name: 'Московская область'},
            {latLng: [56.13, 73.16], name: 'Омская область'},
            {latLng: [58.45, 82.08], name: 'Томская область'},
            {latLng: [66.24, 129.10], name: 'Республика Якутия'},
            {latLng: [53.33, 127.50], name: 'Амурская область'},
            {latLng: [53.48, 109.20], name: 'Бурятия'},
            {latLng: [54, 118], name: 'Забайкальский край'},
            {latLng: [63.30, 43.00], name: 'Архангельская область'},
            {latLng: [63.49, 33.00], name: 'Карелия'},
            {latLng: [47.14, 47.14], name: 'Астраханская область'},

        ],
        cityAreaData = []

    map = new jvm.Map({
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        zoomButtons: false,
        container: $('#map'),
        map: 'ru_merc',
        regionsSelectable: true,
        markersSelectable: true,
        markers: markers,
        markerStyle: {
            initial: {
                image: '/map/mapMarker.svg',
                //fill: '#f0c419',
                //stroke: '#505050',
                //"fill-opacity": 1,
                //"stroke-width": 1,
                //"stroke-opacity": 1,
                r: 1
            },
            selectedHover: {}
        },

        regionStyle: {

            initial: {
                fill: '#F4F4F4',
                stroke: '#676C7A',
                "stroke-width": 0.5,
                "stroke-opacity": 1,
            },

            selected: {
                fill: '#676C7A',
                border: 1,
                color: 'red',
            },

            hover: {
                fill: '#676C7A',
                border: 1,
                color: 'red',
            }

        },
        series: {
            markers: [{
                attribute: 'r',
                scale: [5, 15],
                values: cityAreaData
            }]
        },
        onRegionSelected: function () {
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-regions',
                    JSON.stringify(map.getSelectedRegions())
                );
            }
        },
        onMarkerSelected: function () {
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-markers',
                    JSON.stringify(map.getSelectedMarkers())
                );
            }
        }
    });
    map.setSelectedRegions(JSON.parse(window.localStorage.getItem('jvectormap-selected-regions') || '[]'));
    map.setSelectedMarkers(JSON.parse(window.localStorage.getItem('jvectormap-selected-markers') || '[]'));
    document.addEventListener('mouseover', e => {
        const regionLabelOver = e.target.closest('[data-region]');
        if (regionLabelOver) {
            const address = regionLabelOver.dataset.region;
            const map = $('#map').vectorMap('get', 'mapObject');
            map.regions[address].element.setHovered(true);
        }
    });
    document.addEventListener('mouseout', e => {
        const regionLabelOver = e.target.closest('[data-region]');
        if (regionLabelOver) {
            const address = regionLabelOver.dataset.region;
            const map = $('#map').vectorMap('get', 'mapObject');
            map.regions[address].element.setHovered(false);
        }
    });




    /*$('#section_6_block_col1_content_content span', wrap)
        .mouseover(function(e){
            const address = $(this).data('address');
            const map = $(window.vmap).vectorMap('get', 'mapObject');
            map.regions[address].element.setHovered(true);
        })
        .mouseleave(function(e) {
            const address = $(this).data('address');
            const map = $(window.vmap).vectorMap('get', 'mapObject');
            map.regions[address].element.setHovered(false);
        });*/

});