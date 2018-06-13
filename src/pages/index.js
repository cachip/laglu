
import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  return (
    <div>
      <h1>Site de recettes pour pandas !</h1>
      <p>Il y a {data.allMarkdownRemark.totalCount} recettes de saison ce mois-ci :</p>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => 
          <div key={node.id}>
            <h3><Link to={node.fields.slug}>{node.frontmatter.title}</Link>, publiée le {node.frontmatter.date}</h3>
            <p>Cette recette contient les prébiotiques suivants : {node.frontmatter.prebiotiques}</p>
          </div>
        
        )}
      </div>
    </div>
)
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {   
          fields {
            slug
          }
          id
          html
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale:"fr")
            prebiotiques
            photoplat
           }
        }      
      }
    }
  }`