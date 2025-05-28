import Image from "next/image";
import { projectQuery } from "@/lib/sanity.query";
import type { ProjectType } from "@/types";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import EmptyState from "../shared/EmptyState";
import { RiFolderOpenFill } from "react-icons/ri";

export default async function Project() {
  const projects: ProjectType[] = await sanityFetch({
    query: projectQuery,
    tags: ["project"],
  });

  return (
    <section className="mt-32">
      <Slide delay={0.16}>
        <div className="mb-16">
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Projects
          </h2>
        </div>
      </Slide>

      {projects.length > 0 ? (
        <Slide delay={0.18}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
            {projects.map((project) => (
              <div key={project._id} className="group">
                <div className="relative aspect-square">
                  {project.coverImage && (
                    <Image
                      src={project.coverImage}
                      alt={project.name}
                      fill
                      className="object-cover duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                    {project.tagline}
                  </p>
                  <p className="dark:text-zinc-400 text-zinc-600 my-4">
                    {project.description}
                  </p>
                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-color hover:underline"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Slide>
      ) : (
        <EmptyState
          icon={<RiFolderOpenFill />}
          title="Projects Not Provided"
          message="We could not find any projects at the moment. To add one, visit the Sanity studio to start editing the content."
        />
      )}
    </section>
  );
}
