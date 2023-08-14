import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGooglePlusCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id="home">
        <main>
            <h1>InStac</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>
    <div className="home2">
      <img src={vg} alt="Graphics" />
      <div>
        <p>
          We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
      </div>
    </div>
    <div className="home3" id="about">
      <div>
        <h1>
          Who are we?
        </h1>
      <p>
      We are a dynamic and innovative company offering comprehensive full-stack services alongside cutting-edge peer-to-peer networking solutions for our esteemed clients. At our core, we pride ourselves on being a one-stop destination for a wide range of services that encompass the entire spectrum of technology needs. Whether it's web and application development, backend systems, front-end interfaces, or seamless integration of various platforms, we deliver holistic solutions tailored to meet the diverse requirements of modern businesses.
      </p>
      <br/>
      <p>In addition to our full-stack expertise, our company is also a trailblazer in peer-to-peer networking. We understand that in today's interconnected world, peer-to-peer interactions are paramount for fostering efficient communication and collaboration. Our pioneering networking solutions empower our clients to connect directly, facilitating real-time data sharing, enhanced security, and streamlined workflows.
      </p>
      <br/>
      <p>What sets us apart is our commitment to pushing the boundaries of technological innovation. We combine our technical prowess with a deep understanding of our clients' unique objectives, ensuring that our solutions not only meet but exceed expectations. With a dedicated team of experts and a customer-centric approach, we aim to be the forefront partner for businesses seeking transformative digital solutions that elevate their operations and propel them into the future.</p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
          <AiFillGooglePlusCircle />
          <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>
          <AiFillAmazonCircle />
          <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>
          <AiFillYoutube/>
          <p>Youtube</p>
          </div>
          <div style={{
            animationDelay:"1s",
          }}>
          <AiFillInstagram/>
          <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home