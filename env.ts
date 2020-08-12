import '@ctx-core/env/env'
import { _version__package } from '@ctx-core/package'
export const BABEL__POLYFILL__URL =
	`https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/${_version__babel_polyfill()}/polyfill.min.js`
export function _version__babel_polyfill() {
	return _version__package('babel-polyfill')
}
