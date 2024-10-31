import React from 'react'
import HmenuIcon from '../assests/clarity_grid-view-solid.svg'
import VmenuIcon from '../assests/ic_round-view-list.svg'
import HMenuComponent from './hMenu'
import VMenuComponent from './VMenu'
const HomeRightComponent = () => {
  return (
    <>
    <div> 
<button>
  <img src={HmenuIcon} alt="HmenuIcon" />
</button>
<button>
  <img src={VmenuIcon} alt="VmenuIcon" />
</button>
    </div>
    <HMenuComponent/>
    <VMenuComponent/>
    </>
  )
}

export default HomeRightComponent