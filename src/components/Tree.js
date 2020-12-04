import React, { useState, useEffect } from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import "./VerticalTimeline.css";
import "./VerticalTimelineElement.css";
const defaultVisibleTimelineElements = [
  <VerticalTimelineElement
    onTimelineElementClick={() => {
      // eslint-disable-next-line no-alert
      alert('onTimelineElementClick event fired');
    }}
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#f17a7a', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #f17a7a' }}
    date="Jun 2020 - present"
    iconStyle={{ background: '#f82626', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h4 className="vertical-timeline-element-title">Graduated from</h4>
    <h5 className="vertical-timeline-element-subtitle">University of Waterloo</h5>
    <p>
      Bachelor of Appliced Science, Computer Engineering
    </p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ffb951', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #ffb951' }}
    date="Aug 2019 - Jan 2020"
    iconStyle={{ background: '#fa9f17', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h4 className="vertical-timeline-element-title">Full Stack Developer</h4>
    <h5 className="vertical-timeline-element-subtitle">Aareas Interactive Inc.</h5>
    <p>Toronto, CA</p>
  </VerticalTimelineElement>,
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#ffb951', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #ffb951' }}
    date="Aug 2018 - Jan 2019"
    iconStyle={{ background: '#fa9f17', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h4 className="vertical-timeline-element-title">Software Developer</h4>
    <h5 className="vertical-timeline-element-subtitle">Flex LTD Automotive solution</h5>
    <p>Markham, CA</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#ffb951', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #ffb951' }}
  date="Jan 2018 - Apr 2018"
  iconStyle={{ background: '#fa9f17', color: '#fff' }}
  icon={<WorkIcon />}
>
  <h4 className="vertical-timeline-element-title"> Software Specialist</h4>
  <h5 className="vertical-timeline-element-subtitle">Rockwell Automation Inc</h5>
  <p>Cambridge, CA</p>
</VerticalTimelineElement>,
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#ffb951', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #ffb951' }}
  date="May 2017 - Sep 2017"
  iconStyle={{ background: '#fa9f17', color: '#fff' }}
  icon={<WorkIcon />}
>
  <h4 className="vertical-timeline-element-title">Programmer Analyst </h4>
  <h5 className="vertical-timeline-element-subtitle">Pharmacy Access Solutions Inc.</h5>
  <p>Mississauga, CA</p>
</VerticalTimelineElement>,
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#ffb951', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #ffb951' }}
  date="Sep 2016 - Dec 2016 "
  iconStyle={{ background: '#fa9f17', color: '#fff' }}
  icon={<WorkIcon />}
>
  <h4 className="vertical-timeline-element-title">Web Developer</h4>
  <h5 className="vertical-timeline-element-subtitle">Yuhantechnos Co.</h5>
  <p>Seoul, KR</p>
</VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#71ff71', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #71ff71' }}
    date="Dec 2014 - Aug 2016"
    iconStyle={{ background: '#3dff3d', color: '#fff' }}
    icon={<StarIcon />}
    visible
  >
    <h3 className="vertical-timeline-element-title">
      Sergeant 
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Republic of Korea Amry</h4>
    <p>Wireless Communication</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#ffb951', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #ffb951' }}
  date="Aug 2013 - Dec 2013"
  iconStyle={{ background: '#fa9f17', color: '#fff' }}
  icon={<WorkIcon />}
>
  <h4 className="vertical-timeline-element-title">Software QA Developer</h4>
  <h5 className="vertical-timeline-element-subtitle">ConceptWave Software Inc.</h5>
  <p>Mississauga, CA</p>
</VerticalTimelineElement>,
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#ffb951', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #ffb951' }}
  date="Jan 2013 - Apr 2013"
  iconStyle={{ background: '#fa9f17', color: '#fff' }}
  icon={<WorkIcon />}
>
  <h4 className="vertical-timeline-element-title">Web/Mobile Developer</h4>
  <h5 className="vertical-timeline-element-subtitle">Yuhantechnos Co.</h5>
  <p>Seoul, KR</p>
</VerticalTimelineElement>,
  <VerticalTimelineElement
  className="vertical-timeline-element--education"
  contentStyle={{ background: '#f17a7a', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #f17a7a' }}
  date="Sep 2012"
  iconStyle={{ background: '#f82626', color: '#fff' }}
  icon={<SchoolIcon />}
    visible
  >
    <h3 className="vertical-timeline-element-title">
      Started
    </h3>
    <h4 className="vertical-timeline-element-subtitle">University of Waterloo</h4>
    <p>Bachelor of Appliced Science, Electrical Engineering</p>
  </VerticalTimelineElement>,
];

  const Tree = () => {

    return(
      <VerticalTimeline>{defaultVisibleTimelineElements}</VerticalTimeline>

    );
  };

  
export default Tree;
