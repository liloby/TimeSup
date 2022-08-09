import "./ProfileForm.css"

export default function ProfileForm() {
    return (
        <form className="ProfileForm" onSubmit="">
            <label>Display Name:
                <input type="text" name="displayName" />
            </label>
            <label>Age:
            </label>
                <input name="age" type="number" min="18" />
            <label>Sex:
            </label>
                <select name="sex">
                    <option value="Man">Man</option>
                    <option value="Woman">Woman</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Other">Other</option>
                </select>
                <label>Image(link):
                </label>
                    <textarea name="image" cols="30" rows="1"></textarea>
                <label>Bio:
                </label>
                    <textarea name="bio" cols="30" rows="3"></textarea>
                <label>Hobbies(Separate Each Hobbie with Space or Commas):
                </label>
                    <textarea name="hobbies" cols="30" rows="2"></textarea>
                <button>Submit</button>
        </form>
    )
}