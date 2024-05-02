import { RichCell, Avatar, Button } from "@vkontakte/vkui"
import { CommentType, NewsApi, NewsType } from "../../NewsItem"
import { useConvertedText, useFormattedTime } from "../../../shared/hooks"
import { Icon16Dropdown } from '@vkontakte/icons';
import { useState } from "react"
import cl from './CommentItem.module.css'

interface CommentItemProps {
    commentId: number,
    commentParent: NewsType | CommentType,
}

let formattedTime: string
let convertedText: string | null

export const CommentItem = ({ commentId, commentParent }: CommentItemProps) => {

    const [skip, setSkip] = useState(false)

    const { data: comment } = NewsApi.useGetCommentByIdQuery(commentId, { skip })

    if (comment) {
        formattedTime = useFormattedTime(comment.time)
        convertedText = useConvertedText(comment.text)
    }

    const handleClick = () => {
        setSkip((prev) => !prev)
    }

    return (
        comment && !comment.deleted &&
        <RichCell
            className={cl.vkuiTappable}
            before={<Avatar
                size={28}
                initials={comment.by[0]}
            />}
            multiline={true}
            subhead={comment.by + ' ' + formattedTime}
            actions={
                comment.kids && commentParent?.type === 'story' && !skip &&
                <Button data-testid='btn'  mode="secondary" size="s" onClick={() => handleClick()}>
                   <Icon16Dropdown /> 
                </Button>
            }
        >
            {convertedText}
            {comment.kids && skip && comment.kids.map((c: number) =>
                <CommentItem key={c} commentId={c} commentParent={comment} />
            )}
        </RichCell>


    )
}
