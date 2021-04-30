import React from 'react';
import KB2 from './KBSecond.svg';

var Floorplan = (props) => {
  console.log("props to Floorplan?", props)
  if (props.show === true) {
    var roomClick = event => {
      event.preventDefault();
      console.log(`${event.target.getAttribute("title")} was clicked!`);
      var roomNo = event.target.getAttribute("title").slice(2);
      props.getRoomDetails(roomNo);
    }
    return (
      <div className="floorplan" >
        <img src={KB2} useMap="#image_map" />
          <map name="image_map">
            <area alt="kb201" title="kb201" href="" coords="641,216,795,356" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb202" title="kb202" href="" coords="605,83,798,205" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb203" title="kb203" href="" coords="407,83,570,473" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb205" title="kb205" href="" coords="411,551,568,778" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb206" title="kb206" href="" coords="409,782,567,995" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb207" title="kb207" href="" coords="637,816,795,988" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb2BathSouth" title="kb2BathSouth" href="" coords="639,553,797,808" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb208" title="kb208" href="" coords="952,552,1080,725" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb209" title="kb209" href="" coords="1085,553,1212,723" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb210" title="kb210" href="" coords="1221,555,1359,725" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb211" title="kb211" href="" coords="1367,552,1498,723" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb212" title="kb212" href="" coords="1502,551,1636,726" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb213" title="kb213" href="" coords="1779,808,1937,957" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb2BathNorth" title="kb2BathNorth" href="" coords="1778,553,1933,798" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb214" title="kb214" href="" coords="2006,809,2161,953" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb215" title="kb215" href="" coords="2003,688,2164,803" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb216" title="kb216" href="" coords="2002,550,2166,682" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb217" title="kb217" href="" coords="2036,266,2168,460" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb218" title="kb218" href="" coords="1909,268,2028,412" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb219" title="kb219" href="" coords="1779,274,1905,458" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb220" title="kb220" href="" coords="1642,312,1757,463" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb221" title="kb221" href="" coords="1521,299,1636,459" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb222" title="kb222" href="" coords="1367,293,1479,458" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb225" title="kb225" href="" coords="1063,293,1250,459" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb223" title="kb223" href="" coords="936,293,1054,459" shape="rect" onClick={(event) => roomClick(event)}/>
            <area alt="kb224" title="kb224" href="" coords="804,308,930,460" shape="rect" onClick={(event) => roomClick(event)}/>
          </map>
      </div>
    )
    }
  else return null;
}

export default Floorplan;
