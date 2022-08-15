import { useState } from 'react'
import { updateProfile } from "../../utilities/profile-api"


export default function EditProfileForm({user, currentProfile}) {

    const [formData, setFormData] = useState({
        displayName: currentProfile.displayName,
        age: currentProfile.age,
        sex: currentProfile.sex,
        image: currentProfile.image,
        bio: currentProfile.bio,
        hobbies: currentProfile.hobbies,
})

    async function handleAddProfile(evt) {
        const updatedFormData = {...formData, user: user._id}
        const profile = await updateProfile(updatedFormData)
        console.log(profile)
    }

    function handleChange(evt) {
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    return (
        <>
        <form className="ProfileForm" onSubmit={handleAddProfile}>
        <h4>Edit Profile</h4>
        <div className="Image-Container">
        <img width="200px" src={formData.image} alt="" />
        </div>
        <hr />
            <label>Display Name: &nbsp;
            </label>
                <input value={formData.displayName} onChange={handleChange} type="text" name="displayName" required/>
            <label>Age: &nbsp;
            </label>
                <input value={formData.age} onChange={handleChange} name="age" type="number" min="18" required/>
            <label>Sex: &nbsp;
            </label>
                <select value={formData.sex} onChange={handleChange} name="sex" required>
                    <option >Select One</option>
                    <option value="Man">Man</option>
                    <option value="Woman">Woman</option>
                    <option value="Trans">Trans</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Other">Other</option>
                </select>
                <label>Image(link):
                </label>
                    <textarea value={formData.image} onChange={handleChange} name="image" cols="30" rows="2" required></textarea>
                <label>Bio:
                </label>
                    <textarea value={formData.bio} onChange={handleChange} name="bio" cols="30" rows="3" required></textarea>
                <label>Hobbies(Separate Each Hobby with a Space):
                </label>
                    <textarea maxLength="34" value={formData.hobbies} onChange={handleChange} name="hobbies" cols="30" rows="2" required></textarea>
                    <br></br>
                <button>Update</button>
        </form>
        </>
    )
}