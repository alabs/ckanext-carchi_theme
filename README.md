# ckanext-carchi_theme

Tema de la Prefectura de Carchi para CKAN 2.3.

## Instalación de CKAN

Puedes ver como instalar CKAN con el script de instalación de Datos Abiertos en https://github.com/alabs/carchi_deploy 

Para desarrollo recomendamos configurar ese entorno en una maquina virtual (por ejemplo VirtualBox). 

## Instalación o actualización del tema

Para instalar o actualizar el tema de Carchi para CKAN: 

```
. /usr/lib/ckan/default/bin/activate

# si no lo tenemos descargado
cd /usr/local/src/ ; git clone https://github.com/alabs/ckanext-carchi_theme ; cd ckanext-carchi_theme

# si ya lo tenemos descargado 
cd /usr/local/src/ckanext-carchi_theme ; git pull origin master

python setup.py install --force

# Agregar carchi_theme a ckan.plugins en el fichero de configuración
# por defecto se encuentra en /etc/ckan/default/production.ini
sudo service apache2 reload
```

## Internacionalización

Para cambiar los textos de la plataforma hace falta modificarlos en el fichero de ckan.po para el idioma castellano, compilarlo de .po a .mo con las herramientas de gettext, transferirlo al servidor y reiniciar el servidor web: 

```
sudo apt-get install -y gettext # solo hace falta hacerlo la primera vez
vim i18n/es/ckan.po
msgfmt i18n/es/ckan.po -o i18n/es/ckan.mo
scp i18n/es/ckan.mo ingeniero@servidor: 
# lo dejamos en /usr/lib/ckan/default/src/ckan/ckan/i18n/es/LC_MESSAGES/ckan.mo
sudo service apache2 restart
```
