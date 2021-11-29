import axios from "axios"
import { useEffect, useState } from "preact/hooks"
import style from '../../routes/home/style.css';
import Divider from './../common/Divider';
import { Container, Row, Col } from 'react-grid-system';

const ConfigSection = () => {
    const [cronjob, setCronjob] = useState('')

    useEffect(() => {
        const call = async () => {
            const { data: { cronjob } } = await axios.get('cronjob')
            if (cronjob) {
                setCronjob(cronjob)
            }
        }
        call()
    }, [])

    const submit = (e) => {
        e.preventDefault()
        axios.post('cronjob', { cronjob })
    }
    return (
        <section>
            <h1>Config</h1>
            <Divider />
            <form onSubmit={submit}>
                <Container class={style.container}>
                    <Row>
                        <Col sm={2} class="align-end" >
                            <h4>CronJob</h4>
                        </Col>
                        <Col sm={4} class="align-center" >
                            <input aria-label="Cron job" value={cronjob} onChange={(e) => setCronjob(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} class="align-end" >
                            <button disabled={!cronjob}>UPDATE</button>
                        </Col>
                    </Row>
                </Container>
            </form>
        </section>
    );
}

export default ConfigSection;