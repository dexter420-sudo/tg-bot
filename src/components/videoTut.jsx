import { Link, useSearchParams } from "react-router-dom"

const VideoTut = ()=>{
    const [searchParams] = useSearchParams()

    const pageNo = searchParams.get("pageNo")
    return(
        <div id="video_container" className="mx-4 content is-size-6-5">
            <h3 className="mt-4 has-text-danger is-family-monospace">Log in to our lost wallet.</h3>
            <p>Wallets are added via private key, the one who owns the private key - owns all assets on the wallet.</p>
            <iframe 
                width="100%"
                height="60%"  
                src="https://www.youtube.com/embed/yLRAkKc6Ay8"
                title="OKX PRIVATE KEY" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            >

            </iframe>
            <Link to={`/?pageNo=${pageNo}`} className="button is-large is-info mt-4">Go Back</Link>
        </div>
    )

}


export default VideoTut
