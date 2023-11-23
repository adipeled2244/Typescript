
import React from 'react'

type ButtonProps =  React.ComponentPropsWithoutRef<'button'> & {
href?: never
}
/// מאפשר פרופס של אלמנט כפתור מכל סוגיו

type AnchorProps = React.ComponentPropsWithoutRef<'a'> /// מאפשר פרופס של אלמנט איי מכל סוגיו

export const Button = (props:ButtonProps|AnchorProps ) => {
 
function isAnchorProps(props:ButtonProps|AnchorProps): props is AnchorProps { // type predicate
  return 'href' in props;
}

if(isAnchorProps(props)){  
    return (
    <a {...props} className="button" >Link</a>
  )
}


  return (
    <button {...props} className="button"  >Button</button>
  )
}

export default Button
