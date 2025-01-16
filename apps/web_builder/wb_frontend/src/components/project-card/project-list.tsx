import React, { useState } from "react";
import { ProjectCard } from "./project-card";
import { ContextMenu } from "./context-menu";

export const ProjectList: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: "1xbet",
      lastEdit: "Hôm nay, 7 PM",
      thumbnail: "https://pbs.twimg.com/media/GRJdglLWcAAYwU8.jpg",
    },
    {
      id: 2,
      name: "Bangbet",
      lastEdit: "Hôm qua, 3 PM",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCwH0yuEiPJ74SMgrOdSEAC9GjwtK-imfnQ&s",
    },
  ];

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>, projectId: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedProject(projectId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProject(null);
  };

  const handleMenuAction = (action: string) => {
    console.log(`Action: ${action} on Project ID: ${selectedProject}`);
  };

  return (
    <div className="p-5 space-y-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          lastEdit={project.lastEdit}
          thumbnail={project.thumbnail}
          onMenuClick={handleMenuClick}
        />
      ))}
      <ContextMenu anchorEl={anchorEl} onClose={handleMenuClose} onAction={handleMenuAction} />
    </div>
  );
};
