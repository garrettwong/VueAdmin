let CommonDataService = {
    getChats() {
        return [{
                id: 1,
                from: 'John',
                userIconUrl: 'dist/img/user2-160x160.jpg',
                message: 'Hi Rich',
                time: '2:15AM'
            },
            {
                id: 2,
                from: 'Rich',
                userIconUrl: 'dist/img/user3-128x128.jpg',
                message: 'Hello there',
                time: '2:17AM'
            }
        ];
    },

    getTodos() {
        return [{
                id: 1,
                from: 'John',
                userIconUrl: 'dist/img/user2-160x160.jpg',
                message: 'Hi Rich',
                time: '2:15AM'
            },
            {
                id: 2,
                from: 'Rich',
                userIconUrl: 'dist/img/user3-128x128.jpg',
                message: 'Hello there',
                time: '2:17AM'
            }
        ];
    },

    getCards() {
        return [{
                id: 0,
                type: 'count',
                value: 150,
                title: 'New Orders',
                backgroundCss: 'bg-aqua',
                ionIcon: 'ion-bag',
                moreInfoUrl: '#/NewOrders'
            },
            {
                id: 1,
                type: 'percent',
                value: 53,
                title: 'Bounce Rate',
                backgroundCss: 'bg-green',
                ionIcon: 'ion-stats-bars',
                moreInfoUrl: '#/BounceRate'
            },
            {
                id: 2,
                type: 'count',
                value: 44,
                title: 'User Registrations',
                backgroundCss: 'bg-yellow',
                ionIcon: 'ion-person-add',
                moreInfoUrl: '#/UserRegistrations'
            },
            {
                id: 3,
                type: 'count',
                value: 66,
                title: 'Unique Visitors',
                backgroundCss: 'bg-red',
                ionIcon: 'ion-pie-graph',
                moreInfoUrl: '#/UniqueVisitors'
            }
        ];
    },

    getPrimaryUserObject() {
        return {
            id: 1,
            fullName: 'Garrett Wong',
            profession: 'Consultant',
            signupDate: 'June 10',
            imageUrl: 'dist/img/g.jpg',

            // <new-messages /> component: (refactor to VueX)
            messages: [{
                    imageUrl: 'dist/img/g.jpg',
                    from: 'Garrett Wong',
                    received: '4 days ago',
                    text: 'hi'
                },
                {
                    imageUrl: 'dist/img/user3-128x128.jpg',
                    from: 'Jared Wong',
                    received: '2 days ago',
                    text: 'hello'
                }
            ],


            // <notifications /> component: (refactor to VueX)
            notifications: [{
                    received: '4 days ago',
                    text: 'Test',
                    faIcon: 'fa-users',
                    color: 'text-info'
                },
                {
                    received: '2 days ago',
                    text: 'Added as a friend',
                    faIcon: 'fa-rocket',
                    color: 'text-purple'
                }
            ],

            // <tasks /> component: (refactor to VueX)
            tasks: [{
                    text: 'Take out the trash',
                    completionPercentage: '50%',
                    progressBarColor: 'progress-bar-aqua',
                },
                {
                    text: 'Laundry',
                    completionPercentage: '80%',
                    progressBarColor: 'progress-bar-success',
                },
                {
                    text: 'Garden',
                    completionPercentage: '10%',
                    progressBarColor: 'progress-bar-danger',
                },
                {
                    text: 'Water Heater, Shower Head',
                    completionPercentage: '10%',
                    progressBarColor: 'progress-bar-warning',
                },
            ]
        }
    }
};

export default CommonDataService;