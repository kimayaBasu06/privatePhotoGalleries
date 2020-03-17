import Header from './Header'

const layoutStyle = {
  margin: 25,
  padding: 25,
  border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
