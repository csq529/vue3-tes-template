import { request } from '../request'

export function getMenu(params: object) {
    return request({
        url: `/api/getMenu.do`,
        method: 'get',
        params
    });
}