"use client";

import {List} from "@/components/List";
import {Project, ProjectProps} from "@/components/Project";
import { useEffect, useState } from "react";

export default function Games() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  useEffect(() => {
  fetch("https://fynn93.dev/api/projects/")
    .then((res) => res.json())
    .then((data) => setProjects(data))
    .catch((err) => {
      console.warn("Fetch failed:", err);
    });
  }, [])

  const projectList = projects.map(project => 
    <Project title={project.title} description={project.description} stars={project.stars} key={project.key}></Project>
  );

  return (
    <List>
      {projectList}
    </List>
  );
}