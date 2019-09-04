import axios from '@/libs/util'

// 供应商列表
export const getSupplierList = (data) => {
  return axios.ajax({
    url: 'v1/supplier/list',
    method: 'get',
    params: data
  })
}

// 添加供应商
export const addSupplierInfo = (info) => {
  return axios.ajax({
    url: 'v1/supplier/create',
    method: 'post',
    data: info
  })
}

// 修改供应商
export const updateSupplierInfo = (info) => {
  return axios.ajax({
    url: 'v1/supplier/update',
    method: 'post',
    data: info
  })
}
