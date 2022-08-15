import { useParams } from "react-router-dom"

export default function MatchDetailPage() {

    const { matchId } = useParams()

    return (
        <div>
            <h1>Hi</h1>
            <h2>Match: {matchId}</h2>
        </div>
    )
}