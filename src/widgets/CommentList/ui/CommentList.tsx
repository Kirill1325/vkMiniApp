import { Button } from "@vkontakte/vkui"
import { CommentItem } from "../../../entities/CommentItem"
import { NewsType, CommentType, NewsApi } from "../../../entities/NewsItem"
import { Icon16Replay } from '@vkontakte/icons'
import { useAppDispatch } from "../../../app/store"

interface CommentListProps {
    commentList: number[],
    news: NewsType | CommentType
}

export const CommentList = ({ commentList, news }: CommentListProps) => {

    const dispatch = useAppDispatch()

    const handleClick = () => {
        commentList.map(comment => {
            dispatch(
                NewsApi.endpoints.getCommentById.initiate(
                    comment,
                    { subscribe: false, forceRefetch: true },
                )
            )
        })
    }

    return (
        <>
            <Button onClick={() => handleClick()} ><Icon16Replay /></Button>
            {commentList.map((comment: number) =>
                <CommentItem key={comment} commentId={comment} commentParent={news} />
            )}
        </>
    )
}
