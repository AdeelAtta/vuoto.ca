import Link from 'next/link'

function RecommendBlogs(props) {
    const date = new Date(props.date);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return <div className="mt_8 mb_8 expand_100 ">
        <div className="stack left  padding_16">
            <Link className="font_16 t_golden light" href={props.href}>{props.title}</Link>
            <span className="font_13 t_gray light expand_100 ml_8 ">{formattedDate}</span>
        </div>
    </div>
}

export default RecommendBlogs
