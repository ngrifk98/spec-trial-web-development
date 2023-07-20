import React from 'react';

function RobotList() {
  // Placeholder robot data (you can replace this with your actual data)
  const robots = [
    { id: 1, name: 'Robot 1' },
    { id: 2, name: 'Robot 2' },
    { id: 3, name: 'Robot 3' },
  ];

  return (
    <div>
      <h2>RobotList Component</h2>
      <ul>
        {robots.map((robot) => (
          <li key={robot.id}>{robot.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RobotList;
