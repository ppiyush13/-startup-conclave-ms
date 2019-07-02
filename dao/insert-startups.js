const execute = require('./execute')

const startupList = [
    {
        name: 'techforce',
        poc: [
            {
                name: 'Vijay Navaluri',
                contact: '9876543210',
                linkedin: 'https://www.linkedin.com/in/navaluri/'
            }
        ]
    },
    {
        name: 'haptik',
        poc: [
            {
                name: 'Swapan Rajdev',
                contact: '9876543210',
                linkedin: 'https://www.linkedin.com/in/swapan-rajdev-64a0591a/'
            }
        ]
    },
    {
        name: 'cateina',
        poc: [
            {
                name: 'Sanachit Mehra',
                contact: '9876543210',
                linkedin: 'https://www.linkedin.com/in/sanachit-mehra-a8147418/'
            }
        ]
    },
    {
        name: 'smokescreen',
        poc: [
            {
                name: 'Raviraj Doshi',
                contact: '9876543210',
                linkedin: 'https://www.linkedin.com/in/raviraj-doshi-a6513615/'
            }
        ]
    },
    {
        name: 'vphrase',
        poc: [
            {
                name: 'Neerav Parekh',
                contact: '9920823666',
                linkedin: 'https://www.linkedin.com/in/neeravparekh/'
            }
        ]
    },
	{
		name: 'decimal',
		poc: [
			{
				name: 'Arvind Nahata',
                contact: '9731133899',
                linkedin: 'https://www.linkedin.com/in/arvind-nahata-a244062/'
			},
			{
				name: 'Sonu Kumar Singh',
                contact: '9004349038',
                linkedin: 'https://www.linkedin.com/in/sonu-kumar-singh-16313332/'
			}
		]
	},
	{
		name: 'commutec',
		poc: [
			{
				name: 'Randeep Singh',
                contact: '8805022389',
                linkedin: 'https://www.linkedin.com/in/randeep-lobana-838a2a14/'
			}
		]
	},
	{
		name: 'invacia',
		poc: [
			{
				name: 'Smriti Tomar',
                contact: '8822231530',
                linkedin: 'https://www.linkedin.com/in/smrititomar/'
			}
		]
	},
	{
		name: 'finPeace',
		poc: [
			{
				name: 'Nirmal Rewaria',
                contact: '9867009711',
                linkedin: 'https://www.linkedin.com/in/nirmal-k-rewaria-22828516/'
			}
		]
	},
	{
		name: 'rabbitAndTortoise',
		poc: [
			{
				name: 'Sambasivarao Pandala',
                contact: '9860681547',
                linkedin: 'https://www.linkedin.com/in/sambapandala/'
			},
			{
				name: 'Harshita	Darwatkar',
                contact: '9923810409',
                linkedin: 'https://www.linkedin.com/in/hdarwatkar/'
			}
		]
	},
	{
		name: 'peseva',
		poc: [
			{
				name: 'Sukhjinder Singh	Ghotra',
                contact: '9822616123',
                linkedin: 'https://www.linkedin.com/in/sukhjinder-singh-ghotra-774b19173/'
			}
		]
	},
	{
		name: 'khata',
		poc: [
			{
				name: 'Abhishank Gupta',
                contact: '7042156436',
                linkedin: 'https://www.linkedin.com/in/abhishank7/'
			}
		]
	},
	{
		name: 'propsAMC',
		poc: [
			{
				name: 'Anand Moorthy',
                contact: '9820339646',
                linkedin: 'https://www.linkedin.com/in/anand-moorthy-b838bb31/'
			}
		]
	},
	{
		name: 'monech',
		poc: [
			{
				name: 'Darsh Golechha',
                contact: '9676282861',
                linkedin: 'https://www.linkedin.com/in/darshgolechha/'
			}
		]
	},
	{
		name: 'perfios',
		poc: [
			{
				name: 'Animesh Patra',
                contact: '9874211470',
                linkedin: 'https://www.linkedin.com/in/animesh-patra/'
			}
		]
	},
	{
		name: 'simplicate',
		poc: [
			{
				name: 'Sameer Kulkarni',
                contact: '9920154612',
                linkedin: 'https://www.linkedin.com/in/sameer-kulkarni-6031b06/'
			}
		]
	},
	{
		name: 'metaMorphoSys',
		poc: [
			{
				name: 'Amit	Naik',
                contact: '9870851003',
                linkedin: 'https://www.linkedin.com/in/amitnaik75/'
			}
		]
	},
	{
		name: 'makeMyEMI',
		poc: [
			{
				name: 'Parth Sanghani',
                contact: '9004484134',
                linkedin: 'https://www.linkedin.com/in/parth-sanghani-0535675/'
			}
		]
	},
	{
		name: 'swipez',
		poc: [
			{
				name: 'Vivek Iyer',
                contact: '9323029857',
                linkedin: 'https://www.linkedin.com/in/iaviv/'
			}
		]
	},
	{
		name: 'Fdibooks',
		poc: [
			{
				name: 'Sameer Wagh',
                contact: '9082585002',
                linkedin: 'https://www.linkedin.com/in/samwagh1234/'
			}
		]
	},
	{
		name: 'billDesk',
		poc: [
			{
				name: 'Ashish Bhansali',
                contact: '9820103097',
                linkedin: ''
			}
		]
	},
	{
		name: 'loktra',
		poc: [
			{
				name: 'Arpit Gupta',
                contact: '9920134740',
                linkedin: 'https://www.linkedin.com/in/arpit-gupta-2908/'
			}
		]
	},
	{
		name: 'amplifyReach',
		poc: [
			{
				name: 'Aditya Kulkarni',
                contact: '9890285438',
                linkedin: ''
			},
			{
				name: 'Rahil Shaikh',
                contact: '9850881267',
                linkedin: ''
			}
		]
	},
	{
		name: 'eGyanam',
		poc: [
			{
				name: 'Rashmi Chandra',
                contact: '9545218596',
                linkedin: 'https://www.linkedin.com/in/rashmi-chandra/'
			}
		]
	},
	{
		name: 'eigenlytics',
		poc: [
			{
				name: 'Prashant Kumar',
                contact: '9004082457',
                linkedin: 'https://www.linkedin.com/in/prashantkpathak/'
			},
			{
				name: 'Abhishek	Kumar',
                contact: '7738038098',
                linkedin: ''
			}
		]
	},
	{
		name: 'jubi',
		poc: [
			{
				name: 'Ankita Singh',
                contact: '8879844110',
                linkedin: 'https://www.linkedin.com/in/ankita-singh-32b501104/'
			}
		]
	},
	{
		name: 'senseforth',
		poc: [
			{
				name: 'Abhishek	Gupta',
                contact: '9967671789',
                linkedin: 'https://www.linkedin.com/in/getabhi/'
			}
		]
	},
	{
		name: 'value3',
		poc: [
			{
				name: 'Abhinav Mishra',
                contact: '8369349010',
                linkedin: 'https://www.linkedin.com/in/abhinavpmishra/'
			}
		]
	},
	{
		name: 'valuefy',
		poc: [
			{
				name: 'Vivek Singal',
                contact: '9892822204',
                linkedin: 'https://www.linkedin.com/in/viveksingal/'
			}
		]
	},
	{
		name: 'whizible',
		poc: [
			{
				name: 'Ameya Paratkar',
                contact: '8554983313',
                linkedin: 'https://www.linkedin.com/in/ameyaparatkar/'
			}
		]
	},
	{
		name: 'nlpBots',
		poc: [
			{
				name: 'Animesh Samuel',
                contact: '9371052898',
                linkedin: 'https://www.linkedin.com/in/animesh-samuel-9021188/'
			}
		]
	},
	{
		name: 'digikonn',
		poc: [
			{
				name: 'Prashant	Shah',
                contact: '9427416844',
                linkedin: 'https://www.linkedin.com/in/prashantshah44/'
			}
		]
	},
	{
		name: 'vaultedge',
		poc: [
			{
				name: 'Murali Tirupati',
                contact: '9731466111',
                linkedin: 'https://www.linkedin.com/in/muralitirupati/'
			}
		]
	},
	{
		name: 'quotientica',
		poc: [
			{
				name: 'Akhilesh Tripathi',
                contact: '8250485867',
                linkedin: ''
			}
		]
	},
	{
		name: 'BCA Bizchain Asset Tech Pvt. Ltd.',
		poc: [
			{
				name: 'Sudin Baraokar',
                contact: '9850173007',
                linkedin: 'https://www.linkedin.com/in/sudinbaraokar/'
			},
			{
				name: 'Chetan Shah',
                contact: '9822052878',
                linkedin: 'https://www.linkedin.com/in/cshah/'
			}
		]
	},
	{
		name: 'mintZip',
		poc: [
			{
				name: 'Kaustubh Deshpande',
                contact: '9740090229',
                linkedin: 'https://www.linkedin.com/in/kaustubh-deshpande/'
			}
		]
	},
	{
		name: 'meraEMI',
		poc: [
			{
				name: 'Mohan Kutty',
                contact: '9820215487',
                linkedin: ''
			},
			{
				name: 'Anant Naik',
                contact: '9920109012',
                linkedin: ''
			}
		]
	},
	{
		name: 'kosh',
		poc: [
			{
				name: 'Sahil Bansal',
                contact: '8971622264',
                linkedin: 'https://www.linkedin.com/in/sahil-bansal-48b17b39/'
			}
		]
	},
	{
		name: 'credflow',
		poc: [
			{
				name: 'Kunal Aggarwal',
                contact: '7503043366',
                linkedin: 'https://www.linkedin.com/in/kunal-aggarwal/'
			}
		]
	},
	{
		name: 'digiledge',
		poc: [
			{
				name: 'Mahesh Govind',
                contact: '9591810218',
                linkedin: 'https://www.linkedin.com/in/mahesh-govind/'
			},
			{
				name: 'Chandni Mahesh',
                contact: '9481241473',
                linkedin: 'https://www.linkedin.com/in/chandni-mahesh/'
			}
		]
	},
	{
		name: 'aiOnTheFly',
		poc: [
			{
				name: 'Sudin Baraokar',
                contact: '9850173007',
                linkedin: 'https://www.linkedin.com/in/sudinbaraokar/'
			},
			{
				name: 'Chetan Shah',
                contact: '9822052878',
                linkedin: 'https://www.linkedin.com/in/cshah/'
			}
		]
	},
	{
		name: 'idos',
		poc: [
			{
				name: 'Sudhir Gadgil',
                contact: '9923051275',
                linkedin: 'https://www.linkedin.com/in/sudhir-gadgil-8584a2/'
			}
		]
	},
	{
		name: 'hexanika',
		poc: [
			{
				name: 'Arun Iyer',
                contact: '9881138144',
                linkedin: 'https://www.linkedin.com/in/arun-iyer-b11b6b7/'
			},
			{
				name: 'Vedvrat Shikarpur',
                contact: '9881238849',
                linkedin: 'https://www.linkedin.com/in/vedvratshikarpur/'
			}
		]
	},
	{
		name: 'krypC',
		poc: [
			{
				name: 'Yuvaraj Thanikachalam',
                contact: '9986699280',
                linkedin: 'https://www.linkedin.com/in/yuvarajthanikachalam/'
			}
		]
	},
	{
		name: 'World Micro Stock Exchange',
		poc: [
			{
				name: 'Pradeep Kumar Gohil',
                contact: '9833373441',
                linkedin: 'https://www.linkedin.com/in/worldmicrostockexchange/'
			}
		]
	},
	{
		name: 'apnaPay',
		poc: [
			{
				name: 'Kamal Vashisht',
                contact: '9971077496',
                linkedin: 'https://www.linkedin.com/in/kamal-vashisht-p10/'
			}
		]
	},
	{
		name: 'gtid',
		poc: [
			{
				name: 'Kamal Vashisht',
                contact: '9971077496',
                linkedin: ''
			}
		]
	},
	{
		name: 'safexPay',
		poc: [
			{
				name: 'Ravi Gupta',
                contact: '9833962431',
                linkedin: 'https://www.linkedin.com/in/ravi-gupta-01883719/'
			}
		]
	},
	{
		name: 'imaginate',
		poc: [
			{
				name: 'Nandhini	Bhokisham',
                contact: '9791069978',
                linkedin: 'https://www.linkedin.com/in/nandhini-bhokisham-838024b/'
			}
		]
	},
	{
		name: 'docBoyz',
		poc: [
			{
				name: 'Ashok Kumar',
                contact: '8470067555',
                linkedin: 'https://www.linkedin.com/in/ashok-kumar-00767b15/'
			}
		]
	},
	{
		name: 'Meraki Art',
		poc: [
			{
				name: 'Indrajit Raje',
                contact: '8693822000',
                linkedin: 'https://www.linkedin.com/in/indrajit-raje-967930133/'
			}
		]
	},
	{
		name: 'seniorSobati',
		poc: [
			{
				name: 'Abhijit Dehadrai',
                contact: '9960099367',
                linkedin: 'https://www.linkedin.com/in/abhijit-dehadrai-a3811816/'
			}
		]
	},
	{
		name: 'wikiDLT',
		poc: [
			{
				name: 'Nitin Gupta',
                contact: '9914919091',
                linkedin: 'https://www.linkedin.com/in/nitin-gupta-20a37147/'
			}
		]
	},
	{
		name: 'nasscom',
		poc: [
			{
				name: 'Inchara Jaganath',
                contact: '9880449401',
                linkedin: 'https://www.linkedin.com/in/inchara-jaganath-8644a228/'
			},
			{
				name: 'Kritika Murugesan',
                contact: '9980140269',
                linkedin: 'https://www.linkedin.com/in/kritika-m-419896/'
			},
			{
				name: 'Rohit Radhakrishnan',
                contact: '9016809083',
                linkedin: 'https://www.linkedin.com/in/rohitradhakrishnan1/'
			}
		]
	}
]

const createStartupUpsertQuery = ({name, type}) => `
    INSERT INTO STARTUP (NAME)
    VALUES (${s(name)})
    ON CONFLICT (NAME)
    DO UPDATE SET
    TYPE = ${s(type)}
`

const createStartupPOCUpsert = ({name: startupName, poc}) => {
    return poc.map(({name, contact, linkedin, available = false}) => `
        INSERT INTO POINT_OF_CONTACT (STARTUP_NAME, NAME, MOBILE, LINKEDIN, AVAILABLE, IN_TIME)
        VALUES (${s(startupName)}, ${s(name)}, ${s(contact)}, ${s(linkedin)}, ${available}, ${getAvailableTime(available)})
        ON CONFLICT (STARTUP_NAME, NAME)
        DO UPDATE SET
        NAME = ${s(name)},
        MOBILE = ${s(contact)},
        LINKEDIN = ${s(linkedin)},
        AVAILABLE = ${available},
        IN_TIME = ${getAvailableTime(available)};
    `).join(' ; ')
}

const s = str => str ? `'${str}'` : null
const getAvailableTime = available => available ? s(new Date().toISOString()) : null
const joinQueries = queries => queries.join(' ; ')

module.exports = async () => execute(pool => pool.query(`
    ${
        joinQueries(
            [createStartupUpsertQuery, createStartupPOCUpsert]
                .map(fn => 
                    joinQueries(startupList.map(fn)
                )
            )
        )
    }
`))