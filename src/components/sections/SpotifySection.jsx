import axios from "axios"
import { useEffect, useState } from "preact/hooks"
import style from '../../routes/home/style.css';
import Divider from './../common/Divider';
import { Container, Row, Col } from 'react-grid-system';
import spotifyAuthUrl from './../../util/spotifyAuthUrl';
import Indicator from "../common/Indicator";

const SpotifySection = ({ code }) => {
    const [clientId, setClientId] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [redirectUrl, setRedirectUrl] = useState('')

    const [logged, setLogged] = useState(false)

    useEffect(() => {
        const call = async () => {
            const { data: { status, clientId, clientSecret, redirectUrl } } = await axios.get('spotify')
            setClientId(clientId)
            setClientSecret(clientSecret)
            setRedirectUrl(redirectUrl)
            setLogged(status)
        }
        call()
    }, [])

    useEffect(() => {

    }, [])

    const status = clientId && clientSecret && redirectUrl

    const submit = async (e) => {
        e.preventDefault()
        if (status) {
            await axios.post('spotify', { clientId, clientSecret, redirectUrl })
            window.location.replace(spotifyAuthUrl(clientId, redirectUrl))
        }
    }

    useEffect(() => {
        if (code) {
            (async () => {
                window.history.pushState({}, null, "/")
                await axios.post('spotify/login', { code })
            })()
        }
    }, [code])

    return (
        <section>
            <h1>Spotify</h1>
            <Divider />
            <form onSubmit={submit}>
                <Container class={style.container}>
                    <Row>
                        <Col sm={2} class="align-end" >
                            <h4>ClientID</h4>
                        </Col>
                        <Col sm={4} class="align-center" >
                            <input aria-label="Client id" value={clientId} onChange={(e) => setClientId(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} class="align-end" >
                            <h4>ClientSecret</h4>
                        </Col>
                        <Col sm={4} class="align-center" >
                            <input aria-label="Client secret" value={clientSecret} onChange={(e) => setClientSecret(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2} class="align-end" >
                            <h4>Redirect Url</h4>
                        </Col>
                        <Col sm={4} class="align-center" >
                            <input aria-label="Redirect url" value={redirectUrl} onChange={(e) => setRedirectUrl(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={1} class="align-center">
                            <Indicator success={logged} />
                        </Col>
                        <Col sm={5} class="align-end" >
                            <button disabled={!status}>LOGIN</button>
                        </Col>
                    </Row>
                </Container>
            </form>
        </section>
    );
}

export default SpotifySection;