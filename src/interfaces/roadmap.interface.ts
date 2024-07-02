export interface RoadmapType {
  id: string;
  userId: string;
  title: string;
  stages: {
    Name: string;
    Timeframe: string;
    Tasks: {
      Name: string;
      Description: string;
      Time: string;
      Subtasks: {
        Name: string;
        Description: string;
        Time: string;
        Resources: string[];
      }[];
    }[];
  }[];
  updatedAt: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
  };
}