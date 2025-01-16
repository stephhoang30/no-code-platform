import React from "react";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PublishIcon from "@mui/icons-material/Publish";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import FolderMoveIcon from "@mui/icons-material/DriveFileMove";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";

export type ContextMenuProps = {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onAction: (action: string) => void;
};

export const ContextMenu: React.FC<ContextMenuProps> = ({ anchorEl, onClose, onAction }) => {
  const open = Boolean(anchorEl);

  const handleMenuClick = (action: string) => {
    onAction(action);
    onClose();
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      <MenuItem onClick={() => handleMenuClick("edit")}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Edit</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => handleMenuClick("publish")}>
        <ListItemIcon>
          <PublishIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Publish</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => handleMenuClick("duplicate")}>
        <ListItemIcon>
          <FileCopyIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Duplicate</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => handleMenuClick("move")}>
        <ListItemIcon>
          <FolderMoveIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Move to folder</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => handleMenuClick("settings")}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Project Settings</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => handleMenuClick("delete")}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>
    </Menu>
  );
};