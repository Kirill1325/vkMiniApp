import {  Group } from "@vkontakte/vkui"
import { NewsApi, NewsItem } from "../../../entities/NewsItem"

export const NewsList = () => {

  const { data: newsList } = NewsApi.useGetLatestNewsQuery(undefined,
    {
      pollingInterval: 60000,
    }
  )

  return (
    <Group>
      {newsList && newsList.slice(0, 100).map(news =>
        <NewsItem key={news} newsId={news} />
      )}
    </Group>
  )
}
