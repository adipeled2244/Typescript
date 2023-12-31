import {type ReactNode} from 'react'


type HintBoxProps = {
    mode:'hint',
    children: ReactNode,
}


type WarningBoxProps = {
    mode:  'warning',
    children: ReactNode,
    severity?:'low' | 'medium' | 'high'
}
type InfoBoxProps = HintBoxProps | WarningBoxProps;

export const InfoBox = (props:InfoBoxProps) => {
    const {children} = props;
    if(props.mode === 'hint'){
        return (
            <aside className="infobox infobox-hint">
                 <p>{children}</p>
            </aside>
          )

    }

    // this is a warning box
    const {severity} = props;
  return (
    <aside className={`infobox infobox-warning warning--${ severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
    </aside>
  )
}
