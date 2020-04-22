import {
    ACTIVE_SPINNER,
    DISABLE_SPINNER
} from 'actions/types'

export default function stateNavigation (state = false, {type}) {
    switch (type) {
        case DISABLE_SPINNER: {
            return false
        }
        case ACTIVE_SPINNER: {
            return true
        }
        default: {
            return state
        }
    }
}
