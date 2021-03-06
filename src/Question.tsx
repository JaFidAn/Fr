/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { gray2, gray3 } from './Styles'

import React from 'react'
import { QuestionData } from './QuestionsData'
import { Link } from 'react-router-dom'

interface Props {
  data: QuestionData
  showContent?: boolean
}

export const Question = ({ data, showContent = true }: Props) => (
  <div
    css={css`
      padding: 10px 0px;
    `}
  >
    <Link
      css={css`
        text-decoration: none;
        color: ${gray2};
      `}
      to={`/questions/${data.questionId}`}
    >
      {data.title}
    </Link>

    <div>{data.title}</div>
    {showContent && (
      <div>
        {data.content.length > 50
          ? `${data.content.substring(0, 50)}...`
          : data.content}
      </div>
    )}
    <div>
      {`Asked by ${data.userName} on
        ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
)

// Question.defaultProps = {
//     showContent:true,
// };
