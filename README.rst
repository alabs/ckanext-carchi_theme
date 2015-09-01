.. You should enable this project on travis-ci.org and coveralls.io to make
   these badges work. The necessary Travis and Coverage config files have been
   generated for you.

.. image:: https://travis-ci.org/apardo/ckanext-carchi_theme.svg?branch=master
    :target: https://travis-ci.org/apardo/ckanext-carchi_theme

.. image:: https://coveralls.io/repos/apardo/ckanext-carchi_theme/badge.png?branch=master
  :target: https://coveralls.io/r/apardo/ckanext-carchi_theme?branch=master

.. image:: https://pypip.in/download/ckanext-carchi_theme/badge.svg
    :target: https://pypi.python.org/pypi//ckanext-carchi_theme/
    :alt: Downloads

.. image:: https://pypip.in/version/ckanext-carchi_theme/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-carchi_theme/
    :alt: Latest Version

.. image:: https://pypip.in/py_versions/ckanext-carchi_theme/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-carchi_theme/
    :alt: Supported Python versions

.. image:: https://pypip.in/status/ckanext-carchi_theme/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-carchi_theme/
    :alt: Development Status

.. image:: https://pypip.in/license/ckanext-carchi_theme/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-carchi_theme/
    :alt: License

=============
ckanext-carchi_theme
=============

.. Put a description of your extension here:
   What does it do? What features does it have?
   Consider including some screenshots or embedding a video!


------------
Requirements
------------

For example, you might want to mention here which versions of CKAN this
extension works with.


------------
Installation
------------

.. Add any additional install steps to the list below.
   For example installing any non-Python dependencies or adding any required
   config settings.

To install ckanext-carchi_theme:

1. Activate your CKAN virtual environment, for example::

     . /usr/lib/ckan/default/bin/activate

2. Install the ckanext-carchi_theme Python package into your virtual environment::

     pip install --upgrade --no-deps --force-reinstall https://github.com/alabs/ckanext-carchi_theme/zipball/master 

3. Add ``carchi_theme`` to the ``ckan.plugins`` setting in your CKAN
   config file (by default the config file is located at
   ``/etc/ckan/default/production.ini``).

4. Restart CKAN. For example if you've deployed CKAN with Apache on Ubuntu::

     sudo service apache2 reload
