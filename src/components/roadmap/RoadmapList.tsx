import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Link,
} from "@mui/material";
import router from "../Routes";

const RoadmapList = ({ roadmaps }) => {
  return (
    
      <Grid container spacing={2} sx={{ marginTop: "10px" }}>
        {roadmaps.map((roadmap) => (
          <Grid item xs={12} sm={6} md={4} key={roadmap.id}>
            <Card>
              <CardActionArea
                component={Link}
                onClick={() => router.navigate(`/roadmap/${roadmap.id}`)}
                sx={{ background: "#9FD7F9", maxHeight: "135px" }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {roadmap.title}
                  </Typography>
                  {roadmap.stages.map((stage) => (
                    <Typography variant="body2" color="text.secondary">
                      {stage.Name}
                    </Typography>
                  ))}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
  );
};

export default RoadmapList;
