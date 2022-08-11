import "./PersonCard.css"
import { useState, useEffect } from 'react'
import { createLikes } from "../../utilities/profile-api"

export default function PersonCard({ person, currentProfile}) {
    const [like, setLike] = useState(null)
    const [checkLike, setCheckLike] = useState(null)
    const [likeList, setLikeList] = useState(currentProfile.likes)

    console.log("ALL LIKES", likeList)

    let hobbies = person.hobbies.replaceAll(",", "")
    let hobbiesArr = hobbies.split(" ")

    useEffect(function() {
        async function checkLike() {
            const checkLike = await likeList.some(like => like.name.includes(person.displayName))
            setCheckLike(checkLike)
        }
        checkLike()
    })
    
    async function handleLike(evt) {
        evt.preventDefault(evt);
        if (!currentProfile.likes.some(like => like.name.includes(person.displayName)) && currentProfile.displayName !== person.displayName) {
            console.log(person.displayName)
            const likedPerson = {...like, name: person.displayName}
            const profileLiked = await createLikes(likedPerson)
            setLikeList([...likeList, likedPerson])
            console.log(likeList)
            console.log("profileLiked", profileLiked)
        } else {
            console.log(`${person.displayName} is already in your liked list`)
        }
    }

    function handleMatch() {

    }

    return (
        <div className="PersonCard" style={{ backgroundImage: `url(${person.image})`}}>
            <div className="Heart-wrapper">
            <form onSubmit={handleLike}>
            <button className={checkLike ?
             "Liked-Heart-btn" 
             :
             currentProfile.displayName === person.displayName ?
             "Opague-Heart"
             : 
             "Heart-btn" }>
            </button>
            </form>
            </div>
            <div className="PersonCard-wrapper">
            <h3 className={currentProfile.displayName === person.displayName ? "you" : "them" }>{person.displayName}</h3>
            <div className="Hobby">
            {hobbiesArr.map((hobby) => (
                <p>{hobby}</p>
                ))}
            </div>
            <p>Age: {person.age}</p>
            <p>Bio: {person.bio}</p>
            </div>
        </div>
    )
}