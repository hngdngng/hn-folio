import Head from "next/head";
import NavBar from "@/components/NavBar";
import ProjectSpec from "@/components/ProjectSpec";
import { projectConfig } from "@/constants/project"

export default function Home() {
  return (
    <>
      <Head>
        <title>Hoang D. Nguyen</title>
        <meta name='description' content='Hoang D. Nguyen portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <main>
        <NavBar />
        {projectConfig.map(project => {
          return <ProjectSpec key={project.name} project={project} />
        })}
      </main>
    </>
  );
}