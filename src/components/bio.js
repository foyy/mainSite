/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMicrophone } from "@fortawesome/free-solid-svg-icons"

import { faTiktok, faTwitch } from "@fortawesome/free-brands-svg-icons"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      {/* <div className="flexin">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/hunter.jpeg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        {author?.name && (
          <p style={{ alignSelf: "center" }}>
            {author?.summary || null}
            {` `}
          </p>
        )}
      </div> */}
      <div className="socialIcons">
        <a href="https://www.thebutterbook.com/">
          <FontAwesomeIcon
            icon={faMicrophone}
            size="4x"
            className="socialIcon"
          />
        </a>
        <p className="iconText">Butter Brain Podcast</p>
        <a href="https://www.twitch.com/hunterleeves">
          <FontAwesomeIcon icon={faTwitch} size="4x" className="socialIcon" />{" "}
        </a>
        <p className="iconText"> Twitch</p>
        <a href="https://www.tiktok.com/@hunterleeves">
          <FontAwesomeIcon icon={faTiktok} size="4x" className="socialIcon" />{" "}
        </a>
        <p className="iconText">TikTok</p>
      </div>
    </div>
  )
}

export default Bio
