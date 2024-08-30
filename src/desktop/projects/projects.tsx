import styles from './projects.module.css'
import ProjectCard from './projectCard';
import recordbin from './recordbin.png'
import albumList from './albumLIst.png'

export default function Projects () {
  return (
    <section className={styles.projects}>
      <h1>My Projects</h1>
      <ProjectCard 
        title="RecordBin."
        date="(2024)"
        tools="Javascript, React.js, Express.js, MySQL, CSS, Docker, Linux, AWS"
        description='RecordBin is a full stack web application with a React frontend, Express API backend, and a MySQL database.
                    The Application draws data from multiple music metadata APIs and allows users to create lists and rate releases.
                    I Implemented user authentication using Json Web Tokens for secure sessions
                    and used Docker to containerize the application for efficient deployment on an AWS EC2 Ubuntu instance.
                    Additionally, I utilized Github Actions for Continuous Integration / Deployment (CI/CD).'
        image={recordbin}
        link="http://recordbin.net"
      />
      <ProjectCard 
        title="3D Vulkan Renderer"
        date='(2023)'
        tools='C/C++, Vulkan, CMake, Dear ImGui, Git, GLSL'
        description='Developed a 3D graphics renderer using Khronos Group’s Vulkan API.
                    The renderer implements a model loading system and camera movement scheme for viewing scenes
                    I used CMake to structure the project and Git for version control'
        image={null}
        link={undefined}
      />
      <ProjectCard
        title="File Based Router"
        date="(2024)"
        tools="Go"
        description='Developed a file routing system to serve documents over tcp connections
                    that implements a http server framework from scratch using Go Web Sockets'
        image={null}
        link={undefined}
      />
      <ProjectCard
        title="Spotify List Creator"
        date="(2021)"
        tools='JavaScript, HTML, CSS, React.js, Node.js'
        description="Developed a Web Application that enables users to create a collage of their favorite music albums.
              I Connected the application to Spotify’s Web API for faster searching and image acquisition
              I also Connected the application to OpenAI’s ChatGPT to provide users with music recommendations"
        image={albumList}
        link='https://gabriel-nugent.github.io/spotify-album-list/'
      />
    </section>
  );
}
