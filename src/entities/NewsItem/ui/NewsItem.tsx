import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router"
import { Group, RichCell } from "@vkontakte/vkui"
import { NewsApi } from "../api/NewsService";
import { useFormattedTime } from "../../../shared/hooks";

interface NewsItemProps {
    newsId: number
}

let formattedTime: string


export const NewsItem = ({ newsId }: NewsItemProps) => {

    const routeNavigator = useRouteNavigator();

    const { data: news } = NewsApi.useGetNewsByIdQuery(newsId)

    if (news) {
        formattedTime = useFormattedTime(news.time)
    }

    return (
        news &&
        <Group mode="card">
            <RichCell
                subhead={formattedTime}
                text={'By ' + news.by}
                after={'Rating: ' + news.score}
                onClick={() => routeNavigator.push(`/news/${newsId}`)}
            >
                {news.title}
            </RichCell>
        </Group>
    )
}

