import axios from '@/libs/util'

// 销售订单列表
export const getSalesOrder = (data) => {
  return axios.ajax({
    url: 'v1/order/get_sales_order',
    method: 'get',
    params: data
  })
}

// 销售订单记录
export const getSalesRecord = (data) => {
  return axios.ajax({
    url: 'v1/sales/list',
    method: 'get',
    params: data
  })
}

// 购买订单列表
export const getPurchaseOrder = (data) => {
  return axios.ajax({
    url: 'v1/order/get_purchase_order',
    method: 'get',
    params: data
  })
}

// 购买记录
export const getPurchaseRecord = (data) => {
  return axios.ajax({
    url: 'v1/purchase/list',
    method: 'get',
    params: data
  })
}

// 添加销售订单
export const addSalesOrder = (info) => {
  return axios.ajax({
    url: 'v1/order/add_sales_order',
    method: 'post',
    data: info
  })
}

// 添加销售订单
export const addPurchaseOrder = (info) => {
  return axios.ajax({
    url: 'v1/order/add_purchase_order',
    method: 'post',
    data: info
  })
}
