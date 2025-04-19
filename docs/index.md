---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: My Name：
  text: Yifei Liu, Tobi
  tagline: •&nbsp;&nbsp;&nbsp;&nbsp;Backend DevOps<br>•&nbsp;&nbsp;&nbsp;&nbsp;Data Engineer<br>•&nbsp;&nbsp;&nbsp;&nbsp;Games Engineer
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
    details: • Docker, Git, Figma, Jira<br>• ChatGPT, Copilot, DeepSeek<br>• Nginx, Caddy
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

.my-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.my-section {
  scroll-snap-align: start;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
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
}
</style>

## EDUCATION

<section class="work-experience-section">
  <h2 class="section-title">Work Experience</h2>

  <div class="experience-item">
    <h3 class="job-title">Software Engineer</h3>
    <div class="job-meta">
      <span class="company">TechCorp Inc.</span>
      <span class="duration">Jan 2021 – Present</span>
    </div>
    <ul class="job-description">
      <li>Developed scalable web applications using React and Node.js.</li>
      <li>Led a team of 4 developers in agile sprints.</li>
      <li>Implemented CI/CD pipelines, reducing deployment time by 30%.</li>
    </ul>
  </div>

  <div class="experience-item">
    <h3 class="job-title">Frontend Developer</h3>
    <div class="job-meta">
      <span class="company">Creative Solutions</span>
      <span class="duration">Jun 2018 – Dec 2020</span>
    </div>
    <ul class="job-description">
      <li>Built responsive UI components with HTML, CSS, JavaScript.</li>
      <li>Collaborated closely with UX designers and backend teams.</li>
      <li>Optimized performance, achieving 90+ Lighthouse scores.</li>
    </ul>
  </div>
</section>

## WORK EXPERIENCE

## PROJECTS
