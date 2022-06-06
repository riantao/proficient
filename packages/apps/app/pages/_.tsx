import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { NextPage } from "next";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;

    > * {
        margin: 1rem 0;
    }
`;

const _: NextPage = () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = e => 
        setValue(e.target.value);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:3333/v1/specials", JSON.parse(value));

            setValue("");
            setError("");
        } catch(e) {
            setError(e.message);
            setTimeout(() => setError(""), 5000);
        }
    };

    return (
        <Container>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Form onSubmit={handleSubmit}>
                <textarea value={value} onChange={handleChange} rows={30}/>
                <button type="submit">Submit</button>
            </Form>
        </Container>
    );
};

export default _;