import request from '@/utils/request'

export default {
    //获得老师和课程的数据
    getIndexData(courseId) {
        return request({
            url: `/eduservice/indexfront/index`,
            method: 'get',
          })
    }
}