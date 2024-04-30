import {
  Panel,
  PanelHeader,
  Div,
  NavIdProps,
  Button,
} from '@vkontakte/vkui';
// import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { NewsList } from '../../../widgets/NewsList';
import { Icon16Replay } from '@vkontakte/icons';
import { useAppDispatch } from '../../../app/store';
import { NewsApi } from '../../../entities/NewsItem';

export const Home = ({ id }: NavIdProps) => {
  // const routeNavigator = useRouteNavigator();

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(
      NewsApi.endpoints.getLatestNews.initiate(
        undefined,
        { subscribe: false, forceRefetch: true },
      )
    )
  }

  return (
    <Panel id={id}>
      <PanelHeader>
        Главная
        <Button onClick={() => handleClick()} style={{float: 'right'}}><Icon16Replay /></Button>
      </PanelHeader>
      <Div>
        <NewsList />
      </Div>
    </Panel>
  );
};
