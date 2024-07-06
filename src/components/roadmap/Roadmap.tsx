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
  Box,
  Modal,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RoadmapType } from "../../interfaces/roadmap.interface";
import React, { useState } from "react";

const Roadmap = ({ roadmap }: RoadmapType) => {
  const [openResourceModal, setOpenResourceModal] = useState(false);
  const [selectedSubtask, setSelectedSubtask] = useState(null);

  const handleResourceClick = (subtask: any) => {
    setSelectedSubtask(subtask);
    setOpenResourceModal(true);
  };

  const handleCloseModal = () => {
    setOpenResourceModal(false);
  };

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
                                <IconButton
                                  aria-label="resources"
                                  onClick={() => handleResourceClick(subtask)}
                                >
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

      <Modal
        open={openResourceModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Resources for {selectedSubtask?.Name}
          </Typography>
          {/* Display resources here */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* Replace with actual resource data */}
            {selectedSubtask?.Resources.map((resource: any) => (
              <Typography key={resource} variant="body1">
                {resource}
              </Typography>
            ))}
          </Typography>
        </Box>
      </Modal>
    </Paper>
  );
};

export default Roadmap;
