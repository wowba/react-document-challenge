export default function StoryTray({ stories }) {
  // 리액트는 props가 변경되면 리렌더링을 하게 된다.
  const newStories = stories.slice()

  newStories.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {newStories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
