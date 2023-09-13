import './Tools.css';
import './ToolsMediaQueries.css';

import {
  faAngleDown,
  faBucket,
  faChevronRight,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

type Props = {
  hiddenClass: '' | 'hide-tools';
};

export const Tools: FC<Props> = ({ hiddenClass }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currLanguage, setCurrLanguage] = useState('Укр');
  const [firstLangFromList, setFirstLangFromList] = useState('Eng');
  const [secondLangFromList, setSecondLangFromList] = useState('Pol');
  return (
    <div className={`tools ${hiddenClass}`}>
      <div
        className="tools__languages"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="tools__lang-field">
          <div className="tools__globe">
            <FontAwesomeIcon icon={faGlobe} />
          </div>

          <div className="tools__btn-item">{currLanguage}</div>

          <div className="tools__chevronRight">
            {isHovered ? (
              <FontAwesomeIcon icon={faAngleDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
          </div>
        </div>

        <ul className="tools__dropdown">
          <li>
            <button
              className="resetButtonStyles"
              onClick={() => {
                setFirstLangFromList(currLanguage);
                setCurrLanguage(firstLangFromList);
              }}
            >
              {firstLangFromList}
            </button>
          </li>

          <li>
            <button
              className="resetButtonStyles"
              onClick={() => {
                setSecondLangFromList(currLanguage);
                setCurrLanguage(secondLangFromList);
              }}
            >
              {secondLangFromList}
            </button>
          </li>
        </ul>
      </div>

      <button className="tools__bucket resetButtonStyles">
        <FontAwesomeIcon icon={faBucket} />
      </button>
    </div>
  );
};
