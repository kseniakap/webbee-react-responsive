import MediaQuery from '@kseniakap/media-query'

export const ExampleMediaQuery = () => (
  <div>
    <h1>Device Test!(компонент MediaQuery.tsx)</h1>
    <MediaQuery minWidth={1224}>
      <p>You are a desktop or laptop</p>
      <MediaQuery minWidth={1824}>
        <p>You also have a huge screen</p>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery minResolution="2dppx">
      {(matches) =>
        matches ? <p>You are retina</p> : <p>You are not retina</p>
      }
    </MediaQuery>
  </div>
)
