import { Tag } from "antd";
import Card from "antd/es/card/Card"

const NewsItem = ({ news }) => {
  return (
    <div style={{marginLeft: 'auto', marginRight: 'auto'}}>
      <Card
        style={{width: 500}}
      >
        <div
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
          }}
        >
          <h3>{news.title}</h3>
          <p>{news.body}</p>
        </div>
        <div>
          {news.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <p>Количество реакций: {news.reactions} </p>
      </Card>
    </div>
  )
}

export default NewsItem;
