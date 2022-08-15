import './PopupCard.css'

export default function PopupCard({ setShowPopup, showPopup }) {


    function handleDismiss() {
        setShowPopup(false)
    }

    return (
        <div className={showPopup? "Popup" : "HidePopup"}>
            <h1>IT'S A MATCH!</h1>
            <button onClick={handleDismiss}>AWESOME!</button>
        </div>
    )
}