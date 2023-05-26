import {
    SearchButton,
    Input,
    Form,
    Container,
    Box,
    Options,
    Border,
} from "./styles"
import { useState } from "react"
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

    const [data, setData] = useState<Jobs[]>([]);
    const [timer, setTimer] = useState<Timeout>();
    const [field, setField] = useState<string>("");

    const handleSearchBox = async (e: any) => {
        setField(e.target.value);

        if (!field || field.length < 2) {
            console.log("não pesquisa")
            setData([]);
            clearTimeout(timer);
            return;
        }

        if (timer) {
            clearTimeout(timer);
        }

        setTimer(setTimeout(() => api.searchJobs(field)
            .then((response) => setData(response.data))
            .catch(() => setData([]))
            , 500));
    }

    return (
        <>
            <Form>
                <Container>
                    <Input value={field} list="jobs" type="text" onChange={handleSearchBox} placeholder="Digite seu cargo" />
                    { <Box>
                        <Options>
                            {data.map((item) => (
                                <>
                                    <Border />
                                    <li onClick={() => setField(item.title)} key={item.id}>{item.title}</li>
                                </>))}
                            <Border />
                        </Options>
                    </Box>}
                </Container>
                <SearchButton onClick={() => navigate('/feedvagas')}>
                    Buscar vagas
                </SearchButton>
            </Form>
        </>
    )
}

export default Index