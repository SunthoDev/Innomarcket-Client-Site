import React from 'react'

const SingleMessage = ({names, msg, msgPosition, timezoon}) => {
  return (
    <>
         <div class={`msg ${msgPosition}`}>
            <div
            class="msg-img"
            //    style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
            ></div>

            <div class="msg-bubble">
                <div class="msg-info">
                <div class="msg-info-name">{names}</div>
                <div class="msg-info-time">{timezoon}</div>
                </div>

                <div class="msg-text">
                    {msg}
                </div>
            </div>
         </div>
    </>
  )
}

export default SingleMessage