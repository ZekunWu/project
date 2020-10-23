import Loadable from 'react-loadable';
import Loading from '../../component/Loading'

export default Loadable({
  loader: () => import('./index'),
  loading: Loading
})

