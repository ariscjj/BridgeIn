import React from 'react'

export default function Alert({
  className,
  show,
  onHide,
  variant='danger',
  children,
  ...others
}){
  return (
    <>
      {
        show ?
          <div
            {...others}
            className={"alert d-flex justify-content-between alert-" + variant + ' ' + className}
            role="alert"
          >
            <div>{children}</div>

            {
              onHide ?
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={onHide}>
                  X
                </div>
                :
                <></>
            }
          </div>
          :
          <></>
      }
    </>

  )
}

