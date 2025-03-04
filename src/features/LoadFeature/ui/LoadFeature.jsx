import {LoadButton} from "../../LoadButton";
import {ErrorMessage} from "@/entities/ErrorMessage";
import {useState} from "react";

export const LoadFeature = ({setMatches, isLoading, setIsLoading}) => {
    const [error, setError] = useState();
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: '2.5rem'
            }}
        >
            <ErrorMessage error={error}/>
            <LoadButton
                setMatches={setMatches}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                setError={setError}
            />
        </div>
    );
};