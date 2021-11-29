import axios from "axios";
import { useEffect, useState } from "preact/hooks";
import { Col, Container, Row } from 'react-grid-system';
import style from '../../routes/home/style.css';
import Divider from './../common/Divider';

const AlertzySection = () => {
    const [accountKey, setAccountKey] = useState('')

    useEffect(() => {
        (async () => {
            const { data: { accountKey } } = await axios.get('alertzy')
            setAccountKey(accountKey)
        })()
    }, [])

    const submit = (e) => {
        e.preventDefault();
        if (accountKey) {
            axios.post('alertzy', { accountKey })
        }
    }

    return (
        <section>
            <h1>Alertzy</h1>
            <Divider />
            <form onSubmit={submit}>
                <Container class={style.container}>
                    <Row>
                        <Col sm={2} class="align-end" >
                            <h4>Account Key</h4>
                        </Col>
                        <Col sm={4} class="align-center" >
                            <input aria-label="Account key" value={accountKey} onChange={(e) => setAccountKey(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} class="align-end" >
                            <button disabled={!accountKey}>UPDATE</button>
                        </Col>
                    </Row>
                </Container>
            </form>
        </section>
    );
}

export default AlertzySection;