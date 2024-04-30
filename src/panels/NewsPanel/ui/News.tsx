import { useParams, useRouteNavigator } from "@vkontakte/vk-mini-apps-router"
import { Avatar, Div, Group, NavIdProps, Panel, PanelHeader, PanelHeaderBack, RichCell } from "@vkontakte/vkui"
import { NewsApi } from "../../../entities/NewsItem";
import { useFormattedTime } from "../../../shared/hooks";
import { CommentList } from "../../../widgets/CommentList";

let formattedTime: string

export const News = ({ id }: NavIdProps) => {

  const routeNavigator = useRouteNavigator();

  const params = useParams()

  const { data: news } = NewsApi.useGetNewsByIdQuery(Number(params?.id))

  if (news) {
    formattedTime = useFormattedTime(news.time)
  }

  return (
    news &&
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}>На Главную</PanelHeader>
      <Div>
        <Group mode="plain">
          <RichCell
            before={<Avatar
              size={40}
              initials={news.by[0]}
            />}
            caption={formattedTime}
          >
            {news.by}
          </RichCell>
          <a target='_blank' href={news.url}>{news.title}</a>
        </Group>
        {news.kids
          ?
          <Group>
            <p>{news.descendants} comments</p>
            <CommentList commentList={news.kids} news={news} />

          </Group>
          :
          <Group>
            <p>No Comments</p>
          </Group>
        }
      </Div>
    </Panel >
  )
}
