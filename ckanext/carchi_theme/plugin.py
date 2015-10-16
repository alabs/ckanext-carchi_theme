import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit

def all_groups(): 
    '''Return all groups'''
    # Get a list of all the site's groups from CKAN 
    groups = toolkit.get_action('group_list')(data_dict={'all_fields': True})
    return groups

def all_organizations(): 
    '''Return all organizations'''
    # Get a list of all the site's groups from CKAN 
    organizations = toolkit.get_action('organization_list')(data_dict={'all_fields': True})
    return organizations

def most_popular_groups():
    '''Return a sorted list of the groups with the most datasets.'''

    # Get a list of all the site's groups from CKAN, sorted by number of
    # datasets.
    groups = toolkit.get_action('group_list')(
        data_dict={'sort': 'package_count desc', 'all_fields': True})

    # Truncate the list to the 6 most popular groups only.
    groups = groups[:6]

    return groups

class Carchi_ThemePlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)

    def update_config(self, config_):
        toolkit.add_template_directory(config_, 'templates')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('i18n', 'carchi_theme')

    def get_helpers(self):
        '''Register the functions above as a template helper function.'''
        # Template helper function names should begin with the name of the
        # extension they belong to, to avoid clashing with functions from
        # other extensions.
        return {
            'carchi_theme_most_popular_groups': most_popular_groups,
            'carchi_theme_all_groups': all_groups,
            'carchi_theme_all_organizations': all_organizations,
        }


