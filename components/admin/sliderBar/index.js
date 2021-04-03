import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link, List } from '@material-ui/core';

export default function SliderBar() {
  return (
    <List>
      <ListItem button component="a" href="/dashboard">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItem>
      <ListItem button component="a" href="/dashboard/clientes">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes/Leads" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Oportunidades" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemText primary="Tarefas" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Configuração" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Meu plano" />
      </ListItem>
    </List>
  )
}