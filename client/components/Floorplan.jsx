import React from 'react';
import KB2 from './KB2.svg';

var Floorplan = (props) => {
  if (props.show === true) {
    var roomClick = event => {
      event.preventDefault();
      console.log(`${event.target.getAttribute("title")} was clicked!`)
    }
    return (
      <div className="floorplan">
        <img src={KB2} useMap="#image_map" /* style = {{ width: "inherit", height:"inherit"}}  */ />
        <map name="image_map">
          <area alt="kb201" title="kb201" href="" coords="1032,661,1195,799" shape="rect" onClick={(event) => roomClick(event)}/>
          <area alt="kb202" title="kb202" href="" coords="994,517,1194,657" shape="rect" onClick={(event) => roomClick(event)}/>
          <area alt="kb203" title="kb203" href="" coords="798,510,973,912" shape="rect" onClick={(event) => roomClick(event)}/>
          <area alt="kb205" title="kb205" href="" coords="797,987,970,1220" shape="rect"/>
          <area alt="kb206" title="kb206" href="" coords="803,1229,969,1441" shape="rect"/>
          <area alt="kb207" title="kb207" href="" coords="1029,1259,1205,1444" shape="rect"/>
          <area alt="kb2SouthBath" title="kb2SouthBath" href="" coords="1039,994,1203,1245" shape="rect"/>
          <area alt="kb208" title="kb208" href="" coords="1347,993,1483,1173" shape="rect"/>
          <area alt="kb209" title="kb209" href="" coords="1498,994,1631,1175" shape="rect"/>
          <area alt="kb201" title="kb201" href="" coords="1624,996,1759,1179" shape="rect"/>
          <area alt="kb211" title="kb211" href="" coords="1769,997,1914,1175" shape="rect"/>
          <area alt="kb212" title="kb212" href="" coords="1914,990,2035,1174" shape="rect"/>
          <area alt="kb2NorthBath" title="kb2NorthBath" href="" coords="2171,989,2339,1246" shape="rect"/>
          <area alt="kb213" title="kb213" href="" coords="2168,1254,2338,1401" shape="rect"/>
          <area alt="kb214" title="kb214" href="" coords="2403,1250,2568,1397" shape="rect"/>
          <area alt="kb215" title="kb215" href="" coords="2406,1131,2563,1242" shape="rect"/>
          <area alt="kb216" title="kb216" href="" coords="2401,997,2571,1120" shape="rect"/>
          <area alt="kb217" title="kb217" href="" coords="2437,703,2576,901" shape="rect"/>
          <area alt="kb216" title="kb216" href="" coords="2308,699,2431,904" shape="rect"/>
          <area alt="kb219" title="kb219" href="" coords="2187,696,2301,900" shape="rect"/>
          <area alt="kb220" title="kb220" href="" coords="2052,760,2158,903" shape="rect"/>
          <area alt="kb221" title="kb221" href="" coords="1902,728,2045,904" shape="rect"/>
        </map>
      </div>
    )
  }
  else return null;
}

export default Floorplan;
