import originAxios from 'axios'
import qs from 'qs'

export default function axios(option) {
    return new Promise((resolve, reject) => {
	    // 1.创建axios的实例
	    const instance = originAxios.create({
		    baseURL: 'http://47.107.107.212/api',
			timeout: 5000,
			async:true,
			crossDomain:true,
	    });

	    // 配置请求和响应拦截
	    instance.interceptors.request.use(config => {
		config.data = qs.stringify(config.data)
		// if(sessionStorage.getItem('num')) {
		// 	config.headers['token'] = sessionStorage.getItem('num');
		// 	config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		// }
		    return config
	    }, err => {
		    return err
	    })

	    instance.interceptors.response.use(response => {
		    return response.data
	    }, err => {
		    if (err && err.response) {
			    switch (err.response.status) {
				    case 400:
					    err.message = '请求错误'
					break
				    case 401:
					    err.message = '未授权的访问'
					break
			    }
		    }
		    return err
	    })

	    // 2.传入对象进行网络请求
	    instance(option).then(res => {
		    resolve(res)
	    }).catch(err => {
		    reject(err)
	    })
    })
}