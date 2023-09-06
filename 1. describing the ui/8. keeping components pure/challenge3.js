export default function StoryTray({ stories }) {
  // 순수 함수는 렌더링 전에 존재했던 객체나 변수를 변경하지 않아야 한다.
  // 리액트는 props가 변경되면 리렌더링을 하게 된다.
  // 화면을 업데이트 하려면 setState를 활용하자.
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
