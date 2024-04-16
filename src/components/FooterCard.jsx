
const FooterCard = (props) => {
  return (
    <div className="text-white">
      <h5 className="text-slate-600 font-semibold text-sm">{props.h5}</h5>
      <ul className="">
        <li className="list-elements">
          <a href="#">{props.list1}</a>
        </li>
        <li className="list-elements">
          <a href="#">{props.list2}</a>
        </li>
        <li className="list-elements">
          <a href="#">{props.list3}</a>
        </li>
        <li className="list-elements">
          <a href="#">{props.list4}</a>
        </li>
        <li className="list-elements">
          <a href="#">{props.list5}</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterCard