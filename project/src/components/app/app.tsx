import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  cardsCount: number;
  offersCount: number;
}

function App({cardsCount, offersCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen cardsCount={cardsCount} offersCount={offersCount}/>
  );
}

export default App;
