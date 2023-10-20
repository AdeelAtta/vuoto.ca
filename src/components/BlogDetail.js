import Image from 'next/image'

function BlogDetail(props) {
    const date = new Date(props.date);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, options);
    return <div className="mt_8 mb_8 expand_100">
        <div className="stack left bg_l_gray padding_16" style={{ lineHeight: 2 }}>
            <Image className='radius_8' width={800} height={300} src={props.thumbnail ? props.thumbnail : '/assets/images/blogs/thumbnail.png'} alt="blog Thumbnail" />
            <span className="font_13 t_gray light expand_100 ml_8 "><b className='t_golden'>Posted on :</b> {formattedDate} <b className='ml_8 t_golden'>Author : </b>Vuoto</span>
            <h1 className="font_33 bold padding_8">{props.title ? props.title : `No Title Found` }</h1>
           {props.content ? <div dangerouslySetInnerHTML={{ __html: props.content }}></div>:<p>No Data Available</p> }
        </div>
    </div>
}

export default BlogDetail