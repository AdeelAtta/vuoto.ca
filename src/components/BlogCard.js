import Link from 'next/link'

function BlogCard(props) {
    const date = new Date(props.date);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return <div className=" expand_100 padding_16" >
        <div className="stack left padding_16">
            <h1 className="font_33 semi_bold padding_8"><Link className='t_black' href={`blogs/${props.slug}`}>{props.title}</Link></h1>
            <span className="font_13 t_gray light expand_100 ml_8 "><b className='t_golden'>Posted on :</b> {formattedDate} <b className='ml_8 t_golden'>Author : </b>Vuoto</span>
            {props.desc ? <div className='pl_8 mt_8 light font_13 t_gray' style={{ textOverflow: 'ellipsis', height: '2lh', overflow: 'hidden' }} dangerouslySetInnerHTML={{ __html: props.desc }}></div> : <p></p>}
            {props.desc && <div className='mt_16 '><Link className="pagBtn font_13 semi_bold t_purple padding_8" href={`blogs/${props.slug}`}>READ MORE</Link></div> }
        </div>
    </div>
}

export default BlogCard
