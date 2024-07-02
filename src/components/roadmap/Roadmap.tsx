import React, { useState, useEffect } from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Collapse,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RoadmapType } from "../../interfaces/roadmap.interface";

const Roadmap = ({ roadmap }: RoadmapType) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, width: "80vh" }}>
      <Typography variant="h5" gutterBottom>
        Roadmap
      </Typography>
      <List>
        {roadmap.stages.map((stage) => (
          <React.Fragment key={stage.Name}>
            <ListItem>
              <ListItemText
                primary={stage.Name}
                secondary={`Timeframe: ${stage.Timeframe}`}
              />
            </ListItem>
            <Divider />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Tasks</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {stage.Tasks.map((task) => (
                    <React.Fragment key={task.Name}>
                      <ListItem>
                        <ListItemText
                          primary={task.Name}
                          secondary={task.Description}
                        />
                        <Chip
                          label={task.Time}
                          variant="outlined"
                          color="primary"
                          size="small"
                          sx={{ ml: 2 }}
                        />
                      </ListItem>
                      <Divider />
                      <Collapse in={true} timeout="auto" unmountOnExit>
                        <List>
                          {task.Subtasks.map((subtask) => (
                            <ListItem key={subtask.Name}>
                              <ListItemText
                                primary={subtask.Name}
                                secondary={subtask.Description}
                              />
                              <Chip
                                label={subtask.Time}
                                variant="outlined"
                                color="primary"
                                size="small"
                                sx={{ ml: 2 }}
                              />
                              <Tooltip title="Resources">
                                <IconButton aria-label="resources">
                                  <span role="img" aria-label="resources">
                                    🗃️
                                  </span>
                                </IconButton>
                              </Tooltip>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </React.Fragment>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default Roadmap;
