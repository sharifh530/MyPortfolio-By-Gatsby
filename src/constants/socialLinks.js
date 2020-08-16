import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/sharif.hossain.9809",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/sazzad-hossain-sharif-a9868b127/",
  },
  {
    id: 3,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/sharifh530",
  },
  {
    id: 4,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/sharifh530/",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/a1e30362e55a48f",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
