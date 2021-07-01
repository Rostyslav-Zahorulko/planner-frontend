import st from './SprintHeader.module.css';

import search from '../../images/search.svg';
import Media from 'react-media';

const SprintHeader = () => {
  return (
    <div className={st.title_sprint}>
      <Media queries={{ small: { minWidth: 768 } }}>
        {matches =>
          matches.small ? (
            <ul className={st.list_sprint}>
              <Media queries={{ big: { maxWidth: 1280 } }}>
                {matches =>
                  matches.big ? (
                    <>
                      <li className={st.list_sprint_item}>Заплановано годин</li>
                      <li className={st.list_sprint_item}>
                        Витрачено год / день
                      </li>
                      <li className={st.list_sprint_item}>Витрачено годин</li>
                    </>
                  ) : (
                    <>
                      <li className={st.list_sprint_item}>Задача</li>
                      <li className={st.list_sprint_item}>Заплановано годин</li>
                      <li className={st.list_sprint_item}>
                        Витрачено год / день
                      </li>
                      <li className={st.list_sprint_item}>Витрачено годин</li>
                      <li className={st.list_sprint_item}>
                        <img
                          className={st.search}
                          src={search}
                          alt="search"
                          width="20"
                          height="20"
                        />
                      </li>
                    </>
                  )
                }
              </Media>
            </ul>
          ) : (
            ''
          )
        }
      </Media>
    </div>
  );
};

export default SprintHeader;
