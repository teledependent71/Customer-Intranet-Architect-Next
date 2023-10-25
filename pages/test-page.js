import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Customer Intranet Architect</title>
          <meta
            property="og:title"
            content="test-page - Customer Intranet Architect"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_4yxwnn) => (
            <>
              <h1>{context_4yxwnn?.Name}</h1>
            </>
          )}
          initialData={props.context4yxwnnProp}
          persistDataDuringLoading={true}
          key={props?.context4yxwnnProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context4yxwnnProp = await testPageResource({
      ...context?.params,
    })
    return {
      props: {
        context4yxwnnProp: context4yxwnnProp?.data?.[0],
      },
    }
  } catch (errro) {
    return {
      notFound: true,
    }
  }
}
