import {useState} from "react";
import {MatchesList} from "@/entities/MatchesList";
import {Header} from "@/widgets/Header";
import {Card} from "@/shared/Card";

function App() {
    const [matches, setMatches] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const skeleton = <div style={{
        display: "flex", gap: '.75rem', flexDirection: "column"
    }}>{
        Array.from({length: 7}, (_, i) => (
            <Card key={Date.now()} variant={'v' + ((i % 3) + 1)}/>
        ))
    }</div>

  return (
    <>

        <Header
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            setMatches={setMatches}
        />

        {isLoading ? skeleton : <MatchesList matches={matches}/>}

    </>
  )
}

export default App
