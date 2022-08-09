require('dotenv').config();
require('./config/database');

const User = require('./models/user')
const Profile = require('./models/profile')

async function seed() {
    
    await User.deleteMany({})
    const user = await User.create([
        {
            name: 'Shawn',
            email: 'Shawn@gmail.com',
            password: '1234',
        },
        {
            name: 'Ariana',
            email: 'Ariana@gmail.com',
            password: '1234',
        }
    ])
    
    await Profile.deleteMany({});
    const profile = await Profile.create([
        // {   
        //     user: user[0]._id,
        //     displayName: "Shawn",
        //     age: 24, 
        //     sex: 'man', 
        //     image: 'https://images.thestar.com/gGBCEotw0RWDorWqE4sveqEZh9g=/1086x775/smart/filters:cb(1659019541822):format(webp)/https://www.thestar.com/content/dam/thestar/entertainment/music/2022/07/27/shawn-mendes-cancels-toronto-concerts-and-remainder-of-wonder-world-tour/ceaafe64e9b84aebb3014dbed7a8aa81_ceaafe64e9b84aebb3014dbed7a8aa8.jpg',
        //     bio: "I know I can treat you better than he can!",
        //     hobbies: 'Singing, Dancing, Food, Boba',
        // },
        {
            user: user[1]._id,
            displayName: "Ariana",
            age: 22, 
            sex: 'woman', 
            image: 'https://celebwale.com/wp-content/uploads/2020/10/Ariana-Grande-biography.jpg',
            bio: "I wanna be here like all the time",
            hobbies: 'Singing, Dancing, Cats, Dogs',
        },
    ])

    console.log("profile:", profile)
    console.log('Users:',user)
    process.exit()
};

seed()
