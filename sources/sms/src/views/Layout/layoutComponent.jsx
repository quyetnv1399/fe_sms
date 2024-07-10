import { Layout } from 'antd'
import React from 'react'
import Siderbar from './siderbar'
import Context from './context'


const LayoutComponent = () => {
  return (
    <Layout className='h-screen w-full'>
        <Siderbar />
        <Context />
    </Layout>
  )
}

export default LayoutComponent;