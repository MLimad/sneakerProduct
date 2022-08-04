import React from 'react'

function Drawer({setDrawer}) {
  return (
    <div>
          <div class="drawer">
      
            <ul id="menu-list">
                <div class="close-btn" onClick={()=>setDrawer(false)}>
                <img src="./images/icon-close.svg" alt="close" />
                </div>
                <li><a href="#collections">collections</a></li>
                <li><a href="#men">men</a></li>
                <li><a href="#women">women</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Drawer