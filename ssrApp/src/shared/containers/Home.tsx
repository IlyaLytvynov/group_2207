import { Home } from '../components/Home/Home';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
  return {
    title: state.home.title
  }
}

const ConnectedHome = connect(mapStateToProps)(Home);

export { ConnectedHome as Home };
