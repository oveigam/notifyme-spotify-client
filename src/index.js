import './style';
import App from './components/app';
import axios from 'axios'

axios.defaults.baseURL = 'http:localhost:5000/api'
axios.defaults.headers.common['crossDomain'] = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'DELETE, POST, GET, OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With';

export default App;
