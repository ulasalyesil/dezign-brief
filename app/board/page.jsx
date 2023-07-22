'use client'

import React from 'react';
import Board from 'react-trello';

export default function Page() {
  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'To Do',
        cards: [
          { id: 'card1', title: 'Task 1', description: 'Description of Task 1' },
          { id: 'card2', title: 'Task 2', description: 'Description of Task 2' },
          // Add more cards here as needed
        ]
      },
      {
        id: 'lane2',
        title: 'In Progress',
        cards: [
          { id: 'card3', title: 'Task 3', description: 'Description of Task 3' },
          // Add more cards here as needed
        ]
      },
      {
        id: 'lane3',
        title: 'Done',
        cards: [
          // Add cards that are completed here
        ]
      }
    ]
  };

  return (
    <div>
      {/* Render the Board component with the data */}
      <Board data={data} />
    </div>
  );
}
