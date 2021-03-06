    google.load('visualization', '1', {packages: ['corechart', 'bar']});
    google.setOnLoadCallback(drawChart1);
    google.setOnLoadCallback(drawChart2);
    google.setOnLoadCallback(drawChart3);
    google.setOnLoadCallback(drawChart4);
    google.setOnLoadCallback(drawChart7);

    function drawChart3() {

      var data = google.visualization.arrayToDataTable([
          ['Actividad', 'Personas'],
          ['Bailoterapia', 1310],
          ['Festivales Artístico-Culturales', 1500],
          ['Música', 138],
          ['Talleres Multidisciplinario Vacacional', 1715],
          ['Teatro', 30],
          ['Carreras Atléticas', 3170],
          ['Campismo Escursiones', 2400],
          ['Danza Contemporánea', 75],
          ['Talleres de Formación y Liderazgo', 600],
          ['Danza Folklórica', 65],
          ['Fútbol', 1289],
          ['Artes Plásticas', 120],
          ['Atletismo', 78],
      ]);

      var options = { title: 'Actividades de la Casa de la Juventud' };

      var chart = new google.visualization.ColumnChart(document.getElementById('js-graph-3'));
      chart.draw(data, options);
    }

    function drawChart2() {

      var data = google.visualization.arrayToDataTable([
        ['Cantón', 'Población'],
        ['Huaca',     3777 +  3847],
        ['Bolívar',   7181 +  7166],
        ['Espejo',    6527 +  6837],
        ['Mira',      6059 +  6121],
        ['Montúfar',  15601 + 14910],
        ['Tulcán',    43914 + 42584],
      ]);

      var options = {
        title: "Población Carchi dividida por Cantones",
	link: 'https://datosabiertos.carchi.gob.ec/dataset/poblacioncarchi',
	source: 'https://datosabiertos.carchi.gob.ec/dataset/poblacioncarchi',
      };

      var chart = new google.visualization.PieChart(document.getElementById('js-graph-2'));
      chart.draw(data, options);
    }

    function drawChart1() {
          var data = google.visualization.arrayToDataTable([
            ['Cantón', 'Mujeres', 'Hombres'],
            ['Huaca',     3777,  3847],
            ['Bolívar',   7181,  7166],
            ['Espejo',    6527,  6837],
            ['Mira',      6059,  6121],
            ['Montúfar',  15601, 14910],
            ['Tulcán',    43914, 42584],
    
          ]);
    
          var options = {
            title: 'Población Carchi dividida por Cantones',
            chartArea: {width: '50%'},
            isStacked: true,
            hAxis: {
              title: 'Población Total',
              minValue: 0,
            },
            vAxis: {
              title: 'Cantón'
            }
          };

          var chart = new google.visualization.BarChart(document.getElementById('js-graph-1'));
          chart.draw(data, options);
        }


    function drawChart4() {

      var data = google.visualization.arrayToDataTable([
        ['Cantón', 'Altitud (msnm)', 'Precipitaciones medias interanuales (mm)'],
        ['Mira',	2500,	600],
        ['Bolívar',	2600,	780],
        ['El Ángel',	2990,	930],
        ['San Gabriel',	2830,	970],
        ['Huaca',	2920,	1500],
        ['Tulcán',	2950,	920],
      ]);

      var options = { title: 'Registro de precipitaciones medias interanuales' };

      var chart = new google.visualization.BarChart(document.getElementById('js-graph-4'));
      chart.draw(data, options);
    }


function drawChart5() {

      var data = google.visualization.arrayToDataTable([
        ['Ecosistema',  'Superficie (ha)'],
        ['Bosque del Páramo',     108.27],
        ['Bosque montano alto de Cord. Occ. de los Andes',     6962.23],
        ['Bosque montano alto del N. de la Cord. Or. de los Andes',  9507.1],
        ['Bosque montano bajo de Cordillera Occ. de los Andes',     24531.72],
        ['Bosque montano de Cord. Occ. de los Andes',  26676.94],
        ['Bosque montano del N. de la Cord. Or. de los Andes',       1554.31],
        ['Bosque piemontano de Cord. Occ. de los Andes',       59593.44],
        ['Bosque de tierras bajas del Chocó Ecuatorial',  5369.79],
        ['Bosque y Arbustal semideciduo del norte de los Valles',       7761.72],
        ['Arbustal siempre verde y Herbazal del Páramo',        2448.45],
        ['Rosetal caulescente y Herbazal del Páramo (frailejones)',     41311.72],
        ['Herbazal inundable del Páramo',       510.75],
        ['Herbazal y Arbustal siempre verde subnival del Páramo',       200.52],
        ['Otras Áreas', 1146.99],
        ['Intervención antrópica',      163254.46],
        ['Cuerpos de agua',     523.89],
        ['Sin información*',    25840.1]
      ]);

      var options = {
        title: 'Ecosistemas existentes en la Provincia del Carchi',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Superficie (ha)',
          minValue: 0
        },
        vAxis: {
          title: 'Ecosistemas'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('js-graph-5'));

      chart.draw(data, options);
    }

    function drawChart6() {

      var data = google.visualization.arrayToDataTable([
        ['Disposición',	'N° Viviendas'],
        ['Carro recolector',	31806],
        ['Tierra, quebrada, río, acequia, canal, quemar, enterrar',	10858],
        ['Otra forma',	236],
      ]);

      var options = { title: 'Recolección de basura en los hogares' };

      var chart = new google.visualization.PieChart(document.getElementById('js-graph-6'));
      chart.draw(data, options);
    }

    function drawChart7() {

      var data = google.visualization.arrayToDataTable([
        ['Disposición', 	'N'],
        ['Red alcantarilla',	31605	],
        ['Pozo ciego o séptico',	7824],
        ['Directo a suelo o agua',	3471],
      ]);

      var options = { title: 'Viviendas y disposición de excretas', is3D: true, };

      var chart = new google.visualization.PieChart(document.getElementById('js-graph-7'));
      chart.draw(data, options);
    }



