import React from "react";

export default ({ data }) =>
    <h1>A propos de {data.site.siteMetadata.title}</h1>

export const query = graphql`
    query AboutQuery {
        site { siteMetadata { title } }
    }
`