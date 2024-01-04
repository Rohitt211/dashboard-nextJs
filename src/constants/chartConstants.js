export const DOUGHNUT_CHART_DATA = {
  status: [
    { name: "Done", color: "blue" },
    { name: "in progress", color: "purple" },
    { name: "completed", color: "pink" },
  ],
  data: {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["blue", "purple", "red"],
        hoverBackgroundColor: ["blue", "purple", "red"],
        circumference: 180,
        rotation: 270,
      },
    ],
  },
};
