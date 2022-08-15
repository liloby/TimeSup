import "./ExpirationDays.css"

export default function ExpirationDays({expiration}) {

    console.log(expiration, "EXPIRATION")
    return (
        <>
        <div className={
            expiration <= 1 ?
            "oneDay"
            :
            expiration <= 2 ?
            "twoDays"
            :
            expiration <= 3 ?
            "threeDays"
            :
            expiration <= 4 ?
            "fourDays"
            :
            expiration <= 5 ?
            "fiveDays"
            :
            expiration <= 6 ?
            "sixDays"
            :
            "sevenDays"
        }
        >

        </div>
        </>
    )
}