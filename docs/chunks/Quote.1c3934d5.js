import{m as t,c as e}from"../index.aa8a182b.js";function o({data:o}){return t`<blockquote className=${e`
        padding: 1rem;
        font-size: 1.3rem;
        max-width: 43rem;
        margin: 0 auto;
      `}><p dangerouslySetInnerHTML=${{__html:o.value.text}} className=${e`
          position: relative;
          font-style: italic;
          margin: 0;
          margin-bottom: 0.5rem;

          &::before {
            content: "“";
            position: absolute;
            top: -1rem;
            left: -1.5rem;
            font-size: 2rem;
          }

          &::after {
            content: "”";
            position: absolute;
            right: 0;
            bottom: -2rem;
            font-size: 2rem;
          }
        `}/><p dangerouslySetInnerHTML=${{__html:`- ${o.value.attr}`}} style=${{margin:0}}/></blockquote>`}export{o as Q};