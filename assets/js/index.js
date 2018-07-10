var app = new Vue({
    el: '#app',
    data: {
        slide: 1,
        translateContent: 0,
        hover: false,
        date: null,
        contents: {
            smalltittle: '',
            tittle: 'Border sessions lab',
            topic: 'CO-OPERATIVES FOR LOCAL ECONOMIES',
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
                    }                    
                ],
                [
                    {
                        tittle4: [
                            'Current situation'
                        ],
                        content: [
                            [
                                'Citizens are dealing',
                                'with big challenges.'
                            ],
                            [
                                'Co-operatives are',
                                'part of the network',
                                'of the new city.'
                            ],
                            [
                                'Role of citizens is changing:',
                                'taking over the responsibility',
                                'of the government.'
                            ]
                        ]
                    },
                    {
                        content: [
                            [
                                'Geographical area',
                                'was very important',
                                'for starting.'
                            ],
                            [
                                'People can be poor',
                                'financially but not in',
                                'their craftmanship.'
                            ],
                            [
                                'Afrikander cooperation:',
                                'Start with the',
                                'market, more than',
                                '300 interactions on',
                                'the market based on',
                                'collaboration of',
                                'citizens and',
                                'artists.'
                            ],
                            [
                                'Afrikander cooperation:',
                                '2008: more than',
                                '300 interventions.'
                            ]
                        ]
                    }
                ],
                [
                    {
                        tittle4: [
                            'Challenges'
                        ],
                        content: [
                            [
                                'How can co-operatives in',
                                'neighborhoods enhance local value?'
                            ],
                            [
                                'How can citizens be a economical',
                                'part of their own energy',
                                'transition, future healthcare,',
                                'security or food production?'
                            ],
                            [
                                'Added value of the co-operatives is',
                                'the healthier context to address',
                                'urban challenges. It does away with',
                                '‘the poor’,‘the sick’,‘the old’,‘the',
                                'radicalizing young’,‘the lonely’ as',
                                'target groups to be served as such.',
                                'Future challenges can only be met',
                                'through co-operations in which',
                                'people show their strengths.'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Solutions'
                        ],
                        content: [
                            [
                                '‘From Waste to talent’:',
                                'Cooperative for Plastic',
                                'Recycling with ‘departments’',
                                'of Beach, Parks, Urban and',
                                'Other Resources. All',
                                'departments have collecting,',
                                'separation and recycling',
                                'function. Part of cooperatives',
                                'are stakeholders, e.g.',
                                'tourists, municipality, local',
                                'citizens, entrepreneurs,',
                                'health organisation.'
                            ],
                            [
                                'Power Bank cooperative for',
                                'creating work by servicing',
                                'the neighbourhood via health',
                                'organisation, housing',
                                'corporation, education and',
                                'entrepreneurial',
                                'organisation. Give people',
                                'trust so they can develop',
                                'with help from others.'
                            ],
                            [
                                'Local development',
                                'cooperation for creating an',
                                'ecosystem in neighbourhoods',
                                'with own coins,',
                                'learning/growing facility',
                                'for people, strong bond',
                                'between residents and',
                                'entrepreneurs, own health',
                                'organisation and housing',
                                'corporation.'
                            ]
                        ]
                    },                    
                ],
                [
                    {
                        tittle4: [
                            'Participants',
                            'Remarks'
                        ],
                        content: [
                            [
                                '<i>“Citizens must be seen</i>',
                                '<i>as someone with</i>',
                                '<i>opportunities instead of</i>',
                                '<i>someone with problems.”</i>'
                            ],
                            [
                                '<i>“Building a cooperation with</i>',
                                '<i>focus that is bigger than</i>',
                                '<i>only production facility but</i>',
                                '<i>also with learning, meeting</i>',
                                '<i>and sharing facilities.”</i>'
                            ]
                        ]
                    },
                    {
                        tittle4: [
                            'Remarks by',
                            'experts'
                        ],
                        content: [
                            [
                                '<i>“We need to look at</i>',
                                '<i>people as them being</i>',
                                '<i>more than an</i>',
                                '<i>employee by</i>',
                                '<i>emphasizing other</i>',
                                '<i>talent. We create</i>',
                                '<i>self confidence,</i>',
                                '<i>involvement and</i>',
                                '<i>inclusion”</i>'
                            ],
                            [
                                '<i>- Annet van Otterloo.</i>'
                            ],
                            [
                                '<i>“We need the</i>',
                                '<i>acceptance that</i>',
                                '<i>the organisation</i>',
                                '<i>of a cooperation</i>',
                                '<i>takes time.”</i>'
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
                this.contents.tittle = 'Next Steps...';
                // this.contents.topic = '13 JUNE 2018';
            } else {
                this.contents.tittle = 'Border sessions lab';
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