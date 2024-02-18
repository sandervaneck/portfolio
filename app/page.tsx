import Image from "next/image";
import React from "react";
import { Eye } from "lucide-react";
import { Card } from "./components/Card";
import { Navigation } from "./components/Nav";
import { MyPosition, MyName, privateProjects, publicProjects, MyPurpose, MySecondPurpose } from "./components/constants";
import { DescribeProject } from "./components/DescribeContent";

export default async function ProjectsPage() {

  return (
    <div className="relative pb-16">
      <Navigation/>
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
      <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            {MyName}
          </h2>
          <p className="mt-4 text-zinc-400">
            {MyPosition}
          </p>

          <h2 className="text-lg tracking-tight text-zinc-100 sm:text-4xl">
            {MyPurpose}
          </h2>
          <p className="mt-4 text-zinc-400">
          <MySecondPurpose/>    
          </p>
        </div>  
        <div className="w-full h-px bg-zinc-800" />
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Private and Commercial Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Those of which the code is not publicly available, and is used for commercial purposes
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        {privateProjects.map((project, index)=> (
  <Card key={index}>
    <a href={project.url} target="_blank">
      <article className="relative w-full h-full p-4 md:p-8">
        <div className="flex items-center justify-between gap-2">
          <div className="text-xs text-zinc-100">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, {
                  dateStyle: "medium",
                }).format(new Date(project.date))}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </div>
          <span className="flex items-center gap-1 text-xs text-zinc-500">
            <Eye className="w-4 h-4" />
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(
              1000000
            )}
          </span>
        </div>
        <h2
          id="featured-post"
          className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
        >
          {project.name}
        </h2>
        <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
          <DescribeProject project={project}/>
        </p>
        <div className="absolute bottom-2 right-2">
          <Image
            src={project.image}
            alt={project.name}
            height={100}
            width={100}
            className="w-20 h-12" 
            priority
          />
        </div>
      </article>
    </a>
  </Card>
))}

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
         
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
        
          </div> 
        </div>
      </div>
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Public and Shared Projects
          </h2>
          <p className="mt-4 text-zinc-400">
          Keeping knowledge for yourself would be selfish.<br/>
            Learn to code by following my courses!
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        {publicProjects.map((project, index)=> (
            <Card key={index}>
    <a href={project.url} target="_blank">
      <article className="relative w-full h-full p-4 md:p-8">
        <div className="flex items-center justify-between gap-2">
          <div className="text-xs text-zinc-100">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, {
                  dateStyle: "medium",
                }).format(new Date(project.date))}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </div>
          <span className="flex items-center gap-1 text-xs text-zinc-500">
            <Eye className="w-4 h-4" />
            {Intl.NumberFormat("en-US", { notation: "compact" }).format(
              1000000
            )}
          </span>
        </div>
        <h2
          id="featured-post"
          className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
        >
          {project.name}
        </h2>
        <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
          <DescribeProject project={project}/>
        </p>
        <div className="absolute bottom-2 right-2">
          {/* <Image
            src={project.image}
            alt={project.name}
            height={100}
            width={100}
            className="w-20 h-12" 
            priority
          /> */}
        </div>
      </article>
    </a>
  </Card>
        ))}
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
         
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
        
          </div> 
        </div>
      </div>
    </div>
  );
}