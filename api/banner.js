import request from '@/utils/request'

export default {
    //查询前两条Banner的信息
    getListBanner() {
        return request({
            url: `/educms/bannerfront/getAllBanner`,
            method: 'get'
        })
    }
}