import '@ctx-core/env'
import { _package_version } from '@ctx-core/package'
export const BABEL__POLYFILL__URL =
	`https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/${_version__babel_polyfill()}/polyfill.min.js`
export function _version__babel_polyfill() {
	return _package_version('babel-polyfill')
}
