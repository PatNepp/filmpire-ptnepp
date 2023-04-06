import { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import alanBtn from '@alan-ai/alan-sdk-web';

import { useHistory } from 'react-router-dom';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';
import { searchMovie, selectGenreOrCategory } from '../features/currentGenreOrCategory';

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    alanBtn({
      key: '711f920c906084cddaf57f63bdb710cc2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode, genreOrCategory, genres, query }) => {
        if (command === 'chooseGenre') {
          const foundGenre = genres.find((genre) => genre.name.toLowerCase() === genreOrCategory.toLowerCase());

          if (foundGenre) {
            history.push('/');
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith('top') ? 'top-rated' : genreOrCategory;
            history.push('/');
            dispatch(selectGenreOrCategory(category));
          }
        } else if (command === 'search') {
          history.push('/');
          dispatch(searchMovie(query));
        } else if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.clear();
          window.location.href = '/';
        }
      },
    });
  }, []);
};

export default useAlan;
