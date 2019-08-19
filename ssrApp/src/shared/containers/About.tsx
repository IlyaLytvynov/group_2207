import { About } from '../components/About/About';
import { connect } from 'react-redux';

const ConnectedAbout = connect()(About);

export { ConnectedAbout as About }
