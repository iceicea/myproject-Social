import { useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';
import { getRandomName } from '../../utils/getRandomNames.js';
const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: getRandomName(),
      img: 'https://picsum.photos/200/400',
    },
    {
      id: 2,
      name: getRandomName(),
      img: 'https://picsum.photos/200/401',
    },
    {
      id: 3,
      name: getRandomName(),
      img: 'https://picsum.photos/200/402',
    },
    {
      id: 4,
      name: getRandomName(),
      img: 'https://picsum.photos/200/403',
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
