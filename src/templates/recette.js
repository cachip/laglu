import React from "react";

export default ({ data }) => {
  const recette = data.markdownRemark;
  return (
    <div>
      <div 
          css={{ 
            backgroundColor: `grey`,
           }}>
            <h4>Prébiotiques de la recette : {recette.frontmatter.prebiotiques}</h4>
            <h4>Légumes de saison : {recette.frontmatter.legumessaison}</h4>
          </div>
      <h2>Pourquoi cette recette ?</h2>
        <div
          css={{ 
            display: `grid`,
            gridTemplateColumns: `1fr 1fr`,
            gridGap: `10px`,
            gridTemplateRows: `minmax(200px, auto)`,
           }}
        >
          <img src={recette.frontmatter.photoprepa1} />
          <p>{recette.frontmatter.histoire}</p>
        </div>
        
     
      <h1>{recette.frontmatter.title}</h1>
      <div
        css={{ 
          display: `grid`,
          gridTemplateColumns: `1fr 3fr`,
          gridGap: `30px`,
          gridTemplateRows: `minmax(200px, auto)`,
          
         }}
      >
        <div className={`imgprep`} >
          <img src={recette.frontmatter.photoprepa1} />
          <img src={recette.frontmatter.photoprepa2} />
          <img src={recette.frontmatter.photoprepa3} />
        </div>
        <div className={`prep`} dangerouslySetInnerHTML={{ __html: recette.html }} />
      </div>
      
    </div>
  );
};

export const query = graphql`
query RecetteQuery($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      prebiotiques
      legumessaison
      date
      serves
      preparation
      cooking
      recipesource
      photoprepa1
      photoprepa2
      photoprepa3
      photoplat
      histoire
    }
  }
}
`;