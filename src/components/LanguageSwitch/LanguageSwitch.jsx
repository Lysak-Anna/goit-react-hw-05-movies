import { LangContext } from 'Context/Context';
import { useContext } from 'react';
import css from './LanguageSwitch.module.css';
export default function LanguageSwitch() {
  const { changeLanguageHandler } = useContext(LangContext);

  return (
    <div className={css.div}>
      <label className={css.switch}>
        <input type="checkbox" onChange={changeLanguageHandler}></input>
        <span className={css.slider}></span>
        <span className={css.en}>ua</span>
        <span className={css.uk}>en</span>
      </label>{' '}
    </div>
  );
}
