import { Project } from "./types";
import { getProjects } from "@/sanity/queries/projects";
import FeaturedProjectsClient from "./client";

const FeaturedProjects = async () => {
  const data: Project[] = await getProjects();

  return <FeaturedProjectsClient projects={data} />;
};

export default FeaturedProjects;
