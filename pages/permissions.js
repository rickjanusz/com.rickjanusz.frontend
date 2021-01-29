import PleaseSignIn from '../components/PleaseSignIn'
import Permissions from '../components/Permissions'

const PermissionsPage = (props) => (
  <div>
    <p>Permissions</p>
    <PleaseSignIn>
      <Permissions></Permissions>
    </PleaseSignIn>
  </div>
)

export default PermissionsPage
