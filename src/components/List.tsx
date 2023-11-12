import { ReactNode } from 'react'

interface ListProps<T> {
  items: T[],
  render: (item: T) => ReactNode,
}

// <T>를 인식하지 못하는 문제로, 뒤에 ','를 붙여서 인식하게 한다. 해당 파트는 자동으로 변환됨.
const List = <T,>({items, render}: ListProps<T>) => {
  return (
    <div>List
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {render(item)}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List