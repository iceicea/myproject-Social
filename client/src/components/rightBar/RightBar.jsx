import './rightBar.scss';
import { getRandomName } from '../../utils/getRandomNames.js';
const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200" alt="" />
              <span>{getRandomName()}</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/201" alt="" />
              <span>{getRandomName()}</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/202" alt="" />
              <p>
                <span>{getRandomName()}</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/204" alt="" />
              <p>
                <span>{getRandomName()}</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/205" alt="" />
              <p>
                <span>{getRandomName()}</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/206" alt="" />
              <p>
                <span>{getRandomName()}</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/207" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/208" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/209" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/210" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/211" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/212" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/213" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/214" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/215" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/216" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/217" alt="" />
              <div className="online" />
              <span>{getRandomName()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
