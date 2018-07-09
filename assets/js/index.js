var app = new Vue({
    el: '#app',
    data: {
        slide: 1,
        translateContent: 0,
        hover: false,
        date: null,
        contents: {
            smalltittle: 'Legal Design Thinking',
            tittle: 'Meetup #3',
            topic: 'ENERGY TRANSITION',
            slides: [
                [
                    {
                        tittle4: [
                            'Participants: 16'
                        ],
                        content: [
                            [
                                'Developmental studies',
                                'researchers, teachers,',
                                'artists, philosopher,',
                                'reseachers, social',
                                'entrepreneurs, NGO',
                                'staff'
                            ]
                        ]
                    },
                    {
                        content: [
                            [
                                '<i>“Neighborhood cooperatives</i>',
                                '<i>versus healthcare and</i>',
                                '<i>energy cooperation: not</i>',
                                '<i>much combining goals,</i>',
                                '<i>learnings and</i>',
                                '<i>organizations but they can</i>',
                                '<i>learn and help each other</i>',
                                '<i>- at this moment very</i>',
                                '<i>often separate worlds in</i>',
                                '<i>the same neighbourhoods”</i>'
                            ],
                            [
                                '<i>- Jeroen Boon.</i>'
                            ]
                        ]
                    },
                    {
                        content: [
                            [
                                '<i>“Given urgency people</i>',
                                '<i>are extraordinary</i>',
                                '<i>good to get</i>',
                                '<i>cooperatives working</i>',
                                '<i>as it is our natural</i>',
                                '<i>way of cooperating.</i>',
                                '<i>City is and must be</i>',
                                '<i>the theater for human</i>',
                                '<i>possibilities. We</i>',
                                '<i>have to become again</i>',
                                '<i>our own housing</i>',
                                '<i>cooperation, energy</i>',
                                '<i>cooperation”</i>'
                            ],
                            [
                                '<i>- Rob Ruts.</i>'
                            ]
                        ]
                    },
                    {
                        content: [
                            [
                                '<i>- Nienke Maas &</i>',
                                '<i>Maurijn de Heus.</i>'
                            ]
                        ]
                    },
                    {
                        content: [
                            [
                                'This lab unites',
                                '<strong>innovators</strong> to',
                                'pinpoint what our',
                                '<strong>forefront of energy</strong>',
                                '<strong>innovation labs</strong>',
                                'should work on in',
                                'order to turn European',
                                'cities <strong>energy</strong>',
                                '<strong>neutral</strong>, if they take',
                                'up the social and',
                                'organizational',
                                'challenges <strong>parallel</strong>',
                                '<strong>to the tech</strong>.'
                            ]
                        ]
                    }
                ],
                [
                    {
                        tittle4: [
                            'Current situation'
                        ],
                        content: [
                            [
                                'European cities have',
                                'high ambitions to',
                                'become energy and/or',
                                'carbon neutral.'
                            ]
                        ]
                    },
                    {
                        content: [
                            [
                                '<i>“Humans can deliver energy every</i>',
                                '<i>day at every moment, so we are</i>',
                                '<i>our new, clean, non-carbon energy</i>',
                                '<i>source of the future.”</i>'
                            ]
                        ]
                    },
                    {
                        content: [
                            [
                                '<i>- Kris De Decker & Melle Smets.</i>'
                            ]
                        ]
                    },
                    {
                        content: [
                            [
                                '<strong>How do we</strong>',
                                '<strong>remain</strong>',
                                '<strong>comfortable</strong>',
                                '<strong>in our homes</strong>',
                                '<strong>without</strong>',
                                '<strong>investing</strong>',
                                '<strong>enormous</strong>',
                                '<strong>amounts of</strong>',
                                '<strong>money or</strong>',
                                '<strong>radically</strong>',
                                '<strong>changing our</strong>',
                                '<strong>lives?</strong>'
                            ]
                        ]
                    },
                    {
                        content: [
                            [
                                '<i>The focus</i>',
                                '<i>is often on</i>',
                                '<i>technology.</i>'
                            ]
                        ]
                    }
                ],
                [
                    {
                        tittle4: [
                            'Challenge #1'
                        ],
                        content: [
                            [
                                'Coop: Build a Energy',
                                'Cooperation for Tenants in',
                                'Escamp The Hague.'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Solution #1'
                        ],
                        content: [
                            [
                                '- New approach to',
                                'conversation with tenants',
                                'discussing the need for',
                                'change and the choices to',
                                'make together. ',
                                '- Cost effectiveness of',
                                'solutions is very',
                                'important for both',
                                'students and citizens.'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Challenge #2'
                        ],
                        content: [
                            [
                                'Energy Monks: Create a Perfect Space for',
                                'Energy Transition Collaboration.'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Solution #2'
                        ],
                        content: [
                            [
                                '- Give some of your energy',
                                'to charge your device. Do',
                                'this alone or with others to',
                                'save time and build up your',
                                'own energy along the way!',
                                '- Playground for kids to',
                                'experience energy and',
                                'discuss with parents about',
                                'energy-transition. Keep this',
                                'simple.'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Challenge #3'
                        ],
                        content: [
                            [
                                'FreeLabs: Perfect',
                                'Neighbourhood Labs Anywhere.'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Solution #3'
                        ],
                        content: [
                            [
                                '- Little store with one',
                                'cigarette, some candy,',
                                'pencil and cup of coffee.',
                                'Clean, safe and start with',
                                'children.',
                                '- People like to meet up for',
                                'discussions but not all want',
                                'the same environment.',
                                'Policymakers need to address',
                                'this in communication plan',
                                'for different options to',
                                'engage citizens.'
                            ]
                        ]
                    }
                ],
                [
                    {
                        tittle4: [
                            'Participants',
                            'feedback'
                        ],
                        content: [
                            [
                                '<i>“Was really</i>',
                                '<i>concrete and very</i>',
                                '<i>important to do.”</i>'
                            ],
                            [
                                '<i>“I do not like</i>',
                                '<i>workshops but</i>',
                                '<i>this was one was</i>',
                                '<i>fun.”</i>'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Remarks by',
                            'expert'
                        ],
                        content: [
                            [
                                '<i>“For the energy</i>',
                                '<i>transition focus on</i>',
                                '<i>the home-owners who</i>',
                                '<i>want to ignite</i>',
                                '<i>change in the use of</i>',
                                '<i>energy-resources</i>',
                                '<i>with co-owners.”</i>'
                            ],
                            [
                                '<i>“Mashups are</i>',
                                '<i>needed to</i>',
                                '<i>deliver new</i>',
                                '<i>approaches and</i>',
                                '<i>solutions by</i>',
                                '<i>existing and new</i>',
                                '<i>stakeholders.”</i>'
                            ]
                        ]
                    }                    
                ]
            ]
        }
    },
    methods: {
        returnToday: function () {
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var today = new Date();
            return today.getDate() + ' ' + months[today.getMonth()] + ' ' + today.getFullYear();
        },
        nextSlideDemo: function (value) {
            var def = document.querySelector('.wrapper__slide-1').clientWidth;
            return (value - 1) * -1 * def;
        },
        contentAnimation: function (element) {
            // clear all other slide visual
            var allEl = document.querySelectorAll('.contents > [class*="slide-"]');
            allEl.forEach(function (v) {
                var classArr = v.className.split(" ");
                var originalClass = classArr.filter(v => v.indexOf('slide-') != -1);
                v.className = originalClass[0];
            })

            // set visual for current slide
            var parent = this.$refs[`${element}`];
            var parentName = parent.nodeName + '.' + parent.className;
            var querrySeletorAl = parentName + ' .contents > [class*="slide-"]';
            var allElement = document.querySelectorAll(querrySeletorAl);
            allElement.forEach(function (a) {
                a.className += ' visual';
            })
            // change tittle if slide 4
            if (this.slide == 4) {
                this.contents.tittle = 'Coming up...';
                // this.contents.topic = '13 JUNE 2018';
            } else {
                this.contents.tittle = 'Meetup #3';
                // this.contents.topic = 'ENERGY TRANSITION';
            }
        },
        arrowNavigation: function () {
            if (this.slide == 4) {
                this.slide = 1;
            } else {
                this.slideForward();
            }
            this.contentAnimation('slide' + this.slide);
        },
        keyboardNavigation: function (e) {
            var keyCode = e.keyCode;
            if (keyCode == 37 && this.slide > 1) {
                this.slide--;
                this.contentAnimation('slide' + this.slide);
            } else if (keyCode == 39 && this.slide < 4) {
                this.slide++;
                this.contentAnimation('slide' + this.slide);
            }
        }
    },
    created() {
    },
    mounted() {
        this.$nextTick(function () {
            window.addEventListener('keydown', this.keyboardNavigation);
        })
    },
    ready() {
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.keyboardNavigation);
    }
})