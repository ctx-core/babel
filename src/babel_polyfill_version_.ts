import { package_version_ } from '@ctx-core/package'
export async function babel_polyfill_version_():Promise<string> {
	return package_version_('babel-polyfill')
}
export {
	babel_polyfill_version_ as _babel_polyfill_version,
}
