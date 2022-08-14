require('dotenv').config();
require('./config/database');

const User = require('./models/user')
const Profile = require('./models/profile')
const Match = require('./models/match')

async function seed() {
    
    await User.deleteMany({})
    const user = await User.create([
        {
            name: 'Shawn',
            email: 'Shawn@gmail.com',
            password: '1234',
            profileCreated: true
        },
        {
            name: 'Ariana',
            email: 'Ariana@gmail.com',
            password: '1234',
            profileCreated: true
        },
        {
            name: 'Simu',
            email: 'Simu@gmail.com',
            password: '1234',
            profileCreated: true
        },
        {
            name: 'Lisa',
            email: 'Lisa@gmail.com',
            password: '1234',
            profileCreated: true
        },
        {
            name: 'Adele',
            email: 'Adele@gmail.com',
            password: '1234',
            profileCreated: true
        },
        {
            name: 'Fina',
            email: 'Fina@gmail.com',
            password: '1234',
            profileCreated: true
        },
        {
            name: 'Taylor',
            email: 'Taylor@gmail.com',
            password: '1234',
            profileCreated: true
        },
        {
            name: 'Sam',
            email: 'Sam@gmail.com',
            password: '1234',
            profileCreated: true
        },
    ])
    
    await Profile.deleteMany({});
    const profile = await Profile.create([
        {   
            user: user[0]._id,
            displayName: "Shawn",
            age: 24, 
            sex: 'Man', 
            image: 'https://pyxis.nymag.com/v1/imgs/687/131/c0cabb1a45ce401e93716ce06d9269c5d3-shawn-mendes-6.2x.w512.jpg',
            bio: "I know I can treat you better than he can!",
            hobbies: 'Tennis, Tiktok, Dogs',
        },
        {
            user: user[1]._id,
            displayName: "Ariana",
            age: 22, 
            sex: 'Woman', 
            image: 'https://media.vogue.co.uk/photos/5d545e3c4ef1870008a3ca77/2:3/w_2560%2Cc_limit/original',
            bio: "I wanna be here like all the time",
            hobbies: 'Singing, Dancing, Cats, Dogs',
        },
        {
            user: user[2]._id,
            displayName: "Simu",
            age: 30, 
            sex: 'Man', 
            image: 'https://i.mdel.net/i/db/2021/11/1600805/1600805-500w.jpg',
            bio: "Lets Grab a Boba!",
            hobbies: 'Netflix, Acting, Hotpot',
        },
        {
            user: user[3]._id,
            displayName: "Lisa",
            age: 25, 
            sex: 'Woman', 
            image: 'https://img.wattpad.com/db48b38da0c2867d484041745ac306b564b24ab9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f54424659796b6c49367778556a413d3d2d323936342e313539363631656665666335386635323231303135333432383831392e6a7067?s=fit&w=720&h=720',
            bio: "Lets go ice skate!",
            hobbies: 'Skate, Movies, Birds',
        },
        {
            user: user[4]._id,
            displayName: "Adele",
            age: 27, 
            sex: 'Woman', 
            image: 'https://image.tmdb.org/t/p/original/3eARarxsWedHczppAPi6MRZ3qOA.jpg',
            bio: "Hello, its me",
            hobbies: 'Cats, Karaoke, Piano',
        },
        {
            user: user[5]._id,
            displayName: "Fina",
            age: 29, 
            sex: 'Woman', 
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Awkwafina_%28cropped%29_2.jpg',
            bio: "Lets go hangout!",
            hobbies: 'Movies, Spa, Food',
        },
        {
            user: user[6]._id,
            displayName: "Taylor",
            age: 32, 
            sex: 'Woman', 
            image: 'https://m.media-amazon.com/images/M/MV5BMjA5ODI0NzIzNV5BMl5BanBnXkFtZTcwMzM0NjI2Nw@@._V1_.jpg',
            bio: "I knew you were trouble when you walked in",
            hobbies: 'Bake, Writer, Cook, Singer',
        },
        {
            user: user[7]._id,
            displayName: "Sam",
            age: 35, 
            sex: 'Non-binary', 
            image: 'https://iscale.iheart.com/v3/surl/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL292ZXJyaWRlLzQyMzc2Mi0zLmpwZw==?sn=eGtleWJhc2UyMDIxMTExMDph9d0b1wExvE5WiCXvbxf2ni5QwdILqJpLUvq7Z6HQUw%3D%3D&surrogate=1cOXl179JY-syhxYSCX6Q1a_Mcu6UO8d-F4oJzpZf1hcUbJr4aIhxtIOF0X7jx4DdRUHutC-iuklAbEetl8QIMlft5P25a6CSqih4bfyJs-CJhPbRdv8Ip1-jZTErZpjWiDZ0nHjPzecR4uhJurGNh4eTqy6EEFRjwG97yO7xIPo2NNTLPOZG4u1StNdF1xg0zAmoXA_',
            bio: "Lets do carpool karaoke!",
            hobbies: 'Sing, Dance, Bar',
        },
    ])

    await Match.deleteMany({});

    console.log("profile:", profile)
    console.log('Users:',user)
    process.exit()
};

seed()
