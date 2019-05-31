import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [

    
    {
        id       : 'general',
        title    : 'Allgemein',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                type     : 'item',
                icon     : 'dashboard',
                url      : '/dashboard',
            },

            {
                id       : 'projects',
                title    : 'Projekte',
                type     : 'item',
                icon     : 'insert_drive_file',
                url      : '/projects',
                badge    : {
                    title: '2',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    },

    {
        id       : 'tasks',
        title    : 'Aufgaben',
        type     : 'group',
        children : [
            {
                id       : 'properties',
                title    : 'Properties',
                type     : 'item',
                icon     : 'view_list',
                url      : '/properties',
                
            },


            {
                id       : 'tasks',
                title    : 'Aufgaben',
                type     : 'collapsable',
                icon     : 'assignment',
                hidden : false,
                url      : '/tasks',
                children : [
                    {
                        id: 'addTask',
                        title: 'Neue Aufgabe',
                        type: 'item',
                        icon : 'add',
                    url: '/task/add', 
                    }
                ]
            },

            {
                id       : 'templates',
                title    : 'Vorlagen',
                type     : 'item',
                icon     : 'description',
                url      : '/templates',
            }
        ]
    }
];
