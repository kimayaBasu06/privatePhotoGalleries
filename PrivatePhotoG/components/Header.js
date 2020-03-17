import Link from 'next/link'
import styles from '../components/prices.module.css'



const linkStyle = {
  marginRight: 50

}

const linkLog = {
  marginRight: 700
}

const linkMilk = {
  fontSize: 20
}


export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/prices">
        <a style={linkStyle}>Prices</a>
      </Link>
      <Link href="https://checkout.stripe.com/pay/cs_test_srz63W5nC4vOFwDazPhlTOXfnAfl5bPnCzbtxK9zu3ftKLXfQOPvQq8C#fidkdWxOYHwnPyd1blpxYHZxWjJvd3ZMblVCcnBTVVRtSH9rU381Tm5IXzU1Q3xhSlB3V0gnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXU%2FKippamZkaW1qdnE%2FMTU1NScpJ2hsYXYnP34nYnBsYSc%2FJz08NTAzM2Q1KGFgNGMoMWc2Mig8NDUzKDUyYGM2YGcwM2cyNycpJ2hwbGEnPydkYDw0NWY3Zig9Z2RhKDExNjcoZDVnZCg3MjJjZzZkYGM1YzUnKSd2bGEnPydgZDQyYT1nYCgxYTZgKDFgMDAoZ2RgMig3YzwxNzYwNGcxYGQneCknZ2BxZHYnP15YeCUl">
        <a style={linkStyle}>Subcribe</a>
      </Link>
      <Link href="/about">
        <a style={linkLog}>About</a>
      </Link>
      <Link href="/login">
        <a style={linkMilk}>Login</a>
      </Link>
      
      

    </div>
  )
}
