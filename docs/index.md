---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: Yifei Liu
  text: <small>Call me Tobi if easier :)</small>
  tagline: •&nbsp;&nbsp;&nbsp;&nbsp;M.Sc. IT & Games Engineering<small style="font-size:0.5em;"> (<a href="https://www.tum.de/" target="blank"><img src="https://th.bing.com/th/id/ODLS.e6582a02-3033-4dc7-89d3-f2e681be49df?w=32&amp;h=32&amp;qlt=90&amp;pcl=fffffa&amp;o=6&amp;pid=1.2" style="vertical-align:middle;display:inline-block" height="28" width="28" alt="全球 Web 图标" class="rms_img" data-bm="44"></a> In Progress)</small><br>•&nbsp;&nbsp;&nbsp;&nbsp;B.Sc. Data Engineering<br>•&nbsp;&nbsp;&nbsp;&nbsp;B.Mgt.
  image:
    src: /logo.png
    alt: DuGuYife
  actions:
    - text: Projects ↗
      link: https://project.liuyifei.tech
    - text: Blog ↗
      link: https://notes.liuyifei.tech
      theme: alt
    - text: GitHub ↗
      link: https://github.com/DuGuYifei
    - text: Bilibili ↗
      link: https://b23.tv/HRbF8sa
      theme: alt
    - text: LeetCode ↗
      link: https://leetcode.cn/u/duguyifei/
features:
  - icon: 🖥️
    title: Backend DevOps
    details: • Spring Cloud series Or Alibaba series.<br>• Spring Boot, Go, Flask<br>• Backend with different databses or Solr<br>• DevOps with Docker, CI/CD<br>• RESTful, GraphQL, Dubbo-Triple, gRPC
    link: https://project.liuyifei.tech
    linkText: Click categories -> Backend -> See projects
  - icon: 📊
    title: Data Engineering
    details: • SQL & NoSQL Database<br>• Data Warehouse：SSAS<br>• Big Data Platform & Tools<br>• shard, partition, replica, cluster, R/W split<br>• SQL, Python, Java
    link: https://project.liuyifei.tech/posts/Fullstack-BigData-App-Pokemoney/
    linkText: One complex project example
  - icon: 🎮
    title: Games Engineering
    details: • Unity, UE, Godot<br>• Learn IT & Games Engineering in TUM<br>• Led a team of 3/4 in semester-long Game Jam-style projects.
    link: https://project.liuyifei.tech
    linkText: Click tags -> Game -> See projects
  - title: Tools
    details: • Docker, Git, Figma, Jira<br>• Chatgpt, Claude, Copilot, Deepseek<br>• Nginx, Caddy
  - title: Hobbies
    details: Billiards 🎱, Latin Dancing 💃，Games🎮
  - title: Every pursuit begins with a spark, and is shaped by persistence.
    details: '<small class="bottom-small">--A little developer with big dreams.</small>'
    link: https://github.com/DuGuYifei
---

<style>
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}

.work-experience-section {
  max-width: 800px;
  margin: auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid currentColor;
  padding-bottom: 0.5rem;
}

.experience-item {
  margin-bottom: 2rem;
}

.job-title {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.job-meta {
  font-size: 0.95rem;
  color: #555;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

html.dark .job-meta {
  color: #aaa;
}

.job-description {
  margin-top: 0.5rem;
  padding-left: 1.25rem;
  list-style-type: disc;
}

@media (max-width: 600px) {
  .job-meta {
    flex-direction: column;
    gap: 0.25rem;
  }
  .tagline small {
    display: block;
  }
}
</style>
<style>
.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 40px auto;
}

.center-line {
  position: absolute;
  height: 100%;
  width: 2px;
  background:rgb(74, 74, 74);
  left: 50%;
  transform: translateX(-50%);
  top: 0;
}

html.dark .center-line {
  background: rgb(227, 227, 227);
}

.timeline-item {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 40px;
}

.timeline-dot {
  position: absolute;
  width: 16px;
  height: 16px;
  background: #333;
  border: 3px solid white;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.timeline-date {
  width: 50%;
  padding: 10px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  color: rgb(74, 74, 74);
}

html.dark .timeline-date {
  color: rgb(227, 227, 227);
}

.timeline-left .timeline-date {
  justify-content: flex-end;
  padding-right: 40px;
}

.timeline-right .timeline-date {
  justify-content: flex-start;
  padding-left: 40px;
  order: 2;
}

.timeline-content {
  width: 48%;
  background:rgb(232, 232, 232);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color:rgb(80, 78, 78);
}

.timeline-left .timeline-content {
  margin-left: 20px;
}

.timeline-right .timeline-content {
  margin-right: 20px;
  order: 1;
}

.timeline-content .company-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  float: right;
  margin-left: 15px;
}

.timeline-content .job-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.timeline-content .company-name {
  font-size: 14px;
  color: #666;
}

#edu-exp, #work-exp {
  margin-top: 40px;
  margin-bottom: 80px;
}

/* Responsive styling */
@media screen and (max-width: 768px) {
  .center-line {
    left: 30px;
  }
  
  .timeline-item {
    padding-left: 30px;
    margin-left: 0;
  }
  
  .timeline-dot {
    left: 30px;
    top: 50%;
  }
  
  .timeline-date {
    width: 100%;
    padding: 10px 0 10px 60px;
    justify-content: flex-start !important;
    order: 1;
  }
  
  .timeline-content {
    width: calc(100% - 60px);
    margin: 10px 0 0 60px !important;
    order: 2 !important;
  }
  
  .timeline-left, .timeline-right {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

<div id="edu-exp">
  <h3 class="section-title">Education</h3>
  <div class="timeline-container">
    <div class="center-line"></div>    
    <!-- Item 1 - Left side -->
    <div class="timeline-item timeline-left">
      <div class="timeline-dot"></div>
      <div class="timeline-date">April 2024 - Present</div>
      <div class="timeline-content">
        <div class="company-logo">
          <a href="https://www.tum.de/studium/studienangebot/detail/informatik-games-engineering-master-of-science-msc" target="blank" ><img src="/exp/tum-logo.png" alt="TUM Logo"></a>
        </div>
        <a href="https://www.tum.de/studium/studienangebot/detail/informatik-games-engineering-master-of-science-msc" target="blank" style="color: inherit;"><div class="job-title">Technische Universität München</div></a>
        <div class="company-name">Informatik & Games Engineering</div>
      </div>
    </div>
    <!-- Item 2 - Right side -->
    <div class="timeline-item timeline-right">
      <div class="timeline-dot"></div>
      <div class="timeline-date">OCT 2020 – JAN 2024</div>
      <div class="timeline-content">
        <div class="company-logo">
          <a href="https://pg.edu.pl/en/admission/bachelor-studies-international-students/study-programs-english/bachelor-science-data-engineering" target="blank"><img src="/exp/pg-logo.png" alt="PG Logo"></a>
        </div>
        <a href="https://pg.edu.pl/en/admission/bachelor-studies-international-students/study-programs-english/bachelor-science-data-engineering" target="blank" style="color: inherit;"><div class="job-title">Gdansk University of Technology</div></a>
        <div class="company-name">Data Engineering</div>
      </div>
    </div>
  </div>
</div>
<div id="work-exp">
  <h3 class="section-title">Work Experience</h3>
  <div class="timeline-container">
    <div class="center-line"></div>    
    <!-- Item 1 - Left side -->
    <div class="timeline-item timeline-left">
      <div class="timeline-dot"></div>
      <div class="timeline-date">MAY 2023 – APR 2025</div>
      <div class="timeline-content">
        <div class="company-logo">
          <a href="https://anyhelper.net/" target="blank"><img src="/exp/anyhelper.png" alt="Anyhelper Logo"></a>
        </div>
        <div class="job-title">Full Stack Developer</div>
        <a href="https://anyhelper.net/" target="blank" style="color: inherit;">
          <div class="company-name">
            Anyhelper
            <a href="https://www.linkedin.com/company/anyhelper/" style="display: inline-block; vertical-align: middle; margin-left: 5px;" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
            </a>
          </div>
        </a>
      </div>
    </div>
    <!-- Item 2 - Right side -->
    <div class="timeline-item timeline-right">
      <div class="timeline-dot"></div>
      <div class="timeline-date">JUL 2023 – APR 2024</div>
      <div class="timeline-content">
        <div class="company-logo">
          <a href="https://project.liuyifei.tech/tags/fullgeek/" target="blank"><img src="/exp/FullGeek.ico" alt="FullGeek Logo"></a>
        </div>
        <div class="job-title">Software Architect & Backend Developer</div>
        <a href="https://project.liuyifei.tech/tags/fullgeek/" target="blank" style="color: inherit;">
          <div class="company-name">FullGeek - Dev Studio of 6 Members</div>
        </a>
      </div>
    </div>
  </div>
</div>
<div id="projects">

</div>