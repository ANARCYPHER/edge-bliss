// @flow

import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { lobbyLogin } from '../../actions/EdgeLoginActions.js'
import LinkedComponent from '../../components/scenes/EdgeLoginScene'
import { type Dispatch, type RootState } from '../../types/reduxTypes.js'

const mapStateToProps = (state: RootState) => ({
  lobby: state.core.edgeLogin.lobby,
  error: state.core.edgeLogin.error,
  isProcessing: state.core.edgeLogin.isProcessing
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  accept: () => dispatch(lobbyLogin()),
  decline: () => Actions.pop()
})

export default connect(mapStateToProps, mapDispatchToProps)(LinkedComponent)
