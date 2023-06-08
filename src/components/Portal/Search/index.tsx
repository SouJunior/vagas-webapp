import {
    SearchButton,
    Input,
    Form,
    Container,
    Box,
    Options,
    Border,
} from "./styles"
import { useEffect, useState } from "react"
import { useApi } from "../../../hooks/useApi"
import { Timeout } from "react-number-format/types/types";
import { useNavigate } from "react-router-dom"

const Index = () => {
    const navigate = useNavigate();
    const api = useApi();

    interface Jobs {
        id: string;
        title: string;
    }

    const [timer, setTimer] = useState<Timeout>();
    const [field, setField] = useState<string>("");
    const [suggestions, setSuggestions] = useState<Jobs[]>([]);


    const handleSearchBox = (e: any) => {
        const search = e.target.value;
        setField(search);
        
        if (timer) {
            clearTimeout(timer);
        }

        if (!search || search.length < 3) {
            setSuggestions([]);
            return;
        }

        setTimer(setTimeout(() => {
            api.searchJobs(search)
                .then((response) => {
                    setSuggestions(response.data);
                })
                .catch(() => setSuggestions([]))
        }, 500));
    }

    useEffect(() => {
        const handleOutsideClick = (e: any) => {
            if (document && document.contains(e.target)) {
                setSuggestions([]);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        }
    }, [])


    return (
        <>
            <Form>
                <Container>
                    <Input value={field} list="jobs" type="text"
                        onChange={handleSearchBox} placeholder="Digite seu cargo" />
                    {suggestions.length > 0 &&
                        <>
                            <Box>
                                {suggestions && suggestions.map((suggestion) => (
                                    <Options>
                                        <Border />
                                        <div 
                                            onClick={() => { setField(suggestion.title); setSuggestions([]) }}
                                            key={suggestion.id}
                                        >
                                            {suggestion.title}
                                        </div>
                                    </Options>
                                ))}
                                <Container>
                                    <Border />
                                </Container>
                            </Box>
                        </>
                    }
                </Container>
                <SearchButton onClick={() => navigate('/feedvagas')}>
                    Buscar vagas
                </SearchButton>
            </Form>
        </>
    )
}

export default Index