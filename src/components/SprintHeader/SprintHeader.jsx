import st from './SprintHeader.module.css';
import { useState } from 'react';

import SearchButton from '../SearchButton';
import TasksSearchInput from '../TasksSearchInput';
import Media from 'react-media';

const SprintHeader = () => {
  const [searchActive, setSearchActive] = useState(false);

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
                        {searchActive && (
                          <TasksSearchInput
                            onBlur={() => setSearchActive(false)}
                          />
                        )}
                        <SearchButton onClick={() => setSearchActive(true)} />
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
