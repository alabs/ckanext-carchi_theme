# ckanext-carchi_theme

Tema de la Prefectura de Carchi para CKAN 2.3.

## Instalación de CKAN

Puedes ver como instalar CKAN con el script de instalación de Datos Abiertos en https://github.com/alabs/carchi_deploy 

Para desarrollo recomendamos configurar ese entorno en una maquina virtual (por ejemplo VirtualBox). 

## Instalación o actualización del tema

Para instalar o actualizar el tema de Carchi para CKAN: 

```
. /usr/lib/ckan/default/bin/activate
pip install --upgrade --no-deps --force-reinstall https://github.com/alabs/ckanext-carchi_theme/zipball/master 
# Agregar carchi_theme a ckan.plugins en el fichero de configuración
# por defecto se encuentra en /etc/ckan/default/production.ini
sudo service apache2 reload
```
