import Vue from 'vue'
import echarts from 'echarts'


export default function install(){

  Vue.prototype.$echarts=echarts
}