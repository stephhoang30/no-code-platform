import React, { MouseEvent } from "react";
import { Card, CardMedia, CardContent, Typography, IconButton, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export type ProjectCardProps = {
    id: number;
    name: string;
    lastEdit: string;
    thumbnail: string;
    onMenuClick: (event: MouseEvent<HTMLButtonElement>, projectId: number) => void;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, lastEdit, thumbnail, onMenuClick }) => {
    return (
        <Card className="flex flex-col w-72 border rounded-lg shadow-md overflow-hidden">
            <CardMedia
                component="img"
                className="h-40 object-cover"
                image={thumbnail}
                alt={name}
            />
            <CardContent className="flex justify-between items-center p-4">
                <img
                    src="/header_img/Ellipse 1.png" // Đường dẫn tới ảnh icon người dùng
                    alt="User Icon"
                    style={{ width: 32, height: 32, borderRadius: '50%' }}
                />
                <div className="flex flex-col">
                    <Typography variant="h6" className="text-lg font-semibold mb-2">{name}</Typography>
                    <Typography variant="body2" className="text-sm text-gray-500">{lastEdit}</Typography>
                </div>
                <div>
                    <IconButton onClick={(event) => onMenuClick(event, id)}>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    );
};
